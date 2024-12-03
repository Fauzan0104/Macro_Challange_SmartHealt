import { useState, useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const SleepTrackerPage = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isSleeping, setIsSleeping] = useState(false);
  const [sleepScore, setSleepScore] = useState(null);
  const [sleepStartTime, setSleepStartTime] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString('id-ID', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    });
  };

  const handleSleepToggle = () => {
    if (!isSleeping) {
      setSleepStartTime(new Date());
      setIsSleeping(true);
    } else {
      // Calculate sleep duration and score when waking up
      const endTime = new Date();
      const duration = (endTime - sleepStartTime) / (1000 * 60 * 60); // in hours
      const score = Math.min(Math.round((duration / 8) * 100), 100); // Simple scoring based on 8 hours ideal sleep
      setSleepScore({
        score,
        date: endTime,
        duration: `${Math.floor(duration)}h${Math.round((duration % 1) * 60)}min`,
        startTime: formatTime(sleepStartTime),
        endTime: formatTime(endTime)
      });
      setIsSleeping(false);
    }
  };

  const getGreeting = () => {
    const hour = currentTime.getHours();
    if (hour >= 18 || hour < 4) return "Selamat Malam";
    if (hour < 11) return "Selamat Pagi";
    if (hour < 15) return "Selamat Siang";
    return "Selamat Sore";
  };

  return (
    <div className="min-h-screen bg-white p-4">
      <Link to="/" className="inline-flex items-center text-primary hover:text-primary/90 mb-8">
        <ArrowLeft className="h-6 w-6 mr-2" />
        Kembali
      </Link>

      {sleepScore ? (
        <div className="max-w-md mx-auto space-y-6">
          <div className="text-center">
            <h1 className="text-8xl font-bold text-primary mb-2">{sleepScore.score}</h1>
            <h2 className="text-2xl font-semibold text-primary">Skore Tidur</h2>
            <p className="text-gray-500">{sleepScore.date.toLocaleDateString('id-ID')}</p>
          </div>

          <div className="flex justify-center space-x-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg
                key={star}
                className={`w-8 h-8 ${star <= Math.round(sleepScore.score / 20) ? 'text-primary' : 'text-gray-300'}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>

          <Card className="p-6 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Waktu tidur</span>
              <span className="font-semibold">{sleepScore.startTime}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Waktu bangun</span>
              <span className="font-semibold">{sleepScore.endTime}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Durasi Tidur</span>
              <span className="font-semibold">{sleepScore.duration}</span>
            </div>
          </Card>

          <Button 
            className="w-full"
            onClick={() => setSleepScore(null)}
          >
            Mulai Sesi Baru
          </Button>
        </div>
      ) : (
        <div className="max-w-md mx-auto text-center space-y-8">
          <h1 className="text-3xl font-semibold text-primary mb-2">
            {getGreeting()}
          </h1>
          <div className="text-7xl font-bold text-primary mb-8">
            {formatTime(currentTime)}
          </div>

          <div className="relative w-64 h-64 mx-auto mb-8">
            <div className="w-full h-full rounded-full border-4 border-primary relative">
              <div className="absolute inset-0 rounded-full overflow-hidden">
                <div 
                  className="w-1/2 h-full bg-secondary absolute right-0"
                  style={{ transform: 'rotate(45deg)' }}
                />
              </div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-secondary/50 rounded-full px-6 py-2 inline-block mb-8">
            <span className="text-primary font-medium">
              {isSleeping ? "12:00" : "04:00"}
            </span>
          </div>

          <Button 
            className="w-full bg-primary hover:bg-primary/90 text-white"
            onClick={handleSleepToggle}
          >
            {isSleeping ? "Bangun" : "Mulai Tidur"}
          </Button>

          {isSleeping && (
            <p className="text-primary mt-4">Tekan Jika Sudah Bangun</p>
          )}
        </div>
      )}
    </div>
  );
};

export default SleepTrackerPage;