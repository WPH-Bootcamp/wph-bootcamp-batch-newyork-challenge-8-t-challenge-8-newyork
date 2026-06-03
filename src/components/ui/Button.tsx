import React from 'react';

// 1. Definisikan variasi yang tersedia
type ButtonVariant = 'primary' | 'secondary' | 'outline';
type ButtonSize = 'sm' | 'md' | 'lg';

// 2. Hubungkan dengan sifat asli tombol HTML bawaan agar fleksibel
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export const Button = ({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  type = 'button',
  ...props 
}: ButtonProps) => {
  
  const baseStyles = 
    'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-primary disabled:opacity-50 disabled:cursor-not-allowed';

  const variantStyles: Record<ButtonVariant, string> = {
    primary: 'bg-brand-primary text-white hover:bg-[#E05333]',
    secondary: 'bg-gray-800 text-white hover:bg-gray-700',
    outline: 'border border-gray-300 text-gray-700 hover:bg-gray-50',
  };

  const sizeStyles: Record<ButtonSize, string> = {
    sm: 'py-2.5 px-4 text-xs rounded-full',
    md: 'py-3.5 px-6 text-sm rounded-full', 
    lg: 'py-4 px-8 text-base rounded-full',
  };

  // Menggabungkan semua class menjadi satu string utuh
  const combinedClasses = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  return (
    <button
      type={type}
      className={combinedClasses}
      {...props}
    >
      {children}
    </button>
  );
};