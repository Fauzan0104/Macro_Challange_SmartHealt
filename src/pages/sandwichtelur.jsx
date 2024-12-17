import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

function Sandwichtelur() {
  const navigate = useNavigate(); // Use the useNavigate hook

  return (
    <>
      <meta charSet="utf-8" />
      <meta content="width=device-width, initial-scale=1.0" name="viewport" />
      <title>Resep Sandwich Telur Keju</title>
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
        rel="stylesheet"
      />

<style
        dangerouslySetInnerHTML={{
          __html: `
            body {
              font-family: 'Roboto', sans-serif;
              margin: 0;
              padding: 0;
              background-color: #f4f7fa;
            }
            header {
              display: flex;
              justify-content: space-between;
              align-items: center;
              padding: 1rem 2rem;
              background-color: white;
              box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
            }
            header .logo {
              font-size: 1.5rem;
              font-weight: bold;
              color: #2f6f4f;
            }
            header nav {
              display: flex;
              align-items: center;
              gap: 1rem;
            }
            header nav button,
            header nav a {
              color: #333;
              font-size: 1rem;
              font-weight: 500;
              text-decoration: none;
              background: none;
              border: none;
              cursor: pointer;
              transition: color 0.3s ease;
            }
            header nav button:hover,
            header nav a:hover {
              color: #2f6f4f;
            }
            .dropdown-content {
              display: none;
              position: absolute;
              top: 100%;
              left: 0;
              background-color: white;
              box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
              padding: 1rem;
              border-radius: 8px;
            }
            .dropdown:hover .dropdown-content {
              display: block;
            }
            .dropdown-content a {
              display: block;
              padding: 0.5rem 0;
              color: #333;
              text-decoration: none;
            }
            .dropdown-content a:hover {
              color: #2f6f4f;
              background-color: #f4f7fa;
            }
            .container {
              max-width: 1200px;
              margin: 2rem auto;
              padding: 1rem;
            }
            .content {
              display: flex;
              flex-wrap: wrap;
              gap: 2rem;
            }
            .image {
              flex: 1;
              max-width: 45%;
              border-radius: 8px;
              overflow: hidden;
              box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            }
            .image img {
              width: 100%;
              height: auto;
            }
            .recipe-container {
              flex: 2;
              display: flex;
              flex-direction: column;
              gap: 1rem;
            }
            .ingredients,
            .instructions {
              background-color: white;
              padding: 1.5rem;
              border-radius: 8px;
              box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            }
            .calories {
              display: flex;
              flex-wrap: wrap;
              gap: 1rem;
              align-items: center;
              background-color: #f7fafc;
              padding: 1.5rem;
              border-radius: 8px;
              box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            }
            @media (max-width: 768px) {
              .content {
                flex-direction: column;
              }
              .image {
                max-width: 100%;
              }
              .recipe-container {
                flex: 1;
              }
            }
          `,
        }}
      />


      <header>
        <div className="logo">Healthy Life</div>
        <nav>
          <button onClick={() => navigate("/")}>Home</button>
          <div className="dropdown">
            <button className="text-black">
              Fitur <i className="fas fa-chevron-down" />
            </button>
            <div className="dropdown-content">
              <a href="#">Pelacak Jam Tidur</a>
              <a href="#">Pelacak Langkah</a>
              <a href="#">Resep Makanan</a>
              <a href="#">Catatan Sehat</a>
              <a href="#">Aktivitas Fisik</a>
              <a href="#">Monitor Kesehatan</a>
            </div>
          </div>
          <a href="#">Artikel</a>
          <a href="#">Pusat Bantuan</a>
        </nav>
        <div>
          <i className="fas fa-bars" />
        </div>
      </header>

      <main className="container">
        <div className="flex items-center mb-4">
          <button onClick={() => navigate("/sarapan")} className="back-button">
            <i className="fas fa-arrow-left" />
          </button>
          <h1 className="ml-4">Resep Sandwich Telur Keju</h1>
        </div>

        <div className="content">
          <div className="image">
            <img
              alt="Sandwich telur keju"
              src="https://storage.googleapis.com/a1aa/image/nEcNjvYSr95JJV8nIyfuxavNgAulXy9Ui9qHf4Pp389W6PyTA.jpg"
            />
          </div>

          <div className="recipe-container">
            <div className="ingredients">
              <div className="recipe-details">
                <h2>Bahan-Bahan:</h2>
                <ul>
                  <li>2 lembar roti gandum</li>
                  <li>2 butir telur</li>
                  <li>1 lembar keju cheddar</li>
                  <li>Mentega secukupnya</li>
                  <li>Garam dan merica secukupnya</li>
                  <li>Sayuran segar (selada, tomat, timun) sesuai selera</li>
                </ul>
              </div>
            </div>

            <div className="instructions">
              <h2>Cara Membuat:</h2>
              <ol>
                <li>Panaskan wajan dan lelehkan mentega.</li>
                <li>Goreng telur sesuai selera (ceplok atau orak-arik).</li>
                <li>Panggang roti gandum hingga kecoklatan.</li>
                <li>Letakkan telur dan keju di atas roti panggang, lalu tutup dengan roti kedua.</li>
                <li>Tambahkan sayuran segar di dalam sandwich.</li>
                <li>Potong sandwich dan sajikan.</li>
              </ol>
            </div>
           
           <div>
            <div className="calories">
              <div classname="calories-item"></div>
            <h3>Ringkasan Kalori</h3>
              <p>Lemak Jenuh: 1.600g</p>
              <p>Kolesterol: 213mg</p>
              <p>Sodium: 392mg</p>
              <p>Karbohidrat: 31.5g</p>
              <p>Serat: 2.0g</p>
             </div>

             <div className="calorie-item">
              </div>

              <span className="plus-button">+</span>
              <p><strong>350 kalori</strong></p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Sandwichtelur;
