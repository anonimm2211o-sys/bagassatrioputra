# Portfolio — Bagas Satrio Putra

Website portfolio personal, dibangun dengan React + Vite (tanpa Tailwind — semua
styling ada di `src/index.css` biasa). Tema midnight-purple, ada intro video,
loading transition, workflow interaktif, per-skill workflow visual, kartu AI
tools, dan project card dengan proses pembuatan.

## Menjalankan secara lokal

```bash
npm install
npm run dev
```

Buka URL yang muncul di terminal (biasanya `http://localhost:5173`).

Build produksi:

```bash
npm run build
npm run preview
```

## Aset yang WAJIB kamu tambahkan

Dua file berikut **belum ada** di project ini — taruh di folder `public/`
(bukan `src/`) supaya path `/loading.mp4` dan `/poto.png` langsung kebaca:

- `public/loading.mp4` — video intro fullscreen. Idealnya pendek (±3–6 detik),
  sudah dikompres untuk web (H.264, muted-friendly karena video di-mute
  otomatis untuk autoplay). Kalau file ini belum ada / gagal dimuat, website
  otomatis lanjut ke loading transition lalu tampilkan portfolio — jadi
  websitenya tetap jalan normal tanpa videonya.
- `public/poto.png` — foto profil. Disarankan rasio 1:1 (persegi), minimal
  400×400px, supaya nggak pecah di frame foto hero.

Kalau kedua file belum ditaruh, layout tetap rapi (ada fallback), cuma
area videonya kosong (langsung ke loading) dan foto menampilkan placeholder
kecil bertuliskan "foto".

## Struktur project

```
bagas-portfolio/
├── index.html                  # entry HTML Vite (font Google Fonts di sini)
├── package.json
├── vite.config.js
├── public/
│   ├── loading.mp4             # ⚠️ tambahkan sendiri
│   └── poto.png                # ⚠️ tambahkan sendiri
└── src/
    ├── main.jsx                 # render <App /> ke #root
    ├── App.jsx                  # state intro video → loading → reveal
    ├── index.css                # semua styling (tema midnight-purple)
    ├── data.js                  # semua konten teks (nav, skill, project, dst)
    ├── hooks.js                 # reduced-motion, scroll-reveal, scramble text, cursor glow
    └── components/
        ├── IntroVideo.jsx        # <video> fullscreen + tombol "Lewati"
        ├── LoadingTransition.jsx # loader ungu + teks status
        ├── Navbar.jsx
        ├── Hero.jsx
        ├── About.jsx
        ├── Workflow.jsx          # section "Cara Saya Membangun" (interaktif)
        ├── SkillWorkflow.jsx     # section "Keahlian" (chain per skill, bukan %)
        ├── AITools.jsx           # kartu AI + diagram "cara ngarahin AI" + eksperimen perilaku model
        ├── Projects.jsx          # grid project
        ├── ProjectWorkflow.jsx   # chain "cara dibuat" di dalam tiap project card
        ├── Contact.jsx
        └── Footer.jsx
```

## Tentang animasinya

Semua animasi ditulis manual dengan CSS + hooks React biasa (tidak ada
library animasi eksternal, tidak ada dependency tambahan selain
`lucide-react` untuk ikon). Beberapa terinspirasi dari konsep komponen di
reactbits.dev — **bukan salinan kodenya**, cuma diambil idenya lalu ditulis
ulang dari nol supaya cocok dengan tema midnight-purple ini:

- **Scramble text** (hero, nama) — konsep dari *Scrambled Text* / *Decrypted Text*.
- **Aurora background** (glow ungu yang perlahan bergerak) — konsep dari *Aurora*.
- **Cursor glow** (glow sangat halus mengikuti kursor, mati otomatis di HP) — konsep dari *Glow Cursor*.
- **Scroll reveal blur+fade** per section — konsep dari *Fade Content* / *Animated Content*.
- **Film grain overlay** tipis — konsep dari *Noise*.

Semua menghormati `prefers-reduced-motion`: kalau setelan itu aktif, intro
video & loading transition dilewati, dan animasi lain langsung final state
tanpa transisi.

## Yang masih perlu kamu isi manual

- Alamat email di tombol "Kirim Email" (`src/components/Contact.jsx`, masih `hello@bagas.dev`).
- Link GitHub/demo tiap project di `src/data.js` (array `PROJECTS`, field `link`) — saat ini kosong dan tombolnya otomatis menampilkan "Link menyusul".
