import { useEffect, useRef, useState } from "react";

export default function IntroVideo({ videoRef, onAdvance }) {
  const [showSkip, setShowSkip] = useState(false);
  const readyRef = useRef(false);

  useEffect(() => {
    const skipTimer = setTimeout(() => setShowSkip(true), 1200);
    // Kalau video belum kasih tanda "siap diputar" dalam ~2.5 detik — file
    // belum ada, gagal dimuat, atau autoplay-nya ke-block browser — anggap
    // nggak tersedia dan lanjut otomatis. Ini yang bikin layar nggak bisa
    // macet hitam lama cuma gara-gara /loading.mp4 belum ditaruh.
    const quickFail = setTimeout(() => {
      if (!readyRef.current) onAdvance();
    }, 2500);
    return () => {
      clearTimeout(skipTimer);
      clearTimeout(quickFail);
    };
  }, [onAdvance]);

  return (
    <>
      <video
        ref={videoRef}
        className="intro-video"
        src="/loading.mp4"
        autoPlay
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
        onLoadedData={() => {
          readyRef.current = true;
        }}
        onEnded={onAdvance}
        onError={onAdvance}
      />
      {showSkip && (
        <button className="intro-skip" onClick={onAdvance} type="button">
          Lewati
        </button>
      )}
    </>
  );
}
