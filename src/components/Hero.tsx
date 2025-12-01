import React from 'react';
import Button from '../components/Button';
import doctorImage from '../assets/doctor.png';

const Hero: React.FC = () => {
  return (
    <div className="bg-[#F8F9FA] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center pt-12 md:pt-20 pb-12">
        
        {/* Text Content */}
        <div className="w-full md:w-1/2 mb-10 md:mb-0 z-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight mb-6">
            Health Desk Clinic:<br />
            All Natural Supplements
          </h1>
          <p className="text-lg mb-8 max-w-lg leading-relaxed text-black">
            Health Care Desk is the premier choice for those seeking wellness through wholesome, superfood-enriched formulas that actually work. Our all-natural, organic health supplements are designed to give your body what it needs to thrive!
          </p>
          <Button className="!px-10 !py-4 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Shop Now
          </Button>
        </div>

        {/* Hero Image */}
        <div className="w-full md:w-1/2 relative flex justify-center md:justify-end">
          {/* Background Blob decoration could go here */}
          <img 
            src={doctorImage}
            alt="Doctor" 
            className="relative z-10 max-h-[500px] object-contain drop-shadow-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
