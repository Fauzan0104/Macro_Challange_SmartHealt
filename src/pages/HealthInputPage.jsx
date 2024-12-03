import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const HealthInputPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    height: "",
    weight: "",
    bloodPressure: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => {
      const newData = { ...prev, [name]: value };
      // Store in localStorage for persistence
      localStorage.setItem('healthData', JSON.stringify({
        ...newData,
        weightStatus: calculateWeightStatus(newData.weight),
        heightStatus: calculateHeightStatus(newData.height),
        bloodPressureStatus: calculateBPStatus(newData.bloodPressure)
      }));
      return newData;
    });
  };

  const calculateWeightStatus = (weight) => {
    const w = Number(weight);
    if (!w) return "Belum diisi";
    if (w < 50) return "Di bawah ideal";
    if (w > 70) return "Di atas ideal";
    return "Ideal";
  };

  const calculateHeightStatus = (height) => {
    const h = Number(height);
    if (!h) return "Belum diisi";
    if (h < 150) return "Di bawah rata-rata";
    if (h > 180) return "Di atas rata-rata";
    return "Normal";
  };

  const calculateBPStatus = (bp) => {
    if (!bp) return "Belum diisi";
    const [systolic, diastolic] = bp.split('-').map(Number);
    if (!systolic || !diastolic) return "Format tidak valid";
    if (systolic < 120 && diastolic < 80) return "Normal";
    if (systolic < 130 && diastolic < 85) return "Pre-hipertensi";
    return "Hipertensi";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Data kesehatan berhasil disimpan!");
    navigate("/health-monitor");
  };

  const handleCancel = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-2xl mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-primary hover:text-primary/90 mb-6"
        >
          <ChevronLeft className="h-5 w-5" />
          <span>Kembali</span>
        </button>

        <h1 className="text-3xl font-bold text-[#0E6245] mb-8">Input Data</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div>
              <label htmlFor="height" className="block text-sm font-medium mb-2">
                Tinggi badan
              </label>
              <Input
                id="height"
                name="height"
                type="number"
                placeholder="Masukkan tinggi badan (cm)"
                value={formData.height}
                onChange={handleChange}
                required
                className="w-full"
              />
            </div>

            <div>
              <label htmlFor="weight" className="block text-sm font-medium mb-2">
                Berat badan
              </label>
              <Input
                id="weight"
                name="weight"
                type="number"
                placeholder="Masukkan berat badan (kg)"
                value={formData.weight}
                onChange={handleChange}
                required
                className="w-full"
              />
            </div>

            <div>
              <label htmlFor="bloodPressure" className="block text-sm font-medium mb-2">
                Tekanan darah
              </label>
              <Input
                id="bloodPressure"
                name="bloodPressure"
                type="text"
                placeholder="Masukkan tekanan darah (contoh: 120-80)"
                value={formData.bloodPressure}
                onChange={handleChange}
                required
                className="w-full"
              />
            </div>
          </div>

          <div className="flex flex-col space-y-3">
            <Button type="submit" className="w-full bg-[#0E6245] hover:bg-[#0E6245]/90">
              Simpan
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={handleCancel}
              className="w-full"
            >
              Batal
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default HealthInputPage;