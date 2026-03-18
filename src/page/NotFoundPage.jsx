import React from 'react';
import BreadCrump from '../components/BreadCrump';

const NotFoundPage = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 md:px-12 py-16 font-sans">
      <BreadCrump />
      <div className="flex flex-col items-center justify-center text-center space-y-8 mt-20 mb-35">
        <h1 className="text-6xl md:text-8xl font-medium tracking-tight text-black">
          404 Not Found
        </h1>
        
        <p className="text-sm md:text-base text-gray-700">
          Your visited page not found. You may go home page.
        </p>

        <a 
          href="/" 
          className="mt-4 bg-[#db4444] hover:bg-red-600 text-white px-12 py-4 rounded-sm transition-colors font-medium"
        >
          Back to home page
        </a>
      </div>
    </div>
  );
};

export default NotFoundPage;
