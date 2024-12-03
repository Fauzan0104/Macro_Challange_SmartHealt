import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Makansiang() {
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
          <h1 className="text-3xl font-bold text-green-700">Rekomendasi Makan SIang</h1>
        </div>
        <div className="cards-container">
          {/* Tumis brokoli ayam */}
          <div className="card">
            <img
              alt="Sandwich telur keju"
              src="https://storage.googleapis.com/a1aa/image/yMD5mr1Lcu4YIFC4gqPshFsAfuCa1wbuomN0Y30sFFkRtT5JA.jpg"

            />
            <div className="card-content">
              <h2 className="card-title">Tumis brokoli ayam</h2>
              <p className="card-description">
              250 gr daging ayam | 150 gr brokoli | 4 siung bawang merah | 3 siung bawang putih | 3 sdm saus tiram | ½ sdt lada | 1 sdt kaldu ayam | Garam | Gula
              </p>
              <button
                onClick={() => navigate('/tumisbrokoli')}
              >
                Klik Disini
              </button>
            </div>
            <i className="fas fa-plus-circle" />
          </div>
          {/* Ayam Teriyaki Card */}
          <div className="card">
            <img
              alt="Ayam Teriyaki"
              src="https://storage.googleapis.com/a1aa/image/8iI0Ar9OrRbmINWJlILz3GZVHx1QwVmhudgAza1uaK6p2p8E.jpg"
            />
            <div className="card-content">
              <h2 className="card-title">Ayam Teriyaki</h2>
              <p className="card-description">
              200 gram dada ayam potong dadu | 100 gram jamur King Oyster | 100 gram Red Bell Pepper atau Paprika Merah (1 buah) | 1/2 bawang bombay | 3 siung bawang putih | 2 siung bawang merah 
              </p>
              <button
                onClick={() => navigate('/ayamteriyaki')}
              >
                Klik Disini
              </button>
            </div>
            <i className="fas fa-plus-circle" />
          </div>
          {/* Ayam goreng rempah*/}
          <div className="card">
            <img
              alt="Ayam Goreng Rempah"
              src="https://storage.googleapis.com/a1aa/image/KVcWZmiQLuooM1kklj7bIra28yRdghZpegL6IV35CGtQtT5JA.jpg"
            />
            <div className="card-content">
              <h2 className="card-title">Ayam goreng rempah</h2>
              <p className="card-description">
              160 gram paha ayam | 2 batang serai, potong potong | 1 sdt kunyit bubuk | 2 sdt ketumbar | 2 siung bawang merah, 1,2 siung bawang putih | lada secukupnya
              </p>
              <button
                onClick={() => navigate('/ayamgoreng')}
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

export default Makansiang;
