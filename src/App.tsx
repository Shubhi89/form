import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NutritionCategories from "./components/NutritionCategories";
import SectionTitle from "./components/SectionTitle";
import ProductCard from "./components/ProductCard";
import FeatureRow from "./components/FeatureRow";
import TestimonialCard from "./components/TestimonialCard";
import {
  PRODUCTS_DATA,
  TESTIMONIALS_DATA,
  FEATURES_DATA,
  TRUST_BADGES,
} from "./data/constant";
import { Heart, Activity, Leaf, ShieldCheck } from "lucide-react";
import brandbg from "./assets/brandbg.jpg";
import charitybg from "./assets/charitybg.jpg";
import america from "./assets/american.png";
import pain from "./assets/pain.png";
import diabetes from "./assets/diabetes.png";
import tinnitus from "./assets/tinnitus.png";
import prostate from "./assets/prostate.png";
import Button from "./components/Button";
import footer from './assets/footer.png';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Navbar />

      {/* --- NEW SECTIONS --- */}
      <Hero />
      <NutritionCategories />
      {/* -------------------- */}

      {/* --- Best Sellers Section --- */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-gray-100 whitespace-nowrap">
        <SectionTitle
          title="Our Best Sellers"
          subtitle="Formulated with science-backed all-natural ingredients, our unique supplements support holistic health, healing & wellness."
          center={false}
        />

        <div className="flex flex-wrap gap-4 mb-12 border-l-2 border-black pl-4">
          {["Results-Driven", "All-Natural", "Non-GMO", "Cruelty-Free"].map(
            (tag, idx) => (
              <span
                key={idx}
                className={`font-semibold text-sm sm:text-base 'text-black'`}
              >
                {tag} {idx !== 3 && <span className="mx-2 text-black">|</span>}
              </span>
            )
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {PRODUCTS_DATA.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* --- Brand Trust Banner --- */}
      <section
        className="relative py-16 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${brandbg})` }}
      >
        {/* Optional: Add an overlay so the text pops */}
        <div className="absolute inset-0"></div>

        {/* Content (add 'relative' so it sits on top of the overlay) */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-2">
            A Brand That You Can Trust
          </h2>
          <p className=" mb-12">
            Our results-driven supplements are made with premium & safe
            ingredients
          </p>

          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {TRUST_BADGES.map((badge, idx) => (
              <div key={idx} className="flex flex-col items-center gap-1">
                <div className="text-blue-500">
                  <img src={badge.image} alt={badge.label} className="w-16 h-16" />
                </div>

                <span className="text-blue-500 font-medium text-sm">
                  {badge.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Features Sections --- */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black">Health Care Desk</h2>
          <h3 className="text-4xl font-bold text-black mb-4">
            The Future Of Smart Health
          </h3>
          <p className="text-black max-w-3xl mx-auto">
            At Health Care Desk, we are committed to producing supplements that harness the power of all-natural superfoods. Our products help support the body's natural processes, improving our customers' quality of life.
          </p>
        </div>

        {FEATURES_DATA.map((feature, idx) => (
          <FeatureRow key={idx} data={feature} />
        ))}
      </section>

      {/* --- Charity Section --- */}
      <section className="relative py-16 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${charitybg})` }}>
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-3xl font-bold mb-1 text-center text-white">
            Our Charitable Initiatives
          </h2>
          <h3 className="text-3xl md:text-3xl font-bold mb-6 opacity-90 text-center text-white">
            Health Care Desk Gives Back
          </h3>
          <p className="mb-14 max-w-2xl mx-auto text-blue-50 text-center">
            At Health Care Desk, a portion of our profits are committed to supporting charities and global health research initiatives.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-8 opacity-80 grayscale hover:grayscale-0 transition-all duration-500">
            <img src={prostate}/>
            <img src={tinnitus}/>
            <img src={pain}/>
            <img src={diabetes}/>
            <img src={america}/>
          </div>
        </div>
      </section>

      {/* --- Testimonials --- */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Verified Customer Testimonials" center />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </section>

      <img src={footer} alt="Footer" className='h-32 w-32'/>
            <Button variant="outline" className='rounded-none'>Learn More</Button>

      <Footer />
    </div>
  );
}
