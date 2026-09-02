import React from 'react';

interface BrandLogoProps {
  className?: string;
  variant?: 'full' | 'symbol' | 'horizontal' | 'white' | 'dark-bg';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  alt?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  variant = 'full',
  size = 'md',
  alt = 'Cajuí - Castanhas & Amendoins'
}) => {
  const sizeMap = {
    xs: 'h-10',
    sm: 'h-14',
    md: 'h-20 sm:h-24',
    lg: 'h-28 sm:h-32',
    xl: 'h-40 sm:h-44',
    '2xl': 'h-52 sm:h-60'
  };

  const isDarkBg = variant === 'white' || variant === 'dark-bg';
  const logoSrc = isDarkBg ? '/cajui-logo-white-outline.png' : '/cajui-logo.png';
  const currentHeight = sizeMap[size] || 'h-14';

  return (
    <div className={`inline-flex items-center justify-center shrink-0 select-none ${className}`}>
      <img
        src={logoSrc}
        alt={alt}
        className={`${currentHeight} w-auto object-contain block drop-shadow-sm hover:brightness-105 transition-all duration-300`}
        loading="eager"
      />
    </div>
  );
};
