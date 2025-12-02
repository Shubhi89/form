import React from 'react'
import charitybg from '../assets/charitybg.jpg'
import prostate from '../assets/prostate.png'
import tinnitus from '../assets/tinnitus.png'
import pain from '../assets/pain.png'
import diabetes from '../assets/diabetes.png'
import america from '../assets/american.png'

const CharityPage = () => {
  return (
    <>
       <section
        className="relative py-16 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${charitybg})` }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-3xl font-bold mb-1 text-center text-white">
            Our Charitable Initiatives
          </h2>
          <h3 className="text-3xl md:text-3xl font-bold mb-6 opacity-90 text-center text-white">
            Health Care Desk Gives Back
          </h3>
          <p className="mb-14 max-w-2xl mx-auto text-blue-50 text-center">
            At Health Care Desk, a portion of our profits are committed to
            supporting charities and global health research initiatives.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-8 opacity-80 grayscale hover:grayscale-0 transition-all duration-500">
             {/* FIX: Added sizing classes (h-16 w-auto) to prevent large images from breaking layout */}
            <img src={prostate} className="h-16 w-auto object-contain" alt="Prostate Charity"/>
            <img src={tinnitus} className="h-16 w-auto object-contain" alt="Tinnitus Charity"/>
            <img src={pain} className="h-16 w-auto object-contain" alt="Pain Charity"/>
            <img src={diabetes} className="h-16 w-auto object-contain" alt="Diabetes Charity"/>
            <img src={america} className="h-16 w-auto object-contain" alt="American Charity"/>
          </div>
        </div>
      </section>
    </>
  )
}

export default CharityPage