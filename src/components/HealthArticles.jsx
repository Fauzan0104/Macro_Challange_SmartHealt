import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const articles = [
  {
    id: 1,
    title: "6 Tips Cara Cepat Tidur Nyenyak",
    description: "Ada sejumlah cara agar cepat tidur untuk mengatasi insomnia, salah satunya adalah tidur dan bangun di waktu yang sama, mandi air hangat, hingga menggunakan teknik pernapasan mudah 4-7-8.",
    image: "gambar/artikltidur.png",
  },
  {
    id: 2,
    title: "Manfaat Olahraga Pagi",
    description: "Olahraga di pagi hari memiliki berbagai manfaat untuk kesehatan tubuh dan pikiran.",
    image: "gambar/artikeljoging.png",
  },
  {
    id: 3,
    title: "Manfaat makanan sehat",
    description: "Olahraga di siang hari memiliki berbagai manfaat untuk kesehatan tubuh dan pikiran.",
    image: "/gambar/food.png",
  },
];

const HealthArticles = () => {
  const [currentArticle, setCurrentArticle] = useState(0);
  const navigate = useNavigate();

  const nextArticle = () => {
    setCurrentArticle((prev) => (prev + 1) % articles.length);
  };

  const prevArticle = () => {
    setCurrentArticle((prev) => (prev - 1 + articles.length) % articles.length);
  };

  const handleArticleClick = (id) => {
    navigate(`/article/${id}`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16" id="articles">
      <h2 className="text-3xl font-bold text-center mb-8">
        Artikel <span className="text-primary">Kesehatan</span>
      </h2>
      <p className="text-center text-gray-600 mb-12">
        Temukan informasi terbaru mengenai kesehatan dalam artikel-artikel berikut untuk menjaga kualitas hidup Anda.
      </p>
      <div className="relative">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentArticle * 100}%)` }}
          >
            {articles.map((article) => (
              <div key={article.id} className="w-full flex-shrink-0 px-4">
                <div
                  className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow"
                  onClick={() => handleArticleClick(article.id)}
                >
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
                    <p className="text-gray-600">{article.description}</p>
                    <button className="mt-4 px-4 py-2 bg-primary text-white rounded hover:bg-primary/90">
                      Pelajari Lebih Lanjut
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={prevArticle}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextArticle}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default HealthArticles;
