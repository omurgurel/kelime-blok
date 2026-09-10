/**
 * Kelime Blok - Oyun Motoru ve Durum Yönetimi
 */

class KelimeBlokGame {
    constructor() {
        this.maxGuesses = 6;
        this.wordLength = 5;
        this.secretWord = "";
        this.secretClue = "";
        this.guesses = [];
        this.currentRow = 0;
        this.currentTile = 0;
        this.isGameOver = false;
        this.isAnimating = false;
        this.letterStatuses = {}; // Harf -> 'correct' | 'present' | 'absent'

        // DOM Referansları
        this.boardEl = document.getElementById('board');
        this.keyboardEl = document.getElementById('keyboard');
        this.alphabetGridEl = document.getElementById('alphabetGrid');
        this.modeSelectorEl = document.getElementById('modeSelector');
        this.toastEl = document.getElementById('toast');

        // Modallar
        this.gameOverModal = document.getElementById('gameOverModal');
        this.helpModal = document.getElementById('helpModal');
        this.statsModal = document.getElementById('statsModal');

        // İstatistikler
        this.stats = this.loadStats();

        this.init();
    }

    init() {
        this.setupKeyboard();
        this.setupAlphabetPanel();
        this.setupEventListeners();
        this.startNewGame(5);
        this.updateStatsUI();
    }

    // İstatistikleri Yükle / Kaydet
    loadStats() {
        const saved = localStorage.getItem('kelime_blok_stats');
        if (saved) {
            try {
                return JSON.parse(saved);
            } catch (e) {
                console.error(e);
            }
        }
        return {
            played: 0,
            wins: 0,
            currentStreak: 0,
            maxStreak: 0
        };
    }

    saveStats() {
        localStorage.setItem('kelime_blok_stats', JSON.stringify(this.stats));
    }

    // Yeni Oyun Başlat
    startNewGame(length = this.wordLength) {
        this.wordLength = parseInt(length, 10);
        document.documentElement.style.setProperty('--word-length', this.wordLength);

        // Mod butonlarını güncelle
        document.querySelectorAll('.mode-btn').forEach(btn => {
            btn.classList.toggle('active', parseInt(btn.dataset.len, 10) === this.wordLength);
        });

        // Rastgele kelime seçimi
        const list = WORD_DATABASE[this.wordLength] || WORD_DATABASE[5];
        const randomIndex = Math.floor(Math.random() * list.length);
        const selected = list[randomIndex];

        this.secretWord = this.toTurkishUpper(selected.word);
        this.secretClue = selected.clue;
        this.guesses = [];
        this.currentRow = 0;
        this.currentTile = 0;
        this.isGameOver = false;
        this.isAnimating = false;
        this.letterStatuses = {};

        this.createBoard();
        this.resetAlphabetAndKeyboardColors();
        this.closeModals();

        console.log(`[Kelime Blok] Yeni Oyun (${this.wordLength} Harf):`, this.secretWord);
    }

    // 6 Satırlı Oyun Izgarasını Oluştur
    createBoard() {
        this.boardEl.innerHTML = '';
        for (let r = 0; r < this.maxGuesses; r++) {
            const rowEl = document.createElement('div');
            rowEl.className = 'board-row';
            rowEl.id = `row-${r}`;

            for (let c = 0; c < this.wordLength; c++) {
                const tileEl = document.createElement('div');
                tileEl.className = 'tile';
                tileEl.id = `tile-${r}-${c}`;
                rowEl.appendChild(tileEl);
            }
            this.boardEl.appendChild(rowEl);
        }
    }

    // Ekranın Köşesindeki 29 Harfli Alfabe Panelini Oluştur
    setupAlphabetPanel() {
        this.alphabetGridEl.innerHTML = '';
        TURKISH_ALPHABET.forEach(letter => {
            const btn = document.createElement('div');
            btn.className = 'alpha-letter';
            btn.id = `alpha-${letter}`;
            btn.textContent = letter;
            btn.title = `${letter} Harfini Gir`;
            btn.addEventListener('click', () => {
                this.handleVirtualKey(letter);
            });
            this.alphabetGridEl.appendChild(btn);
        });
    }

    // Sanal Klavyeyi Oluştur
    setupKeyboard() {
        this.keyboardEl.innerHTML = '';
        KEYBOARD_ROWS.forEach(row => {
            const rowEl = document.createElement('div');
            rowEl.className = 'keyboard-row';

            row.forEach(key => {
                const keyBtn = document.createElement('button');
                keyBtn.className = 'key-btn';
                keyBtn.textContent = key;
                keyBtn.id = `key-${key}`;

                if (key === 'ENTER' || key === 'SİL') {
                    keyBtn.classList.add('action');
                }

                keyBtn.addEventListener('click', () => {
                    this.handleVirtualKey(key);
                });

                rowEl.appendChild(keyBtn);
            });
            this.keyboardEl.appendChild(rowEl);
        });
    }

    // Harf ve Klavye Renk Durumlarını Temizle
    resetAlphabetAndKeyboardColors() {
        document.querySelectorAll('.alpha-letter').forEach(el => {
            el.className = 'alpha-letter';
        });
        document.querySelectorAll('.key-btn').forEach(el => {
            if (el.classList.contains('action')) {
                el.className = 'key-btn action';
            } else {
                el.className = 'key-btn';
            }
        });
    }

    // Türkçe Büyük Harf Çevirici
    toTurkishUpper(str) {
        return str
            .replace(/i/g, 'İ')
            .replace(/ı/g, 'I')
            .toLocaleUpperCase('tr-TR');
    }

    // Olay Dinleyicileri (Fiziksel Klavye + UI Butonları)
    setupEventListeners() {
        // Fiziksel Klavye
        window.addEventListener('keydown', (e) => {
            if (this.isGameOver || this.isAnimating) return;
            if (e.ctrlKey || e.metaKey || e.altKey) return;

            const key = e.key;

            if (key === 'Enter') {
                this.submitGuess();
            } else if (key === 'Backspace') {
                this.deleteLetter();
            } else if (key.length === 1) {
                const upper = this.toTurkishUpper(key);
                if (TURKISH_ALPHABET.includes(upper)) {
                    this.addLetter(upper);
                }
            }
        });

        // 5, 6, 7 Harf Mod Seçimi
        this.modeSelectorEl.addEventListener('click', (e) => {
            const btn = e.target.closest('.mode-btn');
            if (btn && btn.dataset.len) {
                const len = parseInt(btn.dataset.len, 10);
                if (len !== this.wordLength) {
                    this.startNewGame(len);
                }
            }
        });

        // Header Butonları
        document.getElementById('restartBtn').addEventListener('click', () => {
            this.startNewGame();
            this.showToast('Yeni kelime seçildi!');
        });

        document.getElementById('helpBtn').addEventListener('click', () => {
            this.openModal(this.helpModal);
        });

        document.getElementById('closeHelpModal').addEventListener('click', () => {
            this.closeModals();
        });

        document.getElementById('gotItBtn').addEventListener('click', () => {
            this.closeModals();
        });

        document.getElementById('statsBtn').addEventListener('click', () => {
            this.updateStatsUI();
            this.openModal(this.statsModal);
        });

        document.getElementById('closeStatsModal').addEventListener('click', () => {
            this.closeModals();
        });

        document.getElementById('closeStatsBtn').addEventListener('click', () => {
            this.closeModals();
        });

        document.getElementById('closeGameOverModal').addEventListener('click', () => {
            this.closeModals();
        });

        document.getElementById('modalNewGameBtn').addEventListener('click', () => {
            this.startNewGame();
        });

        // Ses Aç/Kapa
        const muteBtn = document.getElementById('muteBtn');
        muteBtn.addEventListener('click', () => {
            const isMuted = window.soundEngine.toggleMute();
            muteBtn.textContent = isMuted ? '🔇' : '🔊';
            muteBtn.title = isMuted ? 'Sesi Aç' : 'Sesi Kapat';
        });

        // Paylaş Butonu
        document.getElementById('shareResultBtn').addEventListener('click', () => {
            this.shareResult();
        });

        // Modal Dışı Tıklama ile Kapatma
        [this.gameOverModal, this.helpModal, this.statsModal].forEach(modal => {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    this.closeModals();
                }
            });
        });
    }

    // Sanal Tuş Girdisi
    handleVirtualKey(key) {
        if (this.isGameOver || this.isAnimating) return;

        if (key === 'ENTER') {
            this.submitGuess();
        } else if (key === 'SİL') {
            this.deleteLetter();
        } else if (TURKISH_ALPHABET.includes(key)) {
            this.addLetter(key);
        }
    }

    // Harf Ekle
    addLetter(letter) {
        if (this.currentTile >= this.wordLength) return;

        const tileEl = document.getElementById(`tile-${this.currentRow}-${this.currentTile}`);
        if (tileEl) {
            tileEl.textContent = letter;
            tileEl.classList.add('filled');
            this.currentTile++;
            window.soundEngine.playKey();
        }
    }

    // Harf Sil
    deleteLetter() {
        if (this.currentTile <= 0) return;

        this.currentTile--;
        const tileEl = document.getElementById(`tile-${this.currentRow}-${this.currentTile}`);
        if (tileEl) {
            tileEl.textContent = '';
            tileEl.classList.remove('filled');
            window.soundEngine.playDelete();
        }
    }

    // Tahmini Gönder & Değerlendir
    async submitGuess() {
        if (this.currentTile < this.wordLength) {
            this.shakeCurrentRow();
            window.soundEngine.playInvalid();
            this.showToast(`Lütfen ${this.wordLength} harfli bir kelime girin!`);
            return;
        }

        // Girilen tahmini al
        let guess = "";
        for (let c = 0; c < this.wordLength; c++) {
            const tileEl = document.getElementById(`tile-${this.currentRow}-${c}`);
            guess += tileEl.textContent;
        }

        this.isAnimating = true;
        this.guesses.push(guess);

        // Wordle renk algoritması (Mükerrer harf desteği ile)
        const evaluation = this.evaluateWordle(guess, this.secretWord);

        // Sırayla kartları çevir (Flip Animasyonu & Ses)
        for (let i = 0; i < this.wordLength; i++) {
            const tileEl = document.getElementById(`tile-${this.currentRow}-${i}`);
            
            await this.sleep(180);
            window.soundEngine.playFlip(i);
            tileEl.classList.add('flip');

            // Çevrilme anının ortasında renk uygula
            setTimeout(() => {
                tileEl.classList.add(evaluation[i]);
            }, 250);
        }

        // Animasyon bitimini bekle
        await this.sleep(400);

        // Alfabe panelini ve sanal klavyeyi güncelle
        this.updateAlphabetAndKeyboard(guess, evaluation);

        // Kazanma / Kaybetme Kontrolü
        const isWin = (guess === this.secretWord);

        if (isWin) {
            this.isGameOver = true;
            this.isAnimating = false;
            this.celebrateRow(this.currentRow);
            window.soundEngine.playWin();
            this.recordGame(true);

            setTimeout(() => {
                this.showGameOverModal(true);
            }, 1200);
            return;
        }

        if (this.currentRow >= this.maxGuesses - 1) {
            this.isGameOver = true;
            this.isAnimating = false;
            window.soundEngine.playLoss();
            this.recordGame(false);

            setTimeout(() => {
                this.showGameOverModal(false);
            }, 900);
            return;
        }

        // Sonraki satıra geç
        this.currentRow++;
        this.currentTile = 0;
        this.isAnimating = false;
    }

    // Wordle Algoritması: Doğru ve Yanlış Yerleri Belirle
    evaluateWordle(guess, target) {
        const len = target.length;
        const result = new Array(len).fill('absent');
        const targetChars = target.split('');
        const guessChars = guess.split('');
        const letterFreq = {};

        // 1. Aşama: Harf frekanslarını çıkar ve Tam Eşleşenleri (Yeşil) bul
        for (let i = 0; i < len; i++) {
            const ch = targetChars[i];
            letterFreq[ch] = (letterFreq[ch] || 0) + 1;
        }

        for (let i = 0; i < len; i++) {
            if (guessChars[i] === targetChars[i]) {
                result[i] = 'correct';
                letterFreq[guessChars[i]]--;
            }
        }

        // 2. Aşama: Kalan harflerden yeri yanlış olanları (Sarı) bul
        for (let i = 0; i < len; i++) {
            if (result[i] === 'correct') continue;
            const ch = guessChars[i];
            if (letterFreq[ch] && letterFreq[ch] > 0) {
                result[i] = 'present';
                letterFreq[ch]--;
            } else {
                result[i] = 'absent';
            }
        }

        return result;
    }

    // Ekranın Köşesindeki Alfabe Panelini ve Klavyeyi Güncelle
    updateAlphabetAndKeyboard(guess, evaluation) {
        for (let i = 0; i < guess.length; i++) {
            const letter = guess[i];
            const status = evaluation[i]; // 'correct', 'present', 'absent'
            const currentStatus = this.letterStatuses[letter];

            // Öncelik: correct (Yeşil) > present (Sarı) > absent (Gri)
            if (status === 'correct') {
                this.letterStatuses[letter] = 'correct';
            } else if (status === 'present' && currentStatus !== 'correct') {
                this.letterStatuses[letter] = 'present';
            } else if (status === 'absent' && !currentStatus) {
                this.letterStatuses[letter] = 'absent';
            }
        }

        // Alfabe Paneli ve Klavye Renklerini Yansıt
        Object.entries(this.letterStatuses).forEach(([letter, st]) => {
            // Köşe Alfabe Paneli Rozeti
            const alphaEl = document.getElementById(`alpha-${letter}`);
            if (alphaEl) {
                alphaEl.classList.remove('correct', 'present', 'absent');
                alphaEl.classList.add(st);
            }

            // Sanal Klavye Tuşu
            const keyEl = document.getElementById(`key-${letter}`);
            if (keyEl) {
                keyEl.classList.remove('correct', 'present', 'absent');
                keyEl.classList.add(st);
            }
        });
    }

    // Hata durumunda satırı salla
    shakeCurrentRow() {
        const rowEl = document.getElementById(`row-${this.currentRow}`);
        if (rowEl) {
            rowEl.classList.add('shake');
            setTimeout(() => {
                rowEl.classList.remove('shake');
            }, 500);
        }
    }

    // Zafer durumunda satırı dans ettir
    celebrateRow(rowIndex) {
        const rowEl = document.getElementById(`row-${rowIndex}`);
        if (rowEl) {
            rowEl.classList.add('dance');
        }
    }

    // İstatistik Kaydı
    recordGame(won) {
        this.stats.played++;
        if (won) {
            this.stats.wins++;
            this.stats.currentStreak++;
            if (this.stats.currentStreak > this.stats.maxStreak) {
                this.stats.maxStreak = this.stats.currentStreak;
            }
        } else {
            this.stats.currentStreak = 0;
        }
        this.saveStats();
        this.updateStatsUI();
    }

    // İstatistik Ekranını Güncelle
    updateStatsUI() {
        const winRate = this.stats.played > 0 
            ? Math.round((this.stats.wins / this.stats.played) * 100) 
            : 0;

        // Oyun sonu modalı istatistikleri
        document.getElementById('statPlayed').textContent = this.stats.played;
        document.getElementById('statWinRate').textContent = `${winRate}%`;
        document.getElementById('statStreak').textContent = this.stats.currentStreak;
        document.getElementById('statMaxStreak').textContent = this.stats.maxStreak;

        // İstatistik modalı
        document.getElementById('viewStatPlayed').textContent = this.stats.played;
        document.getElementById('viewStatWinRate').textContent = `${winRate}%`;
        document.getElementById('viewStatStreak').textContent = this.stats.currentStreak;
        document.getElementById('viewStatMaxStreak').textContent = this.stats.maxStreak;
    }

    // Oyun Sonu Modalı
    showGameOverModal(isWin) {
        const titleEl = document.getElementById('modalResultTitle');
        const subtitleEl = document.getElementById('modalResultSubtitle');
        const wordEl = document.getElementById('revealedWord');
        const clueEl = document.getElementById('revealedClue');

        if (isWin) {
            titleEl.textContent = 'Harika! 🎉';
            subtitleEl.textContent = `${this.guesses.length}/${this.maxGuesses} denemede kelimeyi buldunuz!`;
            titleEl.style.color = 'var(--color-correct)';
        } else {
            titleEl.textContent = 'Maalesef Bulamadınız 😔';
            subtitleEl.textContent = '6 tahmin hakkınız tükendi. Gizli kelime şuydu:';
            titleEl.style.color = '#f43f5e';
        }

        wordEl.textContent = this.secretWord;
        clueEl.textContent = this.secretClue ? `"${this.secretClue}"` : '';

        this.openModal(this.gameOverModal);
    }

    // Sonucu Emoji Olarak Paylaş
    shareResult() {
        let text = `Kelime Blok (${this.guesses.length}/${this.maxGuesses}) - ${this.wordLength} Harf\n\n`;

        this.guesses.forEach(g => {
            const ev = this.evaluateWordle(g, this.secretWord);
            const line = ev.map(status => {
                if (status === 'correct') return '🟩';
                if (status === 'present') return '🟨';
                return '⬛';
            }).join('');
            text += line + '\n';
        });

        text += '\nKelime Blok: Türkçe Kelime Oyunu';

        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(text).then(() => {
                this.showToast('Sonuç panoya kopyalandı! 📋');
            }).catch(() => {
                this.fallbackCopy(text);
            });
        } else {
            this.fallbackCopy(text);
        }
    }

    fallbackCopy(text) {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        try {
            document.execCommand('copy');
            this.showToast('Sonuç panoya kopyalandı! 📋');
        } catch (e) {
            this.showToast('Kopyalama başarısız oldu.');
        }
        document.body.removeChild(textArea);
    }

    // Toast Mesajı Göster
    showToast(message) {
        this.toastEl.textContent = message;
        this.toastEl.classList.add('show');
        setTimeout(() => {
            this.toastEl.classList.remove('show');
        }, 2200);
    }

    // Modal Yönetimi
    openModal(modal) {
        this.closeModals();
        modal.classList.add('active');
    }

    closeModals() {
        [this.gameOverModal, this.helpModal, this.statsModal].forEach(m => {
            m.classList.remove('active');
        });
    }

    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

// Oyunu Başlat
document.addEventListener('DOMContentLoaded', () => {
    window.game = new KelimeBlokGame();
});
