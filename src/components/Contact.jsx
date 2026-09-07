import { Mail } from "lucide-react";
import Section from "./Section.jsx";

export default function Contact({ reduced }) {
  return (
    <Section id="kontak" eyebrow="Kontak" reduced={reduced}>
      <div className="contact-row">
        <div>
          <h2 className="contact-title">Ada proyek atau ide yang mau dibangun bareng?</h2>
          <p className="contact-sub">
            Terbuka buat ngobrolin proyek, ide, atau sekadar tukar cerita soal tools yang lagi kamu
            coba.
          </p>
        </div>
        <a className="btn-primary" href="mailto:hello@bagas.dev">
          <Mail size={16} /> Kirim Email
        </a>
      </div>
    </Section>
  );
}
