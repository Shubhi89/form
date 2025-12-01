import React from 'react';
import { NUTRITION_CATEGORIES } from '../data/constant';
import Button from '../components/Button';

const NutritionCategories: React.FC = () => {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Nutrition Solutions</h2>
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-16">for Your Complete Well-Being</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {NUTRITION_CATEGORIES.map((category) => (
            <div key={category.id} className="bg-[#F0F9FA] rounded-xl p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300">
              <div className="bg-blue-100 p-4 rounded-full mb-4 text-blue-600">
                <category.icon size={32} />
              </div>
              <h4 className="font-bold text-lg text-gray-900 mb-2">{category.title}</h4>
              <p className="text-xs text-gray-500 mb-6 flex-grow leading-relaxed">
                {category.description}
              </p>
              <Button className="w-full bg-[linear-gradient(96.14deg,#3A8EF6_-10.84%,#6F3AFA_196.74%)]  hover:bg-blue-700 text-sm">
                Buy now
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NutritionCategories;
