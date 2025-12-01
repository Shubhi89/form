import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  center?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, center = true}) => {
  return (
    <div className={`mb-12 ${center ? 'text-center' : 'text-left'}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">{title}</h2>
      {subtitle && <p className="text-black max-w-2xl">{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;