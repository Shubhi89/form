import React from 'react';
import type { Testimonial } from '../types/index';
import StarRating from '../components/StarRating';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="bg-[#EBF7FA] p-6 rounded-lg relative flex flex-col h-full">
      <div className="flex items-center gap-4 mb-4">
        <img 
          src={testimonial.productImage} 
          alt={testimonial.productName} 
          className="w-16 h-16 rounded object-cover shadow-sm bg-white"
        />
        <div>
          <h4 className="font-bold text-gray-900 mb-3">{testimonial.productName}</h4>
          <StarRating rating={testimonial.rating} />
        </div>
      </div>
      <p className="text-black mb-6 grow leading-relaxed">{testimonial.content}</p>
      <div className="mt-auto">
        <p className="font-medium text-gray-900">- {testimonial.author}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;