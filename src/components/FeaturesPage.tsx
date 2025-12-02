import React from 'react'
import { FEATURES_DATA } from '../data/constant'
import FeatureRow from './FeatureRow'

const FeaturesPage = () => {
  return (
    <>
     <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black">Health Care Desk</h2>
          <h3 className="text-4xl font-bold text-black mb-4">
            The Future Of Smart Health
          </h3>
          <p className="text-black max-w-3xl mx-auto">
            At Health Care Desk, we are committed to producing supplements that
            harness the power of all-natural superfoods. Our products help
            support the body's natural processes, improving our customers'
            quality of life.
          </p>
        </div>

        {FEATURES_DATA.map((feature, idx) => (
          <FeatureRow key={idx} data={feature} />
        ))}
      </section>
    </>
  )
}

export default FeaturesPage