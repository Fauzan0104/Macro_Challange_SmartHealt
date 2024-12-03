const HealthDataCard = ({ data }) => {
  return (
    <div className="bg-gray-50 rounded-lg p-6">
      <h2 className="text-2xl font-semibold text-[#0E6245] mb-6">Data Kesehatan</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <h3 className="text-lg font-medium text-[#0E6245]">Berat badan</h3>
          <p className="text-4xl font-bold mt-2">{data.weight || '-'}</p>
          <p className="text-sm text-gray-600 mt-1">{data.weightStatus}</p>
        </div>
        
        <div>
          <h3 className="text-lg font-medium text-[#0E6245]">Tinggi badan</h3>
          <p className="text-4xl font-bold mt-2">{data.height || '-'}</p>
          <p className="text-sm text-gray-600 mt-1">{data.heightStatus}</p>
        </div>
        
        <div>
          <h3 className="text-lg font-medium text-[#0E6245]">Tekanan darah</h3>
          <p className="text-4xl font-bold mt-2">{data.bloodPressure || '-'} MMHG</p>
          <p className="text-sm text-gray-600 mt-1">{data.bloodPressureStatus}</p>
        </div>
      </div>

      <div className="mt-8 p-6 bg-[#0E6245] text-white rounded-lg">
        <p className="mb-4">
          {data.weightStatus === "Ideal" 
            ? "Selamat! Berat badan kamu sudah ideal. Tetap jaga pola makan dan olahraga ya!"
            : "Ternyata berat badan kamu belum mencapai kondisi ideal nih :( kamu bisa check ke rekomendasi resep menu makanan untuk mulai menjaga kalori atau diet kalori yaa!"}
        </p>
        <p>
          Kami menyediakan rekomendasi resep menu makanan dengan kisaran 50 hingga 200 kalori, 
          yang dapat mendukung program diet kalori kamu. Menu ini dirancang untuk memberi pilihan sehat 
          yang rendah kalori namun tetap lezat dan bergizi, sehingga kamu dapat mencapai tujuan kesehatan 
          dengan cara yang menyenangkan dan terkontrol.
        </p>
      </div>
    </div>
  );
};

export default HealthDataCard;