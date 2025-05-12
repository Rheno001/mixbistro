import React, { useEffect, useState } from 'react';

const GlobalFoodEmbed = () => {
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    // Load GloriaFood script
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

    // Try to find the modal/pop-up and raise its z-index
    const interval = setInterval(() => {
      const popup = document.querySelector('.glf-popup, .glf-widget'); // example classes, may vary
      if (popup) {
        popup.style.zIndex = '10000000';
        clearInterval(interval);
      }
    }, 500);

    // Clear interval after 10 seconds just in case
    setTimeout(() => clearInterval(interval), 10000);
  }, [clicked]);

  return (
    <div className="flex items-center justify-center">
      {!clicked && (
        <span
          className="glf-button relative w-[200px] z-[10000000] hero bg-accent rounded-[5px] px-[15px] lg:px-[62px] lg:py-[20px] py-[5px] lg:text-[25px] font-[600]"
          data-glf-cuid="2d614629-134f-4c15-a616-f50c43491244"
          data-glf-ruid="df2957b5-2ece-4cc5-ba4c-b7421f04893a"
          onClick={() => setClicked(true)}
        >
          Order Now
        </span>
      )}
    </div>
  );
};

export default GlobalFoodEmbed;
