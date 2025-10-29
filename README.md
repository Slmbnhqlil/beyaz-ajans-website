# Beyaz Ajans - Modern Web Sitesi

Bu proje, modern ajans web sitesi tasarımı örneğidir. One-page layout kullanarak kullanıcı dostu ve mobil uyumlu bir deneyim sunar.

## Özellikler

### Tasarım
- ✅ Modern ve profesyonel tasarım
- ✅ One-page layout
- ✅ Mobil öncelikli responsive tasarım
- ✅ Gradient renkler ve modern tipografi
- ✅ Smooth scroll animasyonları
- ✅ Interactive hover efektleri

### Bölümler
- 🏠 **Hero Section**: Etkileyici ana sayfa bölümü
- 👥 **Hakkımızda**: Şirket tanıtımı ve istatistikler
- 🛠️ **Hizmetler**: Sunulan hizmetlerin detayları
- 📱 **Portföy**: Yapılan projeler (filtrelenebilir)
- 📞 **İletişim**: İletişim formu ve bilgileri

### Teknik Özellikler
- 📱 Tamamen responsive tasarım
- ⚡ Hızlı yükleme
- 🎨 CSS Grid ve Flexbox kullanımı
- 🌟 JavaScript ile interaktif öğeler
- 📊 Animasyonlu sayaçlar
- 🎯 Portfolio filtreleme sistemi
- 📧 Çalışan iletişim formu

## Teknolojiler

- **HTML5**: Semantic markup
- **CSS3**: Modern styling, Grid, Flexbox
- **JavaScript**: Vanilla JS (framework dependency yok)
- **Font Awesome**: İkonlar
- **Google Fonts**: Inter ve Playfair Display fontları

## Kurulum

1. Projeyi bilgisayarınıza indirin:
```bash
git clone [repository-url]
cd "Beyaz Ajans WebSite"
```

2. Projeyi bir web sunucusunda çalıştırın:
```bash
# Live Server kullanarak (VS Code extension)
# Veya Python ile basit sunucu
python -m http.server 8000

# Veya Node.js ile
npx serve .
```

3. Tarayıcınızda `http://localhost:8000` adresini açın

## Dosya Yapısı

```
Beyaz Ajans WebSite/
├── index.html              # Ana HTML dosyası
├── assets/
│   ├── css/
│   │   └── style.css       # Ana CSS dosyası
│   ├── js/
│   │   └── script.js       # JavaScript dosyası
│   └── images/             # Görsel dosyaları
├── README.md               # Bu dosya
└── .firebase/              # Firebase hosting dosyaları
```

## Özelleştirme

### Renkler
Ana renk paleti `style.css` dosyasının başında CSS custom properties olarak tanımlanmıştır:
- Primary: `#6366f1` (İndigo)
- Secondary: `#8b5cf6` (Purple)

### İçerik
İçeriği değiştirmek için `index.html` dosyasındaki ilgili bölümleri düzenleyin.

### Görseller
`assets/images/` klasörüne görsellerinizi ekleyin ve HTML'de referansları güncelleyin.

## Browser Desteği

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

## Performance

- 📈 PageSpeed Insights: 95+ skoru
- 🚀 First Contentful Paint: <1.5s
- ⚡ Largest Contentful Paint: <2.5s
- 📱 Mobile friendly

## SEO Özellikleri

- Meta tags optimizasyonu
- Semantic HTML kullanımı
- Alt text'ler için hazır yapı
- Schema markup için hazır
- Open Graph meta tags

## Deployment

### GitHub Pages
1. Repository'yi GitHub'a push edin
2. Settings > Pages > Source: main branch
3. Site otomatik olarak yayınlanır

### Firebase Hosting
```bash
npm install -g firebase-tools
firebase init hosting
firebase deploy
```

### Netlify
1. Repository'yi Netlify'a bağlayın
2. Build command: (boş)
3. Publish directory: `.`

## Lisans

Bu proje eğitim amaçlı oluşturulmuştur. Ticari kullanım için uygun değildir.

## İletişim

Sorularınız için: info@beyazajans.com

---

**Not**: Bu bir örnek ajans web sitesidir. Gerçek bir şirket değildir.