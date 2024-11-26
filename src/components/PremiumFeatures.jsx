import { useNavigate } from "react-router-dom";

const PremiumFeatures = () => {
  const navigate = useNavigate();

  return (
    <div className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/3 mb-8 md:mb-0">
            <img
              src="/gambar/coverpay.png"
              alt="Premium Features"
              className="w-full max-w-sm mx-auto"
            />
          </div>
          
          <div className="md:w-2/3 md:pl-12">
            <h2 className="text-3xl font-bold mb-6">
              Beli <span className="text-primary">Premium</span> Dapat Akses Fitur Eksklusif
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="font-semibold mb-2">Fitur Produk</h3>
                <p className="text-gray-600">Pelacak pola tidur</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="font-semibold mb-2">Fitur Produk</h3>
                <p className="text-gray-600">Pelacak langkah</p>
              </div>
            </div>
            
            <div className="mt-8">
              <button 
                onClick={() => navigate("/subscription")}
                className="bg-primary text-white px-8 py-3 rounded-full hover:bg-primary/90 transition-colors"
              >
                Segera Dapat
              </button>
              <p className="mt-4 text-gray-600">
                Hanya <span className="font-semibold">Rp 75.000</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PremiumFeatures;