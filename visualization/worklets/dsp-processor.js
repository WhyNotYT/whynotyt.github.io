class SharedDspProcessor extends AudioWorkletProcessor {
  constructor() {
    super();
    this.mode = "passthrough";
    this.phase = 0;
    this.toneFrequency = 1000;
    this.toneSampleRate = 2000;
    this.toneBitDepth = 16;
    this.tonePhaseOffset = 0;
    this.toneTime = 0;
    this.iirB = [1];
    this.iirA = [1];
    this.iirStates = [];
    this.aliasing = {
      lpfCutoff: 22050,
      targetSampleRate: 32000,
      bitDepth: 16,
      sourceSampleRate: sampleRate,
      mode: "alias-processed",
    };
    this.lpState = [];
    this.holdState = [];
    this.lpAlpha = 0.5;

    this.port.onmessage = (event) => {
      const message = event.data || {};
      if (message.type === "setMode") {
        this.mode = message.mode || "passthrough";
        if (this.mode === "alias-processed" || this.mode === "alias-diff") {
          this.aliasing.mode = this.mode;
        }
      } else if (message.type === "setTone") {
        this.toneFrequency = Math.max(
          0,
          Number.isFinite(message.frequency) ? message.frequency : 1000,
        );
        this.toneSampleRate = Math.max(1, message.sampleRate || 2000);
        this.toneBitDepth = Math.max(1, Math.min(24, message.bitDepth || 16));
        this.tonePhaseOffset = Number.isFinite(message.phaseRadians)
          ? message.phaseRadians
          : 0;
      } else if (message.type === "setIIR") {
        this.iirB = Array.isArray(message.b) && message.b.length ? message.b : [1];
        this.iirA = Array.isArray(message.a) && message.a.length ? message.a : [1];
        this.resetIirState();
      } else if (message.type === "resetPhase") {
        this.phase = 0;
        this.toneTime = 0;
      } else if (message.type === "resetIIR") {
        this.resetIirState();
      } else if (message.type === "setAliasingParams") {
        this.aliasing.lpfCutoff = Math.max(20, message.lpfCutoff || 22050);
        this.aliasing.targetSampleRate = Math.max(
          1000,
          message.targetSampleRate || 32000,
        );
        this.aliasing.bitDepth = Math.max(1, Math.min(24, message.bitDepth || 16));
        this.aliasing.sourceSampleRate = Math.max(
          1000,
          message.sourceSampleRate || sampleRate,
        );
        this.updateLPFCoefficients();
      }
    };
    this.updateLPFCoefficients();
  }

  resetIirState() {
    this.iirStates = [];
  }

  ensureIirState(channelCount) {
    const order = Math.max(this.iirA.length, this.iirB.length) - 1;
    while (this.iirStates.length < channelCount) {
      this.iirStates.push(new Float64Array(order + 2));
    }
    for (let i = 0; i < this.iirStates.length; i++) {
      if (this.iirStates[i].length !== order + 2) {
        this.iirStates[i] = new Float64Array(order + 2);
      }
    }
  }

  ensureAliasingState(channelCount) {
    while (this.lpState.length < channelCount) {
      this.lpState.push({
        x1a: 0,
        x2a: 0,
        y1a: 0,
        y2a: 0,
        x1b: 0,
        x2b: 0,
        y1b: 0,
        y2b: 0,
      });
    }
    while (this.holdState.length < channelCount) {
      this.holdState.push({ held: 0, countdown: 0 });
    }
  }

  updateLPFCoefficients() {
    const fc = Math.min(this.aliasing.lpfCutoff, sampleRate * 0.49);
    const q = 0.707;
    const w0 = (2 * Math.PI * fc) / sampleRate;
    const cw = Math.cos(w0);
    const sw = Math.sin(w0);
    const alpha = sw / (2 * q);
    const a0 = 1 + alpha;
    this.b0 = ((1 - cw) / 2) / a0;
    this.b1 = (1 - cw) / a0;
    this.b2 = ((1 - cw) / 2) / a0;
    this.a1 = (-2 * cw) / a0;
    this.a2 = (1 - alpha) / a0;
  }

  processAliasing(inputs, outputs) {
    const inputChannels = inputs[0] || [];
    const outputChannels = outputs[0] || [];
    const channelCount = outputChannels.length;
    if (channelCount === 0) return true;
    this.ensureAliasingState(channelCount);

    const fs = this.aliasing.sourceSampleRate || sampleRate;
    const target = this.aliasing.targetSampleRate;
    const ratio = fs / target;
    const doDownsample = target < fs;
    const quantScale = Math.pow(2, this.aliasing.bitDepth) / 2;
    const diffMode = this.aliasing.mode === "alias-diff";

    for (let ch = 0; ch < channelCount; ch++) {
      const x = inputChannels[ch] || inputChannels[0];
      const y = outputChannels[ch];
      if (!x || !y) continue;
      const s = this.lpState[ch];
      const h = this.holdState[ch];

      for (let i = 0; i < y.length; i++) {
        const xn = x[i] || 0;

        // stage A
        const ya =
          this.b0 * xn +
          this.b1 * s.x1a +
          this.b2 * s.x2a -
          this.a1 * s.y1a -
          this.a2 * s.y2a;
        s.x2a = s.x1a;
        s.x1a = xn;
        s.y2a = s.y1a;
        s.y1a = ya;

        // stage B (cascaded for steeper anti-alias LPF)
        const yb =
          this.b0 * ya +
          this.b1 * s.x1b +
          this.b2 * s.x2b -
          this.a1 * s.y1b -
          this.a2 * s.y2b;
        s.x2b = s.x1b;
        s.x1b = ya;
        s.y2b = s.y1b;
        s.y1b = yb;

        let held = yb;
        if (doDownsample) {
          if (h.countdown <= 0) {
            h.held = yb;
            h.countdown += ratio;
          }
          h.countdown -= 1;
          held = h.held;
        }

        const aliasedNoQuant = held;
        const processed = Math.round(held * quantScale) / quantScale;
        let out = processed;
        if (diffMode) {
          out = doDownsample ? aliasedNoQuant - yb : 0;
        }
        y[i] = Number.isFinite(out) ? Math.max(-1, Math.min(1, out)) : 0;
      }
    }
    return true;
  }

  processTone(output) {
    const out = output[0];
    if (!out) return true;
    const channelCount = out.length;
    if (channelCount === 0) return true;

    const blockSize = out[0].length;
    const quantScale = Math.pow(2, this.toneBitDepth) / 2;
    const discreteFs = Math.max(1, this.toneSampleRate);
    const sincTaps = 28;
    let currentTime = this.toneTime;

    const sinc = (u) => {
      if (Math.abs(u) < 1e-10) return 1;
      const p = Math.PI * u;
      return Math.sin(p) / p;
    };
    const quantizedSampleAt = (n) => {
      const t = n / discreteFs;
      const v = Math.sin(
        2 * Math.PI * this.toneFrequency * t + this.tonePhaseOffset,
      );
      return Math.round(v * quantScale) / quantScale;
    };

    // True DC case: avoid truncated-sinc ripple that can leak a tone.
    if (this.toneFrequency <= 1e-9) {
      const dc = Math.round(Math.sin(this.tonePhaseOffset) * quantScale) / quantScale;
      const outDc = Math.max(-1, Math.min(1, dc * 0.25));
      for (let i = 0; i < blockSize; i++) {
        for (let ch = 0; ch < channelCount; ch++) out[ch][i] = outDc;
      }
      this.toneTime = currentTime + blockSize / sampleRate;
      return true;
    }

    for (let i = 0; i < blockSize; i++) {
      const u = currentTime * discreteFs;
      const nCenter = Math.floor(u);
      let reconstructed = 0;
      for (let n = nCenter - sincTaps; n <= nCenter + sincTaps; n++) {
        reconstructed += quantizedSampleAt(n) * sinc(u - n);
      }

      for (let ch = 0; ch < channelCount; ch++) {
        out[ch][i] = Math.max(-1, Math.min(1, reconstructed * 0.25));
      }
      currentTime += 1 / sampleRate;
    }

    this.toneTime = currentTime;
    return true;
  }

  softLimit(sample) {
    if (!Number.isFinite(sample)) return 0;
    return Math.tanh(sample * 0.9);
  }

  processIir(input, output) {
    const inputChannels = input[0] || [];
    const outputChannels = output[0] || [];
    const channelCount = outputChannels.length;
    if (channelCount === 0) return true;

    this.ensureIirState(channelCount);
    const order = Math.max(this.iirA.length, this.iirB.length) - 1;
    const b = this.iirB;
    const a = this.iirA;

    for (let ch = 0; ch < channelCount; ch++) {
      const x = inputChannels[ch] || inputChannels[0];
      const y = outputChannels[ch];
      const w = this.iirStates[ch];
      if (!x || !y) continue;

      for (let i = 0; i < y.length; i++) {
        const sample = x[i] || 0;
        const outSample = b[0] * sample + (w[0] || 0);
        for (let k = 0; k < order; k++) {
          w[k] =
            (b[k + 1] || 0) * sample -
            (a[k + 1] || 0) * outSample +
            (w[k + 1] || 0);
        }
        y[i] = this.softLimit(outSample);
      }
    }
    return true;
  }

  process(inputs, outputs) {
    const input = inputs[0];
    const output = outputs[0];

    if (this.mode === "tone") {
      return this.processTone(outputs);
    }
    if (this.mode === "iir") {
      return this.processIir(inputs, outputs);
    }
    if (this.mode === "alias-processed" || this.mode === "alias-diff") {
      return this.processAliasing(inputs, outputs);
    }

    const inputChannels = input || [];
    const outputChannels = output || [];
    for (let ch = 0; ch < outputChannels.length; ch++) {
      const src = inputChannels[ch] || inputChannels[0];
      const dst = outputChannels[ch];
      if (src) dst.set(src);
      else dst.fill(0);
    }
    return true;
  }
}

registerProcessor("shared-dsp-processor", SharedDspProcessor);
