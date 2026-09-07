import { Terminal } from "lucide-react";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <p className="footer-name">
          <Terminal size={13} /> Bagas Satrio Putra
        </p>
        <p className="footer-tag">Dibuat dengan kode dan rasa penasaran.</p>
      </div>
    </footer>
  );
}
