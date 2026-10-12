# Kulita Web Legal Pages (GitHub Pages)

Halaman web statis resmi untuk **Kebijakan Privasi (Privacy Policy)** dan **Ketentuan Layanan (Terms of Service)** aplikasi **Kulita** (`id.kulita.app`), disesuaikan dengan Design System Flutter Kulita (`AppColors` & `AppTypography` - *Plus Jakarta Sans*) serta mendukung dwi-bahasa (**Indonesia & Inggris**).

## Struktur File

- `index.html` — Halaman Utama (Pusat Legal & Privasi Kulita)
- `privacy.html` — Halaman Kebijakan Privasi (*Privacy Policy*)
- `terms.html` — Halaman Ketentuan Layanan (*Terms of Service*)
- `styles.css` — Stylesheet berbasis token warna `AppColors` dan tipografi `AppTypography`
- `app.js` — Script pengatur bahasa (`?lang=id` / `?lang=en`)
- `assets/kulita_logo.png` — Logo resmi Kulita
- `.nojekyll` — Konfigurasi GitHub Pages agar di-deploy langsung sebagai situs statis cepat

---

## Cara Deploy Gratis ke GitHub Pages

### Opsi A: Buat Repositori Publik Terpisah (Direkomendasikan agar kode utama Flutter tetap Private)
1. Buat repositori baru berstatus **Public** di GitHub dengan nama `web_kulita_app`.
2. Salin seluruh isi folder `docs/` ini ke dalam *root* repositori `web_kulita_app` tersebut, lalu lakukan `git commit` dan `git push`.
3. Buka menu **Settings** > **Pages** di repositori GitHub tersebut.
4. Pada bagian **Build and deployment** > **Source**, pilih **Deploy from a branch**, lalu pilih branch `main` dan folder `/ (root)`, klik **Save**.
5. Dalam 1 menit, halaman web Anda aktif di:
   - Portal Legal: `https://<username-github>.github.io/web_kulita_app/`
   - Kebijakan Privasi (ID): `https://<username-github>.github.io/web_kulita_app/privacy.html?lang=id`
   - Privacy Policy (EN): `https://<username-github>.github.io/web_kulita_app/privacy.html?lang=en`
   - Ketentuan Layanan (ID): `https://<username-github>.github.io/web_kulita_app/terms.html?lang=id`
   - Terms of Service (EN): `https://<username-github>.github.io/web_kulita_app/terms.html?lang=en`

### Opsi B: Deploy Langsung dari Folder `/docs` (Jika Repositori Ini Public atau GitHub Pro)
1. Buka menu **Settings** > **Pages** di repositori ini.
2. Pilih branch `main` dan folder `/docs`, lalu klik **Save**.
