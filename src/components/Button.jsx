// GloriaFoodButton.js
import { useEffect } from 'react';

const Button = () => {
  {/*useEffect(() => {
    const scriptId = 'gloriafood-script';

    // Load script if not already loaded
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.src = 'https://www.fbgcdn.com/embedder/js/ewm2.js';
      script.async = true;
      script.defer = true;
      script.id = scriptId;

      script.onload = () => {
        // Initialize the button after the script loads
        if (window.glfButtonInit) {
          window.glfButtonInit();
        }
      };

      document.body.appendChild(script);
    } else {
      // Script already loaded — re-init the button
      if (window.glfButtonInit) {
        window.glfButtonInit();
      }
    }
  }, []);*/}
  useEffect(() => {
  const scriptId = 'gloriafood-script';

  function initGloriaFood() {
    if (window.glfButtonInit) {
      window.glfButtonInit();
    } else {
      // Retry in a bit (in case script isn't ready yet)
      setTimeout(initGloriaFood, 500);
    }
  }

  if (!document.getElementById(scriptId)) {
    const script = document.createElement('script');
    script.src = 'https://www.fbgcdn.com/embedder/js/ewm2.js';
    script.async = true;
    script.defer = true;
    script.id = scriptId;

    script.onload = initGloriaFood;

    document.body.appendChild(script);
  } else {
    initGloriaFood();
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

export default Button;
