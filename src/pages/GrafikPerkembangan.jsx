import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header";
import styles from "../styles/GrafikPerkembangan.module.css";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Registrasi ChartJS komponen
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const GrafikPerkembangan = () => {
  const [riwayat, setRiwayat] = useState([]);
  const navigate = useNavigate();

  // Mengambil data dari localStorage saat halaman dimuat
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("riwayatKesehatan")) || [];
    setRiwayat(data);
  }, []);

  // Konfigurasi data untuk grafik
  const chartData = {
    labels: riwayat.map((item) => item.tanggal),
    datasets: [
      {
        label: "IMT (Indeks Massa Tubuh)",
        data: riwayat.map((item) => parseFloat(item.imt)),
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        tension: 0.3,
        pointRadius: 5,
      },
      {
        label: "Tekanan Darah",
        data: riwayat.map((item) => item.tekanan),
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        tension: 0.3,
        pointRadius: 5,
      },
    ],
  };

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.content}>
        <h1 className={styles.title}>Grafik Perkembangan</h1>
        {riwayat.length > 0 ? (
          <Line data={chartData} />
        ) : (
          <p className={styles.noData}>Belum ada data untuk ditampilkan.</p>
        )}
        <button onClick={() => navigate("/")} className={styles.backButton}>
          Kembali ke Halaman Utama
        </button>
      </div>
    </div>
  );
};

export default GrafikPerkembangan;
