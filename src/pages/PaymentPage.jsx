import { useNavigate } from "react-router-dom";
import { ChevronLeft, Lock } from "lucide-react";
import { Input } from "@/components/ui/input";

const PaymentPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white p-4">
      <button 
        onClick={() => navigate(-1)}
        className="flex items-center text-primary mb-6"
      >
        <ChevronLeft className="w-5 h-5" />
        <span>Kembali</span>
      </button>

      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-primary mb-8">Pembayaran</h1>
        
        <div className="space-y-6">
          <div>
            <h2 className="text-lg font-medium text-primary mb-4">Metode Pembayaran</h2>
            <div className="flex items-center gap-4 mb-4">
              <div className="border rounded-lg p-3 flex items-center gap-2">
                <Lock className="w-5 h-5" />
                <span>Secure</span>
              </div>
              <img src="/visa.png" alt="Visa" className="h-8" />
              <img src="/mastercard.png" alt="Mastercard" className="h-8" />
              <img src="/paypal.png" alt="PayPal" className="h-8" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-primary font-medium mb-2">Nama Depan</label>
              <Input className="w-full" />
            </div>
            <div>
              <label className="block text-primary font-medium mb-2">Nama Belakang</label>
              <Input className="w-full" />
            </div>
          </div>

          <div>
            <label className="block text-primary font-medium mb-2">Nomer Kartu</label>
            <div className="relative">
              <img  className="absolute left-3 top-1/2 -translate-y-1/2 h-6" />
              <Input className="w-full pl-12" placeholder="******* 788 ***" />
            </div>
          </div>

          <div className="flex justify-between items-center mt-8">
            <div className="text-primary font-medium">Total:</div>
            <div className="text-right">
              <div className="text-2xl font-bold text-primary">Rp 75.000</div>
            </div>
          </div>

          <button className="w-full bg-primary text-white py-3 rounded-lg hover:bg-primary/90 transition-colors">
            Bayar Sekarang
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;