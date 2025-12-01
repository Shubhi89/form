import React from 'react';
import type { FeatureSectionData } from '../types/index';
import Button from '../components/Button';

interface FeatureRowProps {
  data: FeatureSectionData;
}

const FeatureRow: React.FC<FeatureRowProps> = ({ data }) => {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-12 py-12">
      <div className={`w-full lg:w-1/2 ${data.reverse ? 'lg:order-2' : 'lg:order-1'}`}>
        <div className="relative rounded-2xl overflow-hidden shadow-xl">
           <img 
            src={data.image} 
            alt={data.title} 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className={`w-full lg:w-1/2 ${data.reverse ? 'lg:order-1' : 'lg:order-2'}`}>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{data.title}</h3>
        <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-6">{data.subtitle}</p>
        <p className="text-gray-600 leading-relaxed mb-8">{data.description}</p>
        <Button variant="outline" className='rounded-none'>Learn More</Button>
      </div>
    </div>
  );
};

export default FeatureRow;
