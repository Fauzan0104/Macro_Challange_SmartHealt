import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/Langganan.css";

const SubscriptionMethod = () => {
  const navigate = useNavigate();

  const handleSubscribe = () => {
    navigate("/metode-pembayaran");
  };

  return (
    <div className="subscription-container">
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

      <main className="subscription-main">
      <div class="subscription-plan">
  <div class="subscription-row">
    <div class="subscription-label">Dimulai pada hari ini</div>
    <div class="subscription-info">
      <p>Uji coba gratis</p>
      <p>Selama 7 hari</p>
    </div>
  </div>
</div>

<div class="subscription-plan">
  <div class="subscription-row">
    <div class="subscription-label">Dimulai pada 14 November 2024</div>
    <div class="subscription-info">
      <p>Rp 75.000/bulan</p>
      <p>+ Pajak</p>
    </div>
  </div>
</div>


        <ul className="subscription-list">
          <li>Bisa batalkan kapan saja pada langganan di website Healthy Lifestyle</li>
          <li>Tidak akan dikenai biaya jika membatalkan sebelum 14 November 2024</li>
          <li>Kami akan mengirim pengingat 3 hari sebelum langganan berakhir</li>
        </ul>

        <p className="subscription-note">
          Biaya bank dan administrasi serta pajak ditanggung oleh pembeli. Dengan mengetuk tombol berlangganan Anda setuju untuk mengaktifkan fitur premium untuk website Healthy Lifestyle.
        </p>

        <button className="subscribe-button" onClick={handleSubscribe}>
          Langganan
        </button>
      </main>
    </div>
  );
};

export default SubscriptionMethod;
