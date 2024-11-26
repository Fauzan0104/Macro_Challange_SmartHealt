import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index.jsx";
import ArticlePage from "./pages/ArticlePage.jsx";
import ExercisePage from "./pages/ExercisePage.jsx";
import SubscriptionPage from "./pages/SubscriptionPage.jsx";
import PaymentPage from "./pages/PaymentPage.jsx";
import Navbar from "./components/Navbar.jsx";

const queryClient = new QueryClient();

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
            <Route path="/subscription" element={<SubscriptionPage />} />
            <Route path="/payment" element={<PaymentPage />} />
            
          </Routes>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;