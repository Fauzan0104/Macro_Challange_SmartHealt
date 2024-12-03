import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

function Chickenkatsu() {
  const navigate = useNavigate(); // Use the useNavigate hook

  return (
    <>
      <meta charSet="utf-8" />
      <meta content="width=device-width, initial-scale=1.0" name="viewport" />
      <title>Resep Sup Krim Wortel</title>
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
              box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            }
            header .logo {
              font-size: 1.5rem;
              font-weight: bold;
              color: #2f6f4f;
            }
            header nav {
              display: flex;
              gap: 1.5rem;
              position: relative; /* Added for positioning purposes */
            }
            header nav button, header nav a {
              color: #333;
              font-size: 1rem;
              font-weight: 500;
              text-decoration: none;
              transition: color 0.3s ease;
              background: none; /* Menghapus background default */
              border: none; /* Menghapus border */
              box-shadow: none; /* Menghapus shadow */
              position: relative; /* Ensure it stays above dropdown */
              z-index: 2; /* Ensure it stays on top of the dropdown */
            }
            header nav button:hover, header nav a:hover {
              color: #2f6f4f;
              text-decoration: underline; /* Menambahkan underline saat hover */
            }

            /* Dropdown styles */
            .dropdown-content {
              display: none;
              position: absolute;
              top: 100%;
              left: 0;
              background-color: white;
              box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
              min-width: 200px;
              z-index: 1; /* Dropdown will be behind other elements */
            }
            .dropdown:hover .dropdown-content {
              display: block;
            }
            .dropdown-content a {
              color: #333; /* Warna teks default */
              font-size: 1rem;
              font-weight: 500;
              text-decoration: none;
              padding: 0.5rem;
              display: block;
              transition: color 0.3s ease;
            }
            .dropdown-content a:hover {
              color: #2f6f4f; /* Warna teks ketika hover */
              background-color: #f4f7fa; /* Background saat hover */
            }

            .container {
              display: flex;
              flex-direction: column;
              gap: 2rem;
              max-width: 1200px;
              margin-left: 0;
              padding: 2rem;
              margin-right: auto;
            }
            .content {
              display: flex;
              justify-content: space-between;
              gap: 2rem;
              flex-wrap: wrap;
            }
            .image {
              flex: 1;
              max-width: 45%;
              height: auto;
              border-radius: 8px;
              box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2); /* Shadow lebih besar */
              margin-bottom: 1rem;
            }
            .recipe-container {
              display: flex;
              gap: 2rem;
              width: 100%;
              flex: 2;
              flex-wrap: wrap;
            }
            .ingredients, .instructions, .calories {
              background-color: white;
              padding: 2rem;
              border-radius: 8px;
              box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1); /* Shadow lebih besar */
              width: 100%;
              margin-bottom: 1rem;
            }
            .ingredients, .calories {
              flex: 2;
            }
            .instructions {
              flex: 2;
              max-width: 60%;
            }
            .recipe-details h2 {
              font-size: 2rem;
              color: #2f6f4f;
              margin-bottom: 1rem;
            }
            .recipe-details h3 {
              font-size: 1.25rem;
              font-weight: 600;
              color: #2d3748;
              margin-bottom: 1rem;
            }
            .recipe-details ul, .recipe-details ol {
              padding-left: 1.5rem;
              margin-bottom: 1rem;
            }
            .recipe-details ul li, .recipe-details ol li {
              margin-bottom: 0.5rem;
              font-size: 1rem;
              line-height: 1.6;
            }
            .recipe-details .calories {
              background-color: #f7fafc;
              padding: 16px;
              margin-top: 1rem;
              border-radius: 8px;
              box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
            }
            .calories h3 {
              font-size: 1.25rem;
              font-weight: 700;
              color: #2d3748;
            }
            .calories p {
              margin: 0.25rem 0;
            }
            .back-button {
              font-size: 1.25rem;
              color: #2f6f4f;
              cursor: pointer;
              margin-bottom: 1rem;
            }
            .back-button:hover {
              text-decoration: underline;
            }
            .image img {
              width: 100%;
              height: auto;
              object-fit: cover;
              border-radius: 8px;
            }

            /* Change the color of the arrow to white */
            .back-button i {
              color: white; /* Make the arrow white */
            }

            @media (max-width: 768px) {
              .content {
                flex-direction: column;
              }
              .image {
                width: 80%;
                margin: 0 auto;
              }
              .recipe-container {
                width: 100%;
              }
              .instructions {
                max-width: 100%;
              }
            }

 .calories {
  display: flex; /* Menggunakan Flexbox */
  justify-content: space-between; /* Memastikan ada jarak antar elemen */
  align-items: center; /* Menjaga elemen tetap rata secara vertikal */
  background-color: #f7fafc;
  padding: 16px;
  margin-top: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.calories .calorie-item {
  display: flex;
  flex-direction: column;
  gap: 0,5rem
  width: 45%;
  }

.calories .calorie-item p {
  margin:0;
  font-size: 1rem;
  color: #333;
}

.calories .plus-button {
  font-size: 1.25rem; /* Ukuran font lebih kecil */
  color: white;
  background-color: #388e3c; /* Background hijau */
  padding: 0.4rem 0.8rem; /* Padding lebih kecil */
  border-radius: 50%;
  cursor: pointer;
  display: inline-block;
  text-align: center;
  transition: background-color 0.3s ease;
  margin-left: 1rem;
}

.calories .plus-button:hover {
  background-color: #2c6e2e; /* Hijau lebih gelap saat hover */
}
    @media (max-width: 768px) {
              .content {
                flex-direction: column;
              }
              .image {
                width: 80%;
                margin: 0 auto;
              }
              .recipe-container {
                width: 100%;
              }
              .instructions {
                max-width: 100%;
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
          <button onClick={() => navigate("/makanmalam")} className="back-button">
            <i className="fas fa-arrow-left" />
          </button>
          <h1 className="ml-4">Resep Chicken Katsu</h1>
        </div>

        <div className="content">
          <div className="image">
            <img
              alt="Chicken Katsu"
            src="https://storage.googleapis.com/a1aa/image/FQDzgdlUGe0fQEsVYditnDOWC0Wjr7niB5KNfcykwFzJaRlnA.jpg"
  />
          </div>

          <div className="recipe-container">
            <div className="ingredients">
              <div className="recipe-details">
                <h2>Bahan-Bahan:</h2>
                <ul>
                <li>2 dada ayam tanpa tulang</li>
            <li>100 gram tepung roti/panir (disarankan menggunakan tepung roti yang berwarna orange untuk hasil yang cantik)</li>
            <li>2 sdt bubuk kari</li>
            <li>2 sdt bubuk paprika</li>
            <li>2 sdt bubuk lada hitam</li>
            <li>1 butir telur, kocok lepas</li>
            <li>Garam secukupnya</li>
            <li>Minyak goreng untuk menggoreng</li>
                </ul>
              </div>
            </div>

            <div className="instructions">
              <h2>Cara Membuat:</h2>
              <ol>
              <li>Giling dada ayam hingga agak pipih, taburi dengan garam, bubuk kari, bubuk paprika, dan lada hitam.</li>
            <li>Celupkan ayam ke dalam telur kocok, kemudian gulingkan ke dalam tepung roti hingga terlapisi rata.</li>
            <li>Panaskan minyak dalam wajan dengan api sedang, lalu goreng ayam hingga berwarna kecokelatan dan renyah.</li>
            <li>Angkat ayam dan tiriskan dari minyak.</li>
            <li>Potong-potong chicken katsu dan sajikan dengan nasi dan saus tonkatsu.</li>
              </ol>
            </div>
           
           <div>
            <div className="calories">
              <div classname="calories-item"></div>
            <h3>Ringkasan Kalori</h3>
              <p>Lemak Jenuh: 18.90g</p>
              <p>Kolesterol: 80mg</p>
              <p>Sodium: 100mg</p>
              <p>Karbohidrat: 28.50g</p>
              <p>Serat: 2.0g</p>
             </div>

             <div className="calorie-item">
              </div>

              <span className="plus-button">+</span>
              <p><strong>450 kalori</strong></p>
            </div>  
          </div>
        </div>
      </main>
    </>
  );
}

export default Chickenkatsu;
