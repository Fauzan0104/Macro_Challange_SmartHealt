import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import HealthDataCard from "@/components/HealthDataCard";
import HealthProgressChart from "@/components/HealthProgressChart";

const HealthMonitorPage = () => {
  const navigate = useNavigate();
  const [healthData, setHealthData] = useState(null);

  useEffect(() => {
    const storedData = localStorage.getItem('healthData');
    if (storedData) {
      setHealthData(JSON.parse(storedData));
    }
  }, []);

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center text-primary hover:text-primary/90"
          >
            <ChevronLeft className="h-5 w-5" />
            <span>Kembali</span>
          </button>
          <h1 className="text-3xl font-bold text-[#0E6245]">Monitor Kesehatan</h1>
          <div className="w-24" />
        </div>

        <div className="grid gap-8">
          {healthData && <HealthDataCard data={healthData} />}
          <HealthProgressChart />
          
          <Button
            onClick={() => navigate("/health-input")}
            className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-[#0E6245] hover:bg-[#0E6245]/90"
          >
            <Plus className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HealthMonitorPage;