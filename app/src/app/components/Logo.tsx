import React from 'react';

export const Logo = ({ variant = 'white', className = '' }: { variant?: 'white' | 'red', className?: string }) => {
  return (
    <div className={`flex items-center gap-2 font-bold text-2xl tracking-tighter ${className}`}>
      <div className={`w-8 h-8 rounded-sm flex items-center justify-center ${variant === 'white' ? 'bg-white text-[#E60012]' : 'bg-[#E60012] text-white'}`}>
        <span className="text-xl">t</span>
      </div>
      <span className={variant === 'white' ? 'text-white' : 'text-[#E60012]'}>
        transcosmos <span className="font-light">Vietnam</span>
      </span>
    </div>
  );
};
