import React from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  return (
    <div className="flex bg-gray-100 min-h-screen font-inter">
      {/* Sidebar */}
      <aside className="w-1/5 bg-white h-screen p-4 border-r border-gray-200">
        <h1 className="text-xl font-bold mb-6">Healthy Life</h1>
        <nav>
          <ul>
            <li className="mb-4">
              <a
                href="#"
                className="flex items-center p-2 bg-green-100 text-green-600 rounded-md"
              >
                <i className="fas fa-home mr-2"></i> Halaman Utama
              </a>
            </li>
            <li className="mb-4">
              <a
                href="#"
                className="flex items-center p-2 text-gray-600 hover:bg-gray-100 rounded-md"
              >
                <i className="fas fa-shopping-cart mr-2"></i> Pembelian
              </a>
            </li>
            <li className="mb-4">
              <a
                href="#"
                className="flex items-center p-2 text-gray-600 hover:bg-gray-100 rounded-md"
              >
                <i className="fas fa-file-alt mr-2"></i> Laporan
              </a>
            </li>
            <li className="mb-4">
              <a
                href="#"
                className="flex items-center p-2 text-gray-600 hover:bg-gray-100 rounded-md"
              >
                <i className="fas fa-users mr-2"></i> Anggota
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Header */}
        <header className="flex items-center justify-between mb-6">
          <div className="flex items-center w-full max-w-md">
            <i className="fas fa-search text-gray-400 mr-2"></i>
            <input
              type="text"
              placeholder="Search Dashboard"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex items-center">
            <i className="fas fa-bell text-gray-400 mr-6"></i>
            <img
              src="https://placehold.co/40x40"
              alt="User profile picture"
              className="w-10 h-10 rounded-full"
            />
          </div>
        </header>

        {/* Summary Cards */}
        <section className="grid grid-cols-3 gap-6 mb-6">
          <div className="p-4 bg-white border border-gray-200 rounded-md">
            <div className="flex items-center justify-between mb-2">
              <i className="fas fa-wallet text-gray-400"></i>
              <span className="text-green-500 text-sm">+10%</span>
            </div>
            <h2 className="text-gray-600">Total Revenue</h2>
            <p className="text-xl font-bold">IDR 150.000</p>
          </div>
          <div className="p-4 bg-white border border-gray-200 rounded-md">
            <div className="flex items-center justify-between mb-2">
              <i className="fas fa-shopping-bag text-gray-400"></i>
              <span className="text-green-500 text-sm">+5%</span>
            </div>
            <h2 className="text-gray-600">Total Sales</h2>
            <p className="text-xl font-bold">45</p>
          </div>
          <div className="p-4 bg-white border border-gray-200 rounded-md">
            <div className="flex items-center justify-between mb-2">
              <i className="fas fa-dollar-sign text-gray-400"></i>
              <span className="text-green-500 text-sm">+8%</span>
            </div>
            <h2 className="text-gray-600">Balance</h2>
            <p className="text-xl font-bold">IDR 100.000</p>
          </div>
        </section>

        {/* Analytics Cards */}
        <section className="grid grid-cols-2 gap-6 mb-6">
          <div className="p-4 bg-white border border-gray-200 rounded-md">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-gray-600">New Visitor</h2>
              <span className="text-red-500 text-sm">-12.45%</span>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-2xl font-bold">25%</p>
              <div className="w-32 h-16 bg-gray-100 rounded-md"></div>
            </div>
          </div>
          <div className="p-4 bg-white border border-gray-200 rounded-md">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-gray-600">Activity</h2>
              <span className="text-green-500 text-sm">+10.45%</span>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-2xl font-bold">85%</p>
              <div className="w-32 h-16 bg-gray-100 rounded-md"></div>
            </div>
          </div>
        </section>

        {/* Sales Chart */}
        <section className="grid grid-cols-2 gap-6">
          <div className="p-4 bg-white border border-gray-200 rounded-md">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-gray-600">Sales</h2>
              <span className="text-green-500 text-sm">+10%</span>
            </div>
            <div className="w-full h-32 bg-gray-100 rounded-md mb-2"></div>
            <p className="text-xl font-bold">IDR 1.500.000</p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;
