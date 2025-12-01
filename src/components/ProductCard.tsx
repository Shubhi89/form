import React from 'react';
import type { Product } from '../types/index';
import Button from '../components/Button';
import StarRating from '../components/StarRating';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white p-4 rounded-xl hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center group border border-gray-100">
      <div className="relative w-full aspect-square mb-6 overflow-hidden rounded-lg bg-gray-50">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <h3 className="text-lg font-bold text-gray-900 mb-2">{product.name}</h3>
      <div className="mb-4">
        <StarRating rating={product.rating} />
      </div>
      <Button className='rounded-none' variant="outline" fullWidth>Shop Now</Button>
    </div>
  );
};

export default ProductCard;
