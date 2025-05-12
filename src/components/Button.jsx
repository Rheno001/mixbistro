import { useEffect } from 'react';

const GloriaFoodButton = () => {
  useEffect(() => {
    const scriptId = 'gloriafood-script';

    // Prevent adding the script multiple times
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.src = 'https://www.fbgcdn.com/embedder/js/ewm2.js';
      script.async = true;
      script.defer = true;
      script.id = scriptId;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <span
      className="glf-button"
      data-glf-cuid="2d614629-134f-4c15-a616-f50c43491244"
      data-glf-ruid="df2957b5-2ece-4cc5-ba4c-b7421f04893a"
    >
      See MENU & Order
    </span>
  );
};

export default GloriaFoodButton;
