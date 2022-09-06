Bu web sitesi Nextjs üzerine inşa edilmiştir. Her sayfa içeriği farklı
platformlardan beslenerek güncelliğini korumaktdır.
Performans konusu öncelikli olduğu için next'in statik sayfa üretme özelliği
kullanılmıştır. Ziyaretçi sayfaya erişmek istediğinde, daha önceden statik
olarak üretilmiş dosyaya kendisine en yakın bölgedeki CDN'den çeker ve
görüntüler (powered by vercel).

## Kullanmak için

1. `.env.example` dosyasının adını `.env` olarak değiştirin.

> Burada beklenilen tüm değerleri karşılamaz zorundasınız.

2. Bağımlılıkları yükleyin ve çalıştırın

```bash
yarn
```

```bash
yarn dev
```

3. Tarayıcınızdan [http://localhost:3000](http://localhost:3000)'e girin

## İçerikler ve Bağımlılıklar

### Giriş

Fotoğraflar sayfası ile aynıdır.

### Eğitim

Bu sayfanın içerikleri statik olarak eklenmiştir.

[Youtube](https://github.com/ademilter/homepage/blob/master/lib/youtube.js)
istatistiklerini okumak için Google API kullanır.

### Fotoğraf

Bu sayfanın içerikleri Unsplash hesabımdan geliyor. Fotoğraf yayınlamak
istediğimde Unsplash hesabımda paylaşmam yeterli oluyor.

### Ekipman & Uygulama

Bu sayfanın içerikleri Airtable hesabımdan geliyor.

### Yer İmi

İçerikler Raindrop hesabımdan geliyor.


