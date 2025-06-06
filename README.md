# EnesLearn AI Dil Asistanı

Bu proje, GitHub Pages üzerinde statik bir sohbet arayüzü ve Vercel Functions kullanarak Hugging Face Inference API üzerinden yanıt veren bir yapay zekâ botu sunar. Aşağıdaki adımları izleyerek kolayca deploy edebilirsiniz:

## 1. GitHub Repository Oluşturma

1. GitHub'da yeni bir repo oluşturun (örneğin **eneslearn-full**).
2. Bu klasörün içindeki tüm dosyaları repoya yükleyin.

## 2. Vercel Kurulumu

1. [Vercel](https://vercel.com) hesabınıza giriş yapın ve GitHub entegrasyonunu yapın.
2. **New Project** diyerek bu repo'yu seçin.
3. Deployment tamamlandığında Vercel size bir domain verecek (örneğin **eneslearn-abc123.vercel.app**).

## 3. Ortam Değişkeni (Environment Variable) Ayarı

1. Vercel dashboard'unda projenizin **Settings > Environment Variables** sayfasına gidin.
2. **Key**: `HF_API_KEY`
3. **Value**: Hugging Face hesabınızdan aldığınız `hf_...` ile başlayan API token.
4. **Environment**: `Production`
5. **Save** diyerek yeni deploy'u başlatın.

## 4. `scripts/hf-chat.js` Dosyasını Güncelleme

1. GitHub'da `scripts/hf-chat.js` dosyasını açın.
2. `HF_API_URL` satırını şu şekilde değiştirin:
   ```
   const HF_API_URL = 'https://<SİZİN_VERCEL_DOMAINİNİZ>/api/chat';
   ```
3. **Commit** ederek değişikliği kaydedin.

## 5. GitHub Pages Ayarı

1. Repository **Settings > Pages** sekmesine gidin.
2. **Branch:** `main` (veya `master`)
3. **Folder:** `/ (root)`
4. **Save** diyerek GitHub Pages'i aktif edin.
5. Birkaç saniye sonra site `https://<kullanıcı_adınız>.github.io/eneslearn-full/` adresinde yayına alınacak.

## 6. Test

Siteyi açın ve sohbet kutusuna bir mesaj gönderin. Mesajınız Vercel Functions'a gönderilecek, oradan Hugging Face'e ulaşacak ve dönen cevabı ekranda göreceksiniz.

---

Başarılar!