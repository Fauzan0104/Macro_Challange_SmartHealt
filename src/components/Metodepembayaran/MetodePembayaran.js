import React, { useState } from 'react';
import "../styles/MetodePembayaran.css";

const PaymentMethod = () => {
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const handlePayment = () => {
    setShowSuccessPopup(true);
  };

  const closePopup = () => {
    setShowSuccessPopup(false);
  };

  return (
    <div className="payment-container">
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

      <main className="payment-main">
        <h2>Pembayaran</h2>
        <div className="payment-method">
          <h3>Metode Pembayaran</h3>
          <div className="payment-options">
            <div className="payment-option">
              <img src="secure.png" alt="Secure" />
              <span>Secure</span>
            </div>
            <div className="payment-option">
              <img src="logos_visa.png" alt="VISA" />
            </div>
            <div className="payment-option">
              <img src="logos_mastercard.png" alt="MasterCard" />
            </div>
            <div className="payment-option">
              <img src="logo_paypal.png" alt="PayPal" />
            </div>
          </div>
        </div>

        <div className="payment-form">
          <div className="input-row">
            <div className="input-group">
              <label>Nama Depan</label>
              <input type="text" placeholder="Masukkan nama depan" />
            </div>
            <div className="input-group">
              <label>Nama Belakang</label>
              <input type="text" placeholder="Masukkan nama belakang" />
            </div>
          </div>
          <div className="input-group">
            <label>Nomer Kartu</label>
            <div className="card-input">
              <img src="logos_mastercard.png" alt="MasterCard" />
              <input type="text" placeholder="********* 788 ***" />
            </div>
          </div>
        </div>

        <div className="payment-summary">
          <span>Total:</span>
          <span>Rp 75.000</span>
        </div>

        <button className="payment-button" onClick={handlePayment}>
          Bayar Sekarang
        </button>
      </main>

      {showSuccessPopup && (
  <div className="payment-popup">
    <div className="popup-content">
      <img
        src="ci_off-close.png"
        alt="Pembayaran Berhasil"
        className="success-icon"
      />
      <h3>Pembayaran Berhasil</h3>
      <button className="close-popup" onClick={closePopup}>
              Tutup
      </button>
    </div>
  </div>
)}
    </div>
  );
};

export default PaymentMethod;
