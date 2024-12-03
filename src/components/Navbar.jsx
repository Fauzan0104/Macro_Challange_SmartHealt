import { Menu, User, Settings } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [burgerOpen, setBurgerOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Brand */}
          <div className="flex items-center">
            <span className="text-health-primary text-xl font-bold">Healthy Life</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-health-text hover:text-health-primary transition-colors">Home</a>
            {/* Dropdown Fitur */}
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="text-health-text hover:text-health-primary transition-colors flex items-center"
              >
                Fitur
              </button>
              {dropdownOpen && (
                <div className="absolute mt-2 w-40 bg-white border border-gray-200 rounded shadow-lg">
                  <a href="/fitur1" className="block px-4 py-2 text-health-text hover:bg-gray-100">Pelacak jam tidur</a>
                  <a href="#" className="block px-4 py-2 text-health-text hover:bg-gray-100">Pelacak langkah</a>
                  <a href="/home" className="block px-4 py-2 text-health-text hover:bg-gray-100">Resep makanan</a>
                  <a href="/catatansehat" className="block px-4 py-2 text-health-text hover:bg-gray-100">Catetan kesehatan</a>
                  <a href="/ExercisePage" className="block px-4 py-2 text-health-text hover:bg-gray-100">Aktifitas Fisik</a>
                  <a href="/health-monitor" className="block px-4 py-2 text-health-text hover:bg-gray-100">Monitor Kesehatan</a>
                </div>
              )}
            </div>
            <a href="/article" className="text-health-text hover:text-health-primary transition-colors">Artikel</a>
            <a href="#" className="text-health-text hover:text-health-primary transition-colors">Pusat Bantuan</a>
          </div>

          {/* Login Icon */}
          <div className="hidden md:flex items-center">
            <a
              href="/login"
              className="text-health-text hover:text-health-primary flex items-center"
            >
              <User size={24} className="mr-2" />
              Login
            </a>
          </div>

          {/* Burger Menu Icon */}
          <div className="relative md:hidden flex items-center space-x-4">
            <button
              onClick={() => setBurgerOpen(!burgerOpen)}
              className="text-health-text hover:text-health-primary"
            >
              <User size={24} />
            </button>
            {burgerOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded shadow-lg">
                <a
                  href="/login"
                  className="flex items-center px-4 py-2 text-health-text hover:bg-gray-100"
                >
                  <User size={16} className="mr-2" /> Login
                </a>
                <a
                  href="#"
                  className="flex items-center px-4 py-2 text-health-text hover:bg-gray-100"
                >
                  <Settings size={16} className="mr-2" /> Pengaturan
                </a>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-health-text hover:text-health-primary"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#" className="block px-3 py-2 text-health-text hover:text-health-primary">Home</a>
              <a href="#" className="block px-3 py-2 text-health-text hover:text-health-primary">Fitur</a>
              <a href="#" className="block px-3 py-2 text-health-text hover:text-health-primary">Artikel</a>
              <a href="#" className="block px-3 py-2 text-health-text hover:text-health-primary">Pusat Bantuan</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
