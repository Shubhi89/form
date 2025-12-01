import React from 'react';

export interface Product {
  id: string;
  name: string;
  image: string;
  rating: number;
  tags: string[];
}

export interface Testimonial {
  id: string;
  author: string;
  productName: string;
  productImage: string;
  content: string;
  rating: number;
}

export interface FeatureSectionData {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  reverse?: boolean;
}

export interface TrustBadge {
  image: string;
  label: string;
}

export interface NutritionCategory {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
}
