import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Sarapan() {
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
          <h1 className="text-3xl font-bold text-green-700">Rekomendasi Sarapan</h1>
        </div>
        <div className="cards-container">
          {/* Sandwich Telur Keju Card */}
          <div className="card">
            <img
              alt="Sandwich telur keju"
              src="https://storage.googleapis.com/a1aa/image/nEcNjvYSr95JJV8nIyfuxavNgAulXy9Ui9qHf4Pp389W6PyTA.jpg"
            />
            <div className="card-content">
              <h2 className="card-title">Sandwich Telur Keju</h2>
              <p className="card-description">
                4 lembar roti tawar | 2 butir telur | 4 buah tomat (iris tipis) | 1 buah timun | 100 gram selada | 50 ml mayones | 100 ml margarin | 50 gram keju cheddar | 1 sdt garam | 1 sdt lada | 1 sdt gula pasir
              </p>
              <button
                onClick={() => navigate('/sandwichtelur')}
              >
                Klik Disini
              </button>
            </div>
            <i className="fas fa-plus-circle" />
          </div>
          {/* Potato Wedges Card */}
          <div className="card">
            <img
              alt="Potato wedges"
              src="https://storage.googleapis.com/a1aa/image/akm8xVTforVyMaUcfZ5wcrFI6mbTqoF6aEewglsShZ0X8fIPB.jpg"
            />
            <div className="card-content">
              <h2 className="card-title">Potato Wedges</h2>
              <p className="card-description">
                2 buah kentang | 2 sdm minyak | 1 sdt garam | 1 sdt lada | 1 sdt paprika bubuk | 1 sdt bawang putih bubuk | 1 sdt bawang bombay bubuk | 1 sdt oregano | 1 sdt basil | 1 sdt parsley
              </p>
              <button
                onClick={() => navigate('/potatowedges')}
              >
                Klik Disini
              </button>
            </div>
            <i className="fas fa-plus-circle" />
          </div>
          {/* Salad Sayur Card */}
          <div className="card">
            <img
              alt="Salad sayur"
              src="https://storage.googleapis.com/a1aa/image/Kny0txkViQJmMdySZp5bZTzATkE7kV0K1aw5ddUxFecGfPyTA.jpg"
            />
            <div className="card-content">
              <h2 className="card-title">Salad Sayur</h2>
              <p className="card-description">
                1 buah wortel | 2 buah tomat | 2 buah timun | 1 buah paprika | 1 buah bawang bombay | 100 gram selada | 50 ml mayones | 1 sdt garam | 1 sdt lada | 1 sdt gula pasir
              </p>
              <button
                onClick={() => navigate('/saladsayur')}
              >
                Klik Disini
              </button>
            </div>
            <i className="fas fa-plus-circle" />
          </div>
        </div>
      </main>
    </>
  );
}

export default Sarapan;
