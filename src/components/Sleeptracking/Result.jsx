import React from "react";
import "../Styles/Result.css";

function Result({ startTime, endTime }) {
  const calculateScore = () => {
    if (!startTime || !endTime) return 0;
    const duration = (endTime - startTime) / (1000 * 60 * 60); // Durasi dalam jam
    const score = Math.min(Math.floor((duration / 8) * 100), 100); // Skor maksimal 100
    return score;
  };

  const score = calculateScore();
  const durationHours = ((endTime - startTime) / (1000 * 60 * 60)).toFixed(2); // Durasi tidur dalam jam

  // Format waktu untuk tampilkan jam dan menit
  const formatTime = (time) => new Date(time).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

  // Tanggal real-time berdasarkan startTime
  const sleepDate = new Date(startTime).toLocaleDateString([], {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="result-container">
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
        <section className="sleep-score">
          <h2>{score}</h2>
          <p>Skor Tidur</p>
          <p>{sleepDate}</p>
        </section>

        <section className="sleep-details">
          <div className="score-stars">
            {"★".repeat(Math.floor(score / 20)) + "☆".repeat(5 - Math.floor(score / 20))}
          </div>
          <p>
            Waktu Tidur: <span>{formatTime(startTime)}</span>
          </p>
          <p>
            Waktu Bangun: <span>{formatTime(endTime)}</span>
          </p>
          <p>
            Durasi Tidur: <span>{durationHours} jam</span>
          </p>
        </section>
      </main>
    </div>
  );
}

export default Result;
