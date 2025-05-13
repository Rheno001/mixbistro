import React, { useEffect, useState } from 'react';
import noise from '../assets/noise.png';

const GlobalFoodEmbed = () => {
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.fbgcdn.com/embedder/js/ewm2.js';
    script.defer = true;
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    if (!clicked) return;

    const interval = setInterval(() => {
      const popup = document.querySelector('.glf-popup, .glf-widget');
      if (popup) {
        popup.style.zIndex = '10000000';
        clearInterval(interval);
      }
    }, 500);

    setTimeout(() => clearInterval(interval), 10000);
  }, [clicked]);

  return (
    <div className="flex items-center justify-center">
      <span
        className="relative z-[1000] hover:cursor-pointer bg-accent text-primary rounded-[5px] px-[15px] lg:px-[62px] lg:py-[20px] py-[5px] lg:text-[20px] font-[600] overflow-hidden"
        data-glf-cuid="2d614629-134f-4c15-a616-f50c43491244"
        data-glf-ruid="df2957b5-2ece-4cc5-ba4c-b7421f04893a"
        onClick={() => setClicked(true)}
      >
        <span
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage: `url(${noise})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'repeat',
            mixBlendMode: 'overlay',
          }}
        />
        <span className="relative z-10">Order Now</span>
      </span>
    </div>
  );
};

export default GlobalFoodEmbed;
