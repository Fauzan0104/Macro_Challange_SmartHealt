import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const tips = [
  {
    id: 1,
    title: "Menu Makan Sehat",
    description: "Beragam resep makanan sehat sesuai kebutuhan kalian! Mulai dari sarapan hingga makan malam...",
    image: "public/gambar/frame 9.png",
    path: "/home",
  },
  {
    id: 2,
    title: "Saran Olahraga Rutin",
    description: "Rekomendasi olahraga simple yang bisa kalian lakukan di mana saja. Tetap sehat dengan terus berolahraga..",
    image: "public/gambar/frame 8.png",
    path: "/exercise/jogging",
  },
  {
    id: 3,
    title: "Pola Tidur Sehat",
    description: "Pentingnya tidur berkualitas dan cara mencapai tidur yang nyenyak...",
    image: "public/gambar/frame 4.png",
    path: "/sleep-tracker",
  },
  {
    id: 4,
    title: "Catatan sehat",
    description: "Suka lupa untuk olahraga dan makan makanan sehat? Ayuk atur jadwal kalian agar tidak lupa untuk olahraga dan makan sehat!!",
    image: "public/gambar/frame 7.png",
    path: "/catatansehat",
  },
  {
    id: 5,
    title: "Input data kesehatan",
    description: "Kira - kira berat badan kita dengan tinggi badan kita ideal engga sih? coba check dulu yuk ~",
    image: "public/gambar/frame 6.png",
    path: "/health-input",
  },
  {
    id: 6,
    title: "Grafik perkembangan",
    description: "Biar tidak lupa sama timbangan berat badan kita, coba check grafik perkembangan berat badan. Apakah selama seminggu ini berat badan kita stabil?.",
    image: "public/gambar/frame 5.png",
    path: "/health-monitor",
  },
];

const HealthTipsCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % tips.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + tips.length) % tips.length);
  };

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">
          Apa <span className="text-[#0E6245]">rencana</span> kalian saat ini??
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Rencana kesehatan yang baik adalah kunci untuk mencapai kualitas hidup yang lebih baik dan mencegah berbagai masalah kesehatan di masa depan.
        </p>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {tips.map((tip) => (
                <div key={tip.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-gray-50 rounded-2xl p-8 flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 mb-6 md:mb-0">
                      <h3 className="text-2xl font-bold mb-4 text-[#0E6245]">{tip.title}</h3>
                      <p className="text-gray-600">{tip.description}</p>
                      <button
                        onClick={() => handleNavigate(tip.path)}
                        className="mt-6 px-4 py-2 bg-[#0E6245] text-white rounded-lg hover:bg-[#0E6245]/90"
                      >
                        Klik Disini
                      </button>
                    </div>
                    <div className="md:w-1/2 md:pl-8">
                      <img
                        src={tip.image}
                        alt={tip.title}
                        className="rounded-lg w-full h-64 object-contain"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white p-2 rounded-full shadow-lg hover:bg-gray-50"
          >
            <ChevronLeft className="text-[#0E6245]" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white p-2 rounded-full shadow-lg hover:bg-gray-50"
          >
            <ChevronRight className="text-[#0E6245]" />
          </button>
        </div>

        <div className="flex justify-center mt-6 space-x-2">
          {tips.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentSlide ? "bg-[#0E6245]" : "bg-gray-300"
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HealthTipsCarousel;
