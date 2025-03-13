import React from 'react';

const Header = () => {
  return (
    <header className="relative text-white text-center overflow-hidden" style={{ height: '80vh' }}>
      
      {/* Container for images */}
      <div className="flex w-full h-full">
        {/* First Image */}
        <div className="w-1/3">
          <img
            src="img/imge.JPG" // Update with the correct path
            alt="First Image"
            className="w-full h-full object-cover shadow-lg"
          />
        </div>
        
        {/* Second Image */}
        <div className="w-1/3">
          <img
            src="img/image2.jpeg" // Update with the correct path
            alt="Second Image"
            className="w-full h-full object-cover shadow-lg"
          />
        </div>

        {/* Third Image */}
        <div className="w-1/3">
          <img
            src="img/image1.jpeg" // Update with the correct path
            alt="Third Image"
            className="w-full h-full object-cover shadow-lg"
          />
        </div>
      </div>

      {/* Header Text */}
      <div className="absolute inset-0 flex items-center justify-center z-10 px-4 py-10">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Grupo de Teatro Nambu</h1>
          <p className="text-xl">Conectando arte e cultura com cada apresentação.</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
