import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Untuk navigasi ke halaman lain
import styles from "../styles/InputData.module.css";

// Fungsi untuk menentukan status tekanan darah
function getTekananDarahStatus(tekanan) {
  return tekanan >= 90 && tekanan <= 120 ? "Normal" : "Tidak Normal";
}

// Fungsi untuk menghitung IMT dan status kesehatan
function hitungIMT(tinggi, berat) {
  let tinggiMeter = tinggi / 100;
  let imt = berat / (tinggiMeter * tinggiMeter);
  let status;
  if (imt < 18.5) {
    status = "Kurus";
  } else if (imt >= 18.5 && imt <= 24.9) {
    status = "Ideal";
  } else if (imt >= 25 && imt <= 29.9) {
    status = "Gemuk";
  } else {
    status = "Obesitas";
  }
  return { imt: imt.toFixed(1), status };
}

const InputData = () => {
  const [riwayat, setRiwayat] = useState([]);
  const navigate = useNavigate(); // Untuk navigasi

  // Mengambil data dari localStorage saat komponen dimuat
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("riwayatKesehatan")) || [];
    setRiwayat(data);
  }, []);

  // Fungsi untuk menambah data baru
  const tambahData = (e) => {
    e.preventDefault();
    const tanggal = e.target.tanggal.value;
    const tinggi = parseFloat(e.target.tinggiBadan.value);
    const berat = parseFloat(e.target.beratBadan.value);
    const tekanan = parseFloat(e.target.tekananDarah.value);

    if (!tanggal || !tinggi || !berat || !tekanan) {
      alert("Harap lengkapi semua data.");
      return;
    }

    const { imt, status } = hitungIMT(tinggi, berat);
    const statusTekananDarah = getTekananDarahStatus(tekanan);

    const dataBaru = {
      tanggal,
      tinggi,
      berat,
      tekanan,
      imt,
      statusIMT: status,
      statusTekananDarah,
    };

    const dataRiwayat = [...riwayat, dataBaru];
    localStorage.setItem("riwayatKesehatan", JSON.stringify(dataRiwayat));
    setRiwayat(dataRiwayat);

    e.target.reset();
    alert("Data berhasil ditambahkan!");

    // Navigasi ke halaman ProgressChart
    navigate("/progress");
  };

  return (
    <div className={styles.card}>
      <h2 className={styles.title}>Input Data Kesehatan</h2>
      <form className={styles.form} onSubmit={tambahData}>
        <div className={styles.formGroup}>
          <label htmlFor="tanggal">Tanggal:</label>
          <input type="date" id="tanggal" name="tanggal" />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="tinggiBadan">Tinggi Badan (cm):</label>
          <input type="number" id="tinggiBadan" name="tinggiBadan" placeholder="Masukkan tinggi badan" />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="beratBadan">Berat Badan (kg):</label>
          <input type="number" id="beratBadan" name="beratBadan" placeholder="Masukkan berat badan" />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="tekananDarah">Tekanan Darah:</label>
          <input type="number" id="tekananDarah" name="tekananDarah" placeholder="Masukkan tekanan darah" />
        </div>
        <div className={styles.buttonGroup}>
          <button type="submit" className={styles.saveButton}>
            Simpan
          </button>
          <button type="button" className={styles.cancelButton} onClick={() => alert("Batal!")}>
            Batal
          </button>
        </div>
      </form>

      <h3 className={styles.subtitle}>Riwayat Kesehatan</h3>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Tanggal</th>
            <th>Tinggi (cm)</th>
            <th>Berat (kg)</th>
            <th>Tekanan Darah</th>
            <th>IMT</th>
            <th>Status IMT</th>
          </tr>
        </thead>
        <tbody>
          {riwayat.length > 0 ? (
            riwayat.map((data, index) => (
              <tr key={index}>
                <td>{data.tanggal}</td>
                <td>{data.tinggi}</td>
                <td>{data.berat}</td>
                <td>
                  {data.tekanan} ({data.statusTekananDarah})
                </td>
                <td>{data.imt}</td>
                <td>{data.statusIMT}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className={styles.noData}>
                Tidak ada data.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default InputData;
