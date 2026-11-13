import { useState, useEffect, useRef } from 'react';

/**
 * Procedural Web Audio API Synthesizer for Natural Farm Breeze & Subtle Birdsong
 * 100% synthesized in the browser without any external audio files or bandwidth cost.
 */
export function useFarmAmbiance() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const noiseSourceRef = useRef<AudioBufferSourceNode | null>(null);
  const birdTimerRef = useRef<number | null>(null);

  // Initialize or resume audio context on user interaction
  const toggleAmbiance = () => {
    if (isPlaying) {
      stopAmbiance();
    } else {
      startAmbiance();
    }
  };

  const startAmbiance = () => {
    try {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioContextClass();
      audioCtxRef.current = ctx;

      // Master Gain Node for soft, relaxing volume
      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.08, ctx.currentTime);
      masterGain.connect(ctx.destination);
      gainNodeRef.current = masterGain;

      // 1. Generate Gentle Wind Breeze using Low-Pass Filtered Pink Noise
      const bufferSize = ctx.sampleRate * 4; // 4 seconds of noise buffer
      const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;

      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        b0 = 0.99886 * b0 + white * 0.0555179;
        b1 = 0.99332 * b1 + white * 0.0750759;
        b2 = 0.96900 * b2 + white * 0.1538520;
        b3 = 0.86650 * b3 + white * 0.3104856;
        b4 = 0.55000 * b4 + white * 0.5329522;
        b5 = -0.7616 * b5 - white * 0.0168980;
        output[i] = b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362;
        output[i] *= 0.11; // Low level
        b6 = white * 0.115926;
      }

      const whiteNoise = ctx.createBufferSource();
      whiteNoise.buffer = noiseBuffer;
      whiteNoise.loop = true;

      // Low pass filter for wind gust modulation
      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(320, ctx.currentTime);

      // Low frequency oscillator for wind intensity wave
      const lfo = ctx.createOscillator();
      lfo.frequency.setValueAtTime(0.2, ctx.currentTime); // 0.2Hz slow breeze breathing
      const lfoGain = ctx.createGain();
      lfoGain.gain.setValueAtTime(140, ctx.currentTime);
      lfo.connect(lfoGain);
      lfoGain.connect(filter.frequency);

      whiteNoise.connect(filter);
      filter.connect(masterGain);

      whiteNoise.start();
      lfo.start();
      noiseSourceRef.current = whiteNoise;

      // 2. Periodic subtle distant birdsong chirps
      const scheduleBirdChirp = () => {
        if (!audioCtxRef.current || audioCtxRef.current.state === 'closed') return;
        const now = audioCtxRef.current.currentTime;

        const osc = audioCtxRef.current.createOscillator();
        const chirpGain = audioCtxRef.current.createGain();

        // Bird frequencies (high pitch gentle chirps)
        const baseFreq = 2200 + Math.random() * 800;
        osc.frequency.setValueAtTime(baseFreq, now);
        osc.frequency.exponentialRampToValueAtTime(baseFreq + 600, now + 0.08);
        osc.frequency.exponentialRampToValueAtTime(baseFreq - 200, now + 0.16);

        chirpGain.gain.setValueAtTime(0, now);
        chirpGain.gain.linearRampToValueAtTime(0.015, now + 0.04);
        chirpGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.22);

        osc.connect(chirpGain);
        chirpGain.connect(masterGain);

        osc.start(now);
        osc.stop(now + 0.24);

        // Schedule next chirp in 4 to 9 seconds
        const nextTime = 4000 + Math.random() * 5000;
        birdTimerRef.current = window.setTimeout(scheduleBirdChirp, nextTime);
      };

      // Start initial chirp after 2 seconds
      birdTimerRef.current = window.setTimeout(scheduleBirdChirp, 2500);

      setIsPlaying(true);
    } catch {
      setIsPlaying(false);
    }
  };

  const stopAmbiance = () => {
    if (birdTimerRef.current) {
      window.clearTimeout(birdTimerRef.current);
      birdTimerRef.current = null;
    }
    if (audioCtxRef.current && audioCtxRef.current.state !== 'closed') {
      audioCtxRef.current.close().catch(() => {});
      audioCtxRef.current = null;
    }
    setIsPlaying(false);
  };

  useEffect(() => {
    return () => {
      stopAmbiance();
    };
  }, []);

  return {
    isPlaying,
    toggleAmbiance,
  };
}
