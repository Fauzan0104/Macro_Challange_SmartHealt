import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import InputData from "./InputData";
import "../styles/InputDataPage.css"; // Tambahkan jika ada file CSS terkait

const InputDataPage = () => {
  const navigate = useNavigate();

  return (
    <div className="input-data-page">
      <Header />
      <div className="content">
        <h1>Input Data Kesehatan</h1>
        <InputData />
        {/* Tombol untuk menuju halaman grafik */}
        <button onClick={() => navigate("/progress")} className="button-navigate">
          Lihat Grafik Perkembangan
        </button>
      </div>
    </div>
  );
};

export default InputDataPage;
