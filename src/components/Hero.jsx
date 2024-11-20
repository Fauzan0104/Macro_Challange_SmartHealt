const Hero = () => {
  return (
    <div
      className="pt-40 pb-32 bg-health-accent"
      style={{
        backgroundImage: "url('/gambar/hero.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-4 max-w-screen-xl">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-2/3 mb-12 md:mb-0">
            <h1 className="text-5xl md:text-7xl font-bold text-health-text mb-6">
              Hidup sehat, <span className="text-health-primary">bahagia</span> setiap hari!
            </h1>
            <p className="text-gray-600 mb-8 text-xl md:text-2xl leading-relaxed">
              Apakah Anda saat ini memiliki kendala yang telah berlangsung dan terganggu? Pola hidup sehat bukan hanya tentang diet, tetapi tentang menciptakan keseimbangan dalam hidup Anda.
            </p>
            <button className="bg-health-primary text-white px-12 py-4 text-lg rounded-full hover:bg-health-primary/90 transition-colors">
              Tentang Kami
            </button>
          </div>
          <div className="md:w-2/3">
            <img
              src="/gambar/animation.png"
              alt="Ilustrasi Hidup Sehat"
              className="w-full max-w-2xl mx-auto animate-fade-in"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
