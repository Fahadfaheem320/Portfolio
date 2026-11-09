import React, { useState } from 'react';

export const Avatar = ({ src, alt, className }) => {
  const [imageError, setImageError] = useState(false);

  if (imageError || !src) {
    return (
      <div 
        className={`${className} bg-slate-300 flex items-center justify-center overflow-hidden`}
        style={{
          background: 'linear-gradient(135deg, #a0aec0 0%, #718096 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full text-white"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M50 50a20 20 0 1 0 0-40 20 20 0 0 0 0 40zm0 10c-22.1 0-40 17.9-40 40h80c0-22.1-17.9-40-40-40z" />
        </svg>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setImageError(true)}
      crossOrigin="anonymous"
    />
  );
};

