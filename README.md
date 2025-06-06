# EnesLearn AI Dil Asistanı – Hazır Paket

Bu hazır proje, **Hugging Face API key** (btw: `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`) doğrudan **api/chat.js** dosyasına entegre edilmiştir. ZIP'i GitHub repo'nuzun kök dizinine yükleyip, Vercel ve GitHub Pages ayarlarınızı yaparak hızlıca yayına alabilirsiniz.

## Adımlar

1. **ZIP'i İndirin ve Repo'ya Yükleyin**  
   - Bu klasörü GitHub’da yeni bir repo olarak yayınlayabilirsiniz.  
   - GitHub’da var olan “eneslearn” repo’yu tamamen silip, bu dosyaları yükleyin.

2. **Vercel Proje Oluşturma**  
   - Vercel hesabınıza giriş yapın.
   - **New Project** diyerek bu GitHub Repo’yu seçin.
   - Deploy tamamlandığında Vercel size bir domain verecek (örneğin: `eneslearn-abc123.vercel.app`).

3. **`scripts/hf-chat.js` İçindeki `HF_API_URL`'i Güncelleyin**  
   - GitHub Repo'da `scripts/hf-chat.js` dosyasını açın.
   - Aşağıdaki satırı bulun:

     ```js
     const HF_API_URL = 'https://<YOUR_VERCEL_DOMAIN>.vercel.app/api/chat';
     ```

   - `'<YOUR_VERCEL_DOMAIN>'` kısmını, Vercel'in size verdiği domain ile değiştirin (örn: `eneslearn-abc123`).
   - Commit yapın.

   !!! ÖRNEK: `HF_API_URL` böyle olmalı:
   ```js
   const HF_API_URL = 'https://eneslearn-abc123.vercel.app/api/chat';
   ```

4. **GitHub Pages Ayarı**  
   - GitHub Repo → **Settings** → **Pages** sekmesine gidin.
   - **Branch:** `main` (veya `master`), **Folder:** `/ (root)` seçin.  
   - “Save” deyin. Birkaç saniye içinde siten:
     ```
     https://<KullanıcıAdınız>.github.io/<repo_adı>/
     ```
     adresinde yayında olacak.

5. **Test Etme**  
   - Tarayıcıda GitHub Pages URL'sini açın.
   - Sohbet kutusuna **“Merhaba”** yazın, **Gönder**e tıklayın.
   - “Yazılıyor…” mesajından sonra gerçek yapay zekâ yanıtını göreceksiniz.

---

### Dosya Yapısı

```
eneslearn_ready/
├── index.html
├── css/
│   └── style.css
├── scripts/
│   └── hf-chat.js
├── api/
│   └── chat.js
├── .gitignore
└── README.md
```

- **`api/chat.js`**: İçinde token (`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`) sabit olarak yer alıyor.
- **`scripts/hf-chat.js`**: Vercel function ( `/api/chat` ) üzerinden sorgu yolluyor.

Kolay gelsin!