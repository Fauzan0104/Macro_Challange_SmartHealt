import Hero from "../components/Hero.jsx";
import HealthTipsCarousel from "../components/MealCarousel.jsx";
import PremiumFeatures from "../components/PremiumFeatures.jsx";
import HealthArticles from "../components/HealthArticles.jsx";
import ContactSection from "../components/ContactSection.jsx";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <HealthTipsCarousel />
      <PremiumFeatures />
      <HealthArticles />
      <ContactSection />
    </div>
  );
};

export default Index;