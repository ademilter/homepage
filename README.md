Bu web sitesi Nextjs üzerine inşa edilmiştir. Her sayfa içeriği farklı platformlarla haberleşerek ve beslenerek güncelliğini korumaktdır.
Performans konusu öncelikli olduğu için next'in statik sayfa üretme özelliği kullanılmıştır. Ziyaretçi sayfaya erişmek istediğinde, daha önceden statik olarak üretilmiş dosyaya kendisine en yakın bölgedeki CDN'den çeker ve görüntüler.


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

### Ana sayfa

Dışarı bağımlılığı yoktur.

### Eğitimler

Bu sayfanın içerikleri statik olarak eklenmiştir.

[Youtube](https://github.com/ademilter/homepage/blob/master/lib/youtube.js) ve [Gumroad](https://github.com/ademilter/homepage/blob/master/lib/gumroad.ts) istatistiklerini okumak için dışarı bağımlılıkları vardır.

### Fotoğraflar

Bu sayfanın içerikleri Unsplash hesabımdan geliyor.

### Yer İmleri
İçerikler Raindrop hesabımdan geliyor. Upstash database ile basit bir oylama özelliği ekledim.


