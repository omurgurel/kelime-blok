# Kelime Blok 🟩🟨⬛

**Kelime Blok**, Türkçeye özel olarak geliştirilmiş modern, etkileşimli ve siber temalı bir kelime tahmin oyunudur.

Yarışmacılara 6 tahmin hakkı tanınır; oyuncu gizli kelimeyi bulmaya çalışırken her tahminden sonra harfler renklenerek ipucu verir.

---

## 🎮 Temel Özellikler

- **6 Tahmin Hakkı**: Her oyunda gizli kelimeyi bulmak için toplam 6 deneme şansı.
- **5, 6 ve 7 Harfli Modlar**: Üst menüden dilediğiniz zorluk seviyesini seçebilme.
- **Renk Geri Bildirimleri**:
  - 🟩 **Yeşil**: Harf kelimede var ve yeri doğru.
  - 🟨 **Sarı**: Harf kelimede var fakat yeri yanlış.
  - ⬛ **Koyu Gri**: Harf kelimede bulunmuyor.
- **Köşe Alfabe Paneli (29 Harf)**:
  - Ekranın köşesinde yer alan panel üzerinden Türk alfabesindeki tüm harflerin güncel durumu (yeşil/sarı/gri) anlık izlenebilir.
  - Harflere doğrudan tıklayarak kutucuklara harf girişi yapılabilir.
- **Çift Girdi Desteği**: Hem fiziksel klavye (Enter, Backspace, Türkçe karakterler) hem de ekran üzerindeki sanal klavye tam uyumlu çalışır.
- **Sentetik Web Audio API Ses Motoru**: Harici hiçbir `.mp3` veya `.wav` dosyasına ihtiyaç duymadan gerçek zamanlı sentezlenen sesler (tuş tıklaması, harf çevirme sesleri, doğru harf tınısı, zafer arpeji).
- **Detaylı İstatistikler & Emojiyle Paylaş**: Oynanan oyun, kazanma oranı, güncel ve rekor seri takibi; sonucu arkadaşlarınızla paylaşmak için tek tıkla emoji panosu kopyalama (`🟩🟨⬛`).
- **Anlamlı Kelime Havuzu**: 250'den fazla Türkçe kelime ve oyun bittiğinde kelimenin sözlük tanımı / ipucu.

---

## 🚀 Çalıştırma

Oyun tamamen statik web teknolojileri (HTML5, CSS3, Modern JavaScript) ile yazılmıştır. Herhangi bir sunucu kurulumu gerektirmez.

1. `kelime-blok` klasöründeki `index.html` dosyasını favori tarayıcınızda (Chrome, Edge, Firefox, Safari) doğrudan açın.
2. Ya da yerel bir sunucu ile çalıştırmak isterseniz:
   ```bash
   npx serve kelime-blok
   # veya
   python -m http.server 8000
   ```
   ve ardından tarayıcınızda `http://localhost:8000` adresine gidin.

---

## 📁 Proje Yapısı

```
kelime-blok/
├── index.html      # Ana sayfa, ızgara, köşe alfabe takipçisi ve modallar
├── style.css       # Siber karanlık tema, 3D kart çevirme ve animasyonlar
├── words.js        # 5, 6 ve 7 harfli zengin Türkçe kelime veritabanı ve tanımlar
├── audio.js        # Web Audio API tabanlı sentetik ses motoru
├── app.js          # Oyun mantığı, Wordle algoritması ve durum yöneticisi
└── README.md       # Proje dokümantasyonu
```
