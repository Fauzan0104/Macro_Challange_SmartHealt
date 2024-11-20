import React, { useState, useEffect } from "react";
import "../Styles/Sleep.css";

function Sleep({ onStop }) {
  const [time, setTime] = useState(new Date());

  // Update waktu setiap detik
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval); // Membersihkan interval saat komponen tidak aktif
  }, []);

  // Format waktu menjadi jam:menit:detik
  const formattedTime = time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" });

  return (
    <div className="sleep-container">
      <header className="header">
      <div className="logo-section">
        <h1 className="title">Healthy Life</h1>
        <button className="back-button">{"<"}</button>
      </div>
      <nav className="navigation">
        <a href="#">Home</a>
        <div className="dropdown">
          <a href="#" className="dropbtn">
            Fitur &#x25BC;
          </a>
          <div className="dropdown-content">
            <a href="#">Fitur 1</a>
            <a href="#">Fitur 2</a>
            <a href="#">Fitur 3</a>
          </div>
        </div>
        <a href="#">Artikel</a>
        <a href="#">Pusat Bantuan</a>
      </nav>
      <button className="menu-button">&#9776;</button>
    </header>

      <main className="main-content">
        <h2>Selamat Tidur</h2>
        {/* Gunakan waktu yang diperbarui secara real-time */}
        <h3 className="time">{formattedTime}</h3>
        <div className="clock">
          <img src="1789-[Converted].png" alt="Clock" />
        </div>
        <p className="wake-time">
          <span>⏰</span> {formattedTime}
        </p>
        <button className="wake-button" onClick={onStop}>
          Bangun
        </button>
        <p className="instruction">Tekan Jika Sudah Bangun</p>
      </main>
    </div>
  );
}

export default Sleep;
