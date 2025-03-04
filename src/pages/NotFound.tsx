import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  useEffect(() => {
    document.title = "Page Not Found | House on the Clouds";
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen p-5 bg-[#f5f0e8] font-sans">
      <div className="max-w-xl text-center p-6 md:p-10">
        <h1 className="text-7xl md:text-8xl lg:text-9xl font-extrabold m-0 leading-none text-black tracking-tighter animate-[pulse_2s_infinite_ease-in-out]">
          404
        </h1>
        <div className="w-14 h-0.5 bg-black mx-auto my-5"></div>
        <h2 className="text-2xl md:text-3xl font-semibold mb-5 text-black">
          Page Not Found
        </h2>
        <p className="text-base md:text-lg leading-relaxed mb-10 text-gray-800">
          The page you are looking for might have been removed, had its name changed,
          or is temporarily unavailable.
        </p>
        <Link 
          to="/" 
          className="inline-block px-8 py-3.5 bg-black text-white no-underline text-base font-medium border-2 border-black transition-all duration-300 ease-in-out hover:bg-transparent hover:text-black"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;