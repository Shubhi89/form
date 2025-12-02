import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NutritionCategories from "./components/NutritionCategories";
import BrandBannerPage from "./components/BrandBannerPage";
import CharityPage from "./components/CharityPage";
import TestimonialPage from "./components/TestimonialPage";
import BestSellerPage from "./components/BestSellerPage";
import FeaturesPage from "./components/FeaturesPage";

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Navbar />
      <Hero />
      <NutritionCategories />
      <BrandBannerPage />
      <FeaturesPage/>
      <BestSellerPage />
      <CharityPage/>
      <TestimonialPage />
      <Footer />
    </div>
  );
}