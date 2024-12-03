import React from "react";
import { useNavigate } from "react-router-dom";

function CatatanSehat() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 font-roboto">
      {/* Header */}
      <header className="flex justify-between items-center p-6 bg-green-700 text-white shadow-lg">
        <div className="text-2xl font-bold">Healthy Life</div>
        <nav className="flex space-x-6">
          <a className="hover:text-green-300 transition" href="#">
            Home
          </a>
          <div className="relative">
            <button className="flex items-center space-x-1 hover:text-green-300 transition">
              <span>Fitur</span>
              <i className="fas fa-chevron-down"></i>
            </button>
          </div>
          <a href="#" className="hover:text-green-300 transition">
            Artikel
          </a>
          <a href="#" className="hover:text-green-300 transition">
            Pusat Bantuan
          </a>
        </nav>
        <div>
          <i className="fas fa-bars text-xl cursor-pointer"></i>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-8">
        {/* Title Section */}
        <div className="flex items-center space-x-4 mb-8">
          <i
            className="fas fa-arrow-left text-2xl text-green-700 cursor-pointer"
            onClick={() => navigate("/")}
          ></i>
          <h1 className="text-3xl font-bold text-green-700">Catatan Sehat</h1>
        </div>

        {/* Rencana Section */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-green-700">RENCANA</h2>
          <i className="fas fa-clipboard-list text-2xl text-green-700"></i>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-8 gap-6 border-t border-green-700">
          {/* Target Column */}
          <div className="bg-green-700 text-white rounded-t-lg shadow-md col-span-1">
            <div className="text-center p-4 font-bold border-b border-white">
              Target
            </div>
            <div className="flex flex-col items-center p-4">
              <img
                src="https://storage.googleapis.com/a1aa/image/yHyuWeB2CJShdypnX1uvUDWZev9RHELZ2OfnmPZ9V3dgTSlnA.jpg"
                alt="Sayur"
                className="h-16 w-16 rounded-full mb-4"
              />
              <p className="text-sm font-bold">Banyak Sayur</p>
            </div>
          </div>

          {/* Day Columns */}
          {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map(
            (day, index) => (
              <div
                key={index}
                className={`rounded-t-lg col-span-1 ${
                  day === "Wednesday" ? "bg-yellow-100" : "bg-white"
                } shadow-md border border-green-700`}
              >
                <div
                  className={`text-center font-bold p-4 ${
                    day === "Wednesday" ? "bg-yellow-400 text-black" : "bg-green-700 text-white"
                  }`}
                >
                  {day}
                </div>
                <div className="p-4 h-full">
                  {day === "Wednesday" ? (
                    <div className="text-center">
                      <p className="text-sm font-bold text-green-700">Cheat Day!!!</p>
                      <i className="fas fa-star text-yellow-500 text-lg mt-2 animate-spin"></i>
                    </div>
                  ) : (
                    <ul className="space-y-2">
                      <li>
                        <span className="font-bold">Sarapan: </span>Salad
                      </li>
                      <li>
                        <span className="font-bold">Siang: </span>Sayur Bayam
                      </li>
                      <li>
                        <span className="font-bold">Malam: </span>Kentang Rebus
                      </li>
                    </ul>
                  )}
                </div>
              </div>
            )
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-green-700 text-white p-4 text-center mt-8">
        <p>&copy; 2024 Healthy Life. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default CatatanSehat;
