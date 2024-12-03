import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Makanmalam() {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleBackClick = () => {
    navigate("/home");
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const closeDropdown = (e) => {
    if (e.target.closest("#dropdownButton") === null) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", closeDropdown);
    return () => {
      document.removeEventListener("click", closeDropdown);
    };
  }, []);

  return (
    <>
      <meta charSet="utf-8" />
      <meta content="width=device-width, initial-scale=1.0" name="viewport" />
      <title>Healthy Life</title>
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
          .cards-container {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); /* Kolom fleksibel */
            gap: 20px; /* Jarak antar kartu */
            margin-top: 20px;
          }

          .card {
            display: flex;
            flex-direction: column; /* Ubah menjadi kolom */
            align-items: center;
            border-radius: 12px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            overflow: hidden;
            background-color: white;
            padding: 20px;
            max-width: 300px; /* Batas maksimal ukuran kartu */
            margin: 0 auto; /* Pusatkan kartu */
            transition: transform 0.3s ease;
          }

          .card:hover {
            transform: scale(1.05);
          }

          .card img {
            border-radius: 8px;
            width: 100%; /* Gambar memenuhi lebar kartu */
            height: auto; /* Tinggi menyesuaikan lebar */
            object-fit: cover;
            margin-bottom: 10px;
          }

          .card-title {
            font-size: 1.25rem;
            font-weight: 700;
            color: #2d6a4f;
            text-align: center; /* Rata tengah judul */
            margin-bottom: 10px;
          }

          .card-description {
            font-size: 0.9rem;
            color: #555;
            line-height: 1.5;
            text-align: center; /* Rata tengah deskripsi */
            margin-bottom: 15px;
          }

          .card button {
            background-color: #2d6a4f;
            color: white;
            padding: 10px 20px;
            border-radius: 6px;
            border: none;
            cursor: pointer;
            transition: background-color 0.3s ease;
          }

          .card button:hover {
            background-color: #218c49;
          }
        `,
        }}
      />
      
      <main className="container mx-auto mt-8 px-6">
        <div className="flex items-center mb-4">
          <button
            className="text-green-600 text-xl mr-4"
            onClick={handleBackClick}
          >
            <i className="fas fa-arrow-left" />
          </button>
          <h1 className="text-3xl font-bold text-green-700">Rekomendasi Makan Malam</h1>
        </div>
        <div className="cards-container">
          {/* Sup Krim Wortel */}
          <div className="card">
            <img
              alt="Sup krim wortel"
              src="https://storage.googleapis.com/a1aa/image/lBFE43B4Xq4aO9IsqcI5oY0HVeTuVSBdbCGlXHARcWoiWU5JA.jpg"
            />
            <h2 className="card-title">Sup Krim Wortel</h2>
            <p className="card-description">
              Wortel Brastagi 2 buah dipotong-potong | Sup krim kemasan merek Royco atau bebas | Air secukupnya sekitar 300 ml
            </p>
            <button onClick={() => navigate('/supkrim')}>Klik Disini</button>
          </div>
          {/* Chicken Katsu */}
          <div className="card">
            <img
              alt="Chicken Katsu"
              src="https://storage.googleapis.com/a1aa/image/FQDzgdlUGe0fQEsVYditnDOWC0Wjr7niB5KNfcykwFzJaRlnA.jpg"
            />
            <h2 className="card-title">Chicken Katsu</h2>
            <p className="card-description">
              150 gram tepung roti/panir (disarankan pakai yang warna orange agar cantik). Tapi pakai merk Kobe juga boleh | 2 sdt bubuk kari | 2 sdt bubuk paprika | 2 sdt bubuk lada hitam | Bahan Utama
            </p>
            <button onClick={() => navigate('/chickenkatsu')}>Klik Disini</button>
          </div>
          {/* Bihun Kuah */}
          <div className="card">
            <img
              alt="Bihun Kuah"
              src="https://storage.googleapis.com/a1aa/image/ep8z3zxxzo3dGqr54mRaKw8blnBdeeqaK8CBBRHjrhLGaRlnA.jpg"
            />
            <h2 className="card-title">Bihun Kuah</h2>
            <p className="card-description">
              1 Bungkus bihun | 2 ons jamur/optional bisa diganti jamur atau sayur lain | 2 butir telur | 2 buah sosis | 3 siung bawang putih | Sejumput merica | Garam dan penyedap
            </p>
            <button onClick={() => navigate('/bihunkuah')}>Klik Disini</button>
          </div>
        </div>
      </main>
    </>
  );
}

export default Makanmalam;
