export const NAV_LINKS = [
  { id: "home", label: "Beranda" },
  { id: "tentang", label: "Tentang" },
  { id: "cara-kerja", label: "Cara Kerja" },
  { id: "keahlian", label: "Keahlian" },
  { id: "proyek", label: "Proyek" },
  { id: "ai", label: "AI" },
  { id: "kontak", label: "Kontak" },
];

export const BUILD_STEPS = [
  { id: "ide", label: "IDE", desc: "Buka editor, mulai dari yang paling sederhana dulu." },
  { id: "masalah", label: "Masalah", desc: "Mulai dari sesuatu yang mau gue buat, atau sesuatu yang belum gue paham." },
  { id: "riset", label: "Riset", desc: "Cari referensi dulu — dokumentasi, contoh kode, atau orang yang pernah ngalamin masalah serupa." },
  { id: "ai-referensi", label: "AI / Referensi", desc: "Pakai ChatGPT, Claude, DeepSeek, atau model lain buat eksplorasi dan nyari pendekatan." },
  { id: "eksperimen", label: "Eksperimen", desc: "Nggak langsung percaya sama output-nya. Coba, ubah, rusak, terus lihat apa yang kejadian." },
  { id: "debug", label: "Debug", desc: "Kalau hasilnya salah, cari sumber masalahnya, terus iterasi lagi." },
  { id: "implementasi", label: "Implementasi", desc: "Ambil bagian yang beneran berguna, masukin ke project." },
  { id: "hasil", label: "Hasil", desc: "Sesuatu yang jalan — dan biasanya jadi bahan belajar buat proses berikutnya." },
];

export const SKILL_WORKFLOWS = [
  {
    name: "JavaScript",
    chain: ["INPUT", "Logic", "Eksperimen", "Debug", "Implementasi"],
    desc: "Biasanya gue mulai dari logic yang ingin dicapai, bikin versi sederhana, lalu iterasi sampai behaviour-nya sesuai.",
  },
  {
    name: "React",
    chain: ["IDE", "Component", "State", "Interaction", "Testing", "Refinement"],
    desc: "Biasanya gue pecah UI jadi component kecil dulu, atur state-nya, baru rapihin interaksi dan detailnya belakangan.",
  },
  {
    name: "AI / ChatGPT / Claude / DeepSeek",
    chain: ["Masalah", "Prompt", "Context", "Output", "Evaluasi", "Iterasi", "Implementasi"],
    desc: "Gue anggap AI kayak partner diskusi — kasih context yang jelas, cek hasilnya pelan-pelan, baru dipakai kalau emang pas.",
  },
  {
    name: "UI / Frontend",
    chain: ["Ide", "Struktur", "Visual", "Interaction", "Responsive", "Polish"],
    desc: "Mulai dari struktur konten dulu, baru mikirin visual dan detail interaksi — biar nggak cuma keliatan bagus tapi juga kepake enak.",
  },
  {
    name: "Cybersecurity",
    chain: ["Konsep", "Eksperimen aman", "Observasi", "Analisis", "Pemahaman"],
    desc: "Masih tahap belajar — coba konsep di lingkungan aman, perhatiin hasilnya, terus dicerna pelan-pelan.",
  },
];

export const EVERYDAY_TOOLS = ["HTML", "CSS", "Next.js", "Tailwind CSS", "Git", "GitHub", "VS Code", "Vercel", "Supabase"];

export const AI_TOOLS = [
  { name: "ChatGPT", teaser: "Brainstorming & debugging", desc: "Biasanya gue pakai buat brainstorming, debugging, eksplorasi API, dan mecahin masalah yang belum gue pahami." },
  { name: "Claude", teaser: "Baca kode panjang & reasoning", desc: "Sering dipakai buat baca struktur kode yang panjang, reasoning soal project, dan iterasi implementasi." },
  { name: "DeepSeek", teaser: "Bandingin pendekatan lain", desc: "Dipakai buat eksperimen dan bandingin pendekatan dari model lain." },
  { name: "Gemini", teaser: "Cross-check jawaban", desc: "Kadang jadi opsi kedua buat cross-check jawaban atau nyari sudut pandang lain dari masalah yang sama." },
  { name: "Grok", teaser: "Bandingin gaya jawaban", desc: "Sesekali dipakai buat lihat gimana model lain merespons prompt yang sama, sekadar bandingin gaya jawabannya." },
];

export const PROMPT_STEPS = [
  { k: "Prompt", d: "Mulai dari permintaan yang jelas dan spesifik." },
  { k: "Konteks", d: "Kasih background yang emang dibutuhin, bukan cuma instruksi singkat." },
  { k: "Iterasi", d: "Bukan langsung terima draft pertama — diperbaiki lagi." },
  { k: "Evaluasi", d: "Dicek dulu sebelum dipercaya begitu aja." },
  { k: "Implementasi", d: "Disesuaikan lagi biar beneran jalan di kode asli." },
];

export const PROCESS_CHAIN = ["Ide", "Riset", "Dibantu AI", "Coding", "Debugging", "Iterasi", "Hasil"];

export const PROJECTS = [
  { name: "Mangaverse", desc: "Aplikasi buat baca & nemuin manga — fokus ke reader yang ringan dan cepat.", stack: ["React", "Next.js", "Tailwind CSS"], status: "Proses", link: "" },
  { name: "NEXORA", desc: "Eksperimen pribadi buat ngerangkai workflow development yang dibantu AI.", stack: ["JavaScript", "AI"], status: "Eksperimen", link: "" },
  { name: "AZAZOTHX", desc: "Sandbox buat nyoba-nyoba ide frontend dan pola interaksi baru.", stack: ["React", "CSS"], status: "Eksperimen", link: "" },
  { name: "Eksperimen Prompt AI", desc: "Tools kecil buat bandingin struktur prompt di beberapa model AI sekaligus.", stack: ["Next.js", "AI"], status: "Personal", link: "" },
];
