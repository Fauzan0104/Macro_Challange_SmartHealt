import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index.jsx";
import ArticlePage from "./pages/ArticlePage.jsx";
import ExercisePage from "./pages/Exercisepage.jsx";
import SubscriptionPage from "./pages/SubscriptionPage.jsx";
import PaymentPage from "./pages/PaymentPage.jsx";
import LoginPage from "./pages/Login.jsx";
import RegisterPage from "./pages/Register.jsx";
import Navbar from "./components/Navbar.jsx";
import React from "react"
import Home from "./pages/Home"
import Sarapan from "./pages/Sarapan"
import Makansiang from "./pages/Makansiang"
import Makanmalam from "./pages/Makanmalam"
import Sandwichtelur from "./pages/sandwichtelur"
import Potatowedges from "./pages/Potatowedges"
import Saladsayur from "./pages/Saladsayur"
import Tumisbrokoli from "./pages/Tumisbrokoli"
import Ayamteriyaki from "./pages/Ayamteriyaki"
import Ayamgoreng from "./pages/Ayamgoreng"
import Supkrim from "./pages/Supkrim"
import Chickenkatsu from "./pages/Chickenkatsu"
import Bihunkuah from "./pages/Bihunkuah"
import CatatanSehat from "./pages/Catatansehat"
import Dashboard from "./pages/Dashboard"
import SleepTracker from "./pages/SleepTracker.jsx";
import HealthInputPage from "./pages/HealthInputPage.jsx";
import HealthMonitorPage from "./pages/HealthMonitorPage.jsx";



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
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path='/home' element={<Home/>}/>
          <Route path='/sarapan' element={<Sarapan/>}/>
          <Route path='/makansiang' element={<Makansiang/>}/>
          <Route path='/makanmalam' element={<Makanmalam/>}/>
          <Route path='/sandwichtelur' element={<Sandwichtelur/>}/>
          <Route path='/potatowedges' element={<Potatowedges/>}/>
          <Route path='/saladsayur' element={<Saladsayur/>}/>
          <Route path='/tumisbrokoli' element={<Tumisbrokoli/>}/>
          <Route path='/ayamteriyaki' element={<Ayamteriyaki/>}/>
          <Route path='/ayamgoreng' element={<Ayamgoreng/>}/>
          <Route path='/supkrim' element={<Supkrim/>}/>
          <Route path='/chickenkatsu' element={<Chickenkatsu/>}/>
          <Route path='/bihunkuah' element={<Bihunkuah/>}/>
          <Route path='/catatansehat' element={<CatatanSehat/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path="/sleep-tracker" element={<SleepTracker />} />
          <Route path="/health-input" element={<HealthInputPage />} />
          <Route path="/health-monitor" element={<HealthMonitorPage />} />
    
       
      
         
          </Routes>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
