## Gereklilikler
- Nodejs
- npm veya yarn (ben yarn üzerinden anlatıyorum)

## Kendi bilgisayarımda nasıl çalıştırırım?

1. Öncelikle terminalden proje dizinin gidin

2. `.env.example` dosyasının adını `.env` olarak değiştirip, Airtable ve Raindrop hesaplarından gerekli kodları alıp aşağıdaki bölümlere ekleyin

```bash
AIRTABLE_API_KEY=
AIRTABLE_BASE_ID=
RAINDROP_ACCESS_TOKEN=
```

3. Bağımlılıkları yükleyin

```bash
yarn
```

4. Development server'ı ayağa kaldırın

```bash
yarn dev
```

5. Artık hazır

Tarayıcınızdan [http://localhost:3000](http://localhost:3000)'e girin
