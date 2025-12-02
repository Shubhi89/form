import React from 'react'
import SectionTitle from './SectionTitle'
import { PRODUCTS_DATA } from '../data/constant'
import ProductCard from './ProductCard'

const BestSellerPage = () => {
  return (
    <>
    {/* --- Best Sellers Section --- */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-gray-100">
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
    </>
  )
}

export default BestSellerPage