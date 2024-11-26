import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

const SubscriptionPage = () => {
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

      <div className="max-w-3xl mx-auto space-y-8">
        <div className="border rounded-lg p-6 space-y-6">
          <div className="flex justify-between items-center border-b pb-4">
            <h2 className="text-xl font-semibold text-primary">Dimulai pada hari ini</h2>
            <span className="text-primary font-medium">Uji coba gratis Selama 7 hari</span>
          </div>

          <div className="flex justify-between items-center border-b pb-4">
            <h2 className="text-xl font-semibold text-primary">Dimulai pada 14 november 2024</h2>
            <div className="text-right">
              <div className="text-primary font-medium">Rp 75.000/bulan</div>
              <div className="text-sm text-gray-600">+ Pajak</div>
            </div>
          </div>

          <ul className="space-y-4 text-gray-700">
            <li>• Bisa batalkan kapan saja pada langganan di website Healthy Lifestyle</li>
            <li>• Tidak akan di kenai biaya jika membatalkan sebelum 14 November 2024</li>
            <li>• Kami akan mengirim pengingat 3 hari sebelum langganan berakhir</li>
          </ul>

          <p className="text-sm text-gray-600">
            Biaya bank dan administrasi serta pajak di tanggung oleh pembeli. Dengan mengetuk tombol berlangganan anda setuju untuk mengaktifkan fitur premium untuk website Healthy Lifestyle.
          </p>

          <button
            onClick={() => navigate("/payment")}
            className="w-full bg-primary text-white py-3 rounded-lg hover:bg-primary/90 transition-colors"
          >
            Langganan
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPage;