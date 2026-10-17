import React, { useState, useEffect } from 'react';
import { useT } from '../router';

export default function ImageCarousel({ images, overlayTexts, interval = 4000 }) {
  const t = useT();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <>
      {images.map((img, index) => (
        <img
          key={img}
          src={img}
          alt={index === 0 ? t('Seniors supported by The Golden Years Foundation in Miami-Dade', 'Adultos mayores apoyados por The Golden Years Foundation en Miami-Dade') : ''}
          width="1600"
          height="900"
          decoding="async"
          loading={index === 0 ? 'eager' : 'lazy'}
          fetchPriority={index === 0 ? 'high' : 'low'}
          className={`absolute inset-0 w-full h-full object-cover transform transition-all duration-1000 ease-in-out ${index === currentIndex ? 'opacity-80 group-hover:opacity-100 group-hover:scale-105 z-0' : 'opacity-0 scale-100 -z-10'
            }`}
        />
      ))}
      {overlayTexts && overlayTexts[currentIndex] && (
        <div className="absolute top-6 right-6 bg-rose-600/90 backdrop-blur text-white px-5 py-2 rounded-2xl font-bold text-sm sm:text-base shadow-xl z-20 transform rotate-2 border-2 border-rose-400 uppercase tracking-widest pointer-events-none transition-all duration-500">
          {overlayTexts[currentIndex]}
        </div>
      )}
    </>
  );
}
