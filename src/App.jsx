import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index.jsx";
import ArticlePage from "./pages/ArticlePage.jsx";
import ExercisePage from "./pages/Exercisepage.jsx";
import Navbar from "./components/Navbar.jsx";

const queryClient = new QueryClient();
const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.mainContent}>
        <button className={styles.backButton}>← Kembali</button>
        <h1 className={styles.title}>Monitor Kesehatan</h1>
        <div className={styles.infoSection}>
          <InfoBox
            imageSrc="assets/images/input.png"
            altText="Input Data Icon"
            buttonText="Input Data"
            description="Tinggi badan dan berat badan ideal"
            onClick={() => navigate("/input-data")}
          />
          <InfoBox
            imageSrc="assets/images/grafik.png"
            altText="Grafik Perkembangan Icon"
            buttonText="Grafik Perkembangan"
            description="Catatan perkembangan progress Anda"
            onClick={() => navigate("/progress")}
          />
        </div>
      </div>
    </div>
  );
};




const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navbar />
        <div className="pt-16">
          <Routes>

            <Route path="/" element={<Index />} />
            <Route path="/article/:id" element={<ArticlePage />} />
            <Route path="/exercise/:type" element={<ExercisePage />} />

            
          </Routes>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;