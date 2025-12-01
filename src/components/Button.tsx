import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'white';
  className?: string;
  fullWidth?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  fullWidth = false,
  onClick,
  type = 'button'
}) => {
  const baseStyles = "px-6 py-2.5 rounded-full transition-all duration-300 font-medium text-sm sm:text-base flex items-center justify-center";
  
  const variants = {
    primary: "bg-[#3B82F6] text-white hover:bg-blue-600 border border-transparent shadow-sm",
    outline: "bg-transparent border border-[#3B82F6] text-[#3B82F6] hover:bg-blue-50",
    white: "bg-white text-gray-900 hover:bg-gray-100 border border-transparent",
  };

  return (
    <button 
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
