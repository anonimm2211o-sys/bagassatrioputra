import Section from "./Section.jsx";

export default function About({ reduced }) {
  return (
    <Section id="tentang" eyebrow="Tentang" title="Sedikit cerita soal gue" reduced={reduced}>
      <div className="about-text">
        <p>
          Sehari-hari gue banyak main di browser sama terminal — kerjain frontend, ngoprek AI, atau
          nyasar ke rabbit hole baru yang entah gimana selalu bikin penasaran. React sama JavaScript
          itu rumah, tapi bagian paling seru justru ada di detail UI/UX-nya.
        </p>
        <p>
          Belakangan ini gue mulai anggap AI bukan barang ajaib, tapi bagian dari alat kerja —
          sesuatu yang perlu diarahkan, dipertanyakan, dan kadang dibetulin kalau hasilnya ngawur.
          Cybersecurity juga lagi gue pelajarin pelan-pelan; masih awal banget, tapi cukup bikin
          penasaran buat terus lanjut.
        </p>
      </div>
    </Section>
  );
}
