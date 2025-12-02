import React from 'react'
import { TRUST_BADGES } from '../data/constant'
import brandbg from '../assets/brandbg.jpg'

const BrandBannerPage = () => {
  return (
    <>
      <section
        className="relative py-16 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${brandbg})` }}
      >
        <div className="absolute inset-0"></div>
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
                  <img
                    src={badge.image}
                    alt={badge.label}
                    className="w-16 h-16"
                  />
                </div>

                <span className="text-blue-500 font-medium text-sm">
                  {badge.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default BrandBannerPage