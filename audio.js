/**
 * Kelime Blok - Web Audio API Ses Motoru
 * Harici ses dosyası gerektirmeden dinamik sentetik sesler üretir.
 */

class SoundEngine {
    constructor() {
        this.ctx = null;
        this.isMuted = false;
        this.initialized = false;
    }

    init() {
        if (this.initialized) return;
        try {
            const AudioContextClass = window.AudioContext || window.webkitAudioContext;
            this.ctx = new AudioContextClass();
            this.initialized = true;
        } catch (e) {
            console.warn('Web Audio API desteklenmiyor:', e);
        }
    }

    resume() {
        if (!this.initialized) this.init();
        if (this.ctx && this.ctx.state === 'suspended') {
            this.ctx.resume();
        }
    }

    toggleMute() {
        this.isMuted = !this.isMuted;
        return this.isMuted;
    }

    // Tuşa basma sesi (Hafif mekanik tıklama)
    playKey() {
        if (this.isMuted) return;
        this.resume();
        if (!this.ctx) return;

        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(320, now);
        osc.frequency.exponentialRampToValueAtTime(160, now + 0.04);

        gain.gain.setValueAtTime(0.12, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now);
        osc.stop(now + 0.05);
    }

    // Harf silme sesi (Düşük tonlu dokunuş)
    playDelete() {
        if (this.isMuted) return;
        this.resume();
        if (!this.ctx) return;

        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(220, now);
        osc.frequency.exponentialRampToValueAtTime(110, now + 0.06);

        gain.gain.setValueAtTime(0.15, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.06);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now);
        osc.stop(now + 0.07);
    }

    // Harf kartı açılma sesi (Sütuna göre artan perde)
    playFlip(colIndex = 0) {
        if (this.isMuted) return;
        this.resume();
        if (!this.ctx) return;

        const baseFreq = 440;
        const scale = [1, 1.125, 1.25, 1.333, 1.5, 1.666, 1.875];
        const freq = baseFreq * (scale[colIndex % scale.length] || 1);

        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now);

        gain.gain.setValueAtTime(0.18, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now);
        osc.stop(now + 0.13);
    }

    // Doğru yer (Yeşil) parıltı sesi
    playCorrect() {
        if (this.isMuted) return;
        this.resume();
        if (!this.ctx) return;

        const now = this.ctx.currentTime;
        const freqs = [659.25, 1046.50]; // E5, C6
        freqs.forEach((f, i) => {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            const start = now + (i * 0.06);

            osc.type = 'triangle';
            osc.frequency.setValueAtTime(f, start);

            gain.gain.setValueAtTime(0.2, start);
            gain.gain.exponentialRampToValueAtTime(0.001, start + 0.2);

            osc.connect(gain);
            gain.connect(this.ctx.destination);

            osc.start(start);
            osc.stop(start + 0.21);
        });
    }

    // Yanlış yer (Sarı) tonu
    playPresent() {
        if (this.isMuted) return;
        this.resume();
        if (!this.ctx) return;

        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(440, now);
        osc.frequency.setValueAtTime(523.25, now + 0.08);

        gain.gain.setValueAtTime(0.14, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now);
        osc.stop(now + 0.23);
    }

    // Hatalı/Yetersiz harf uyarısı (İki hafif vızıltı)
    playInvalid() {
        if (this.isMuted) return;
        this.resume();
        if (!this.ctx) return;

        const now = this.ctx.currentTime;
        [0, 0.08].forEach(offset => {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            const start = now + offset;

            osc.type = 'sawtooth';
            osc.frequency.setValueAtTime(140, start);

            gain.gain.setValueAtTime(0.15, start);
            gain.gain.exponentialRampToValueAtTime(0.001, start + 0.06);

            osc.connect(gain);
            gain.connect(this.ctx.destination);

            osc.start(start);
            osc.stop(start + 0.07);
        });
    }

    // Zafer Jingle'ı (Neşeli yükselen arpej)
    playWin() {
        if (this.isMuted) return;
        this.resume();
        if (!this.ctx) return;

        const now = this.ctx.currentTime;
        const melody = [
            { f: 523.25, d: 0.12 }, // C5
            { f: 659.25, d: 0.12 }, // E5
            { f: 783.99, d: 0.12 }, // G5
            { f: 1046.50, d: 0.35 } // C6
        ];

        let offset = 0;
        melody.forEach(note => {
            const start = now + offset;
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();

            osc.type = 'triangle';
            osc.frequency.setValueAtTime(note.f, start);

            gain.gain.setValueAtTime(0.3, start);
            gain.gain.exponentialRampToValueAtTime(0.001, start + note.d);

            osc.connect(gain);
            gain.connect(this.ctx.destination);

            osc.start(start);
            osc.stop(start + note.d + 0.02);
            offset += note.d * 0.8;
        });
    }

    // Yenilgi / Oyun Sonu Sesi (Hafif hüzünlü akor)
    playLoss() {
        if (this.isMuted) return;
        this.resume();
        if (!this.ctx) return;

        const now = this.ctx.currentTime;
        const notes = [
            { f: 440, t: 0 },
            { f: 415.3, t: 0.18 },
            { f: 392, t: 0.36 },
            { f: 349.2, t: 0.54 }
        ];

        notes.forEach(n => {
            const start = now + n.t;
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();

            osc.type = 'sine';
            osc.frequency.setValueAtTime(n.f, start);

            gain.gain.setValueAtTime(0.2, start);
            gain.gain.exponentialRampToValueAtTime(0.001, start + 0.3);

            osc.connect(gain);
            gain.connect(this.ctx.destination);

            osc.start(start);
            osc.stop(start + 0.32);
        });
    }
}

// Global ses motoru örneği
window.soundEngine = new SoundEngine();
