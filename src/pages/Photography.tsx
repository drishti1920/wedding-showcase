import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { couples } from '../data/couples';

const Photography = () => {
  useEffect(() => {
    // Load the fonts
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&family=Montserrat:wght@300;400;500&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    return () => {
      if (link.parentNode) {
        document.head.removeChild(link);
      }
    };
  }, []);

  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 
          className="text-4xl md:text-5xl text-gray-900 mb-4" 
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          Our Photography
        </h1>
        <p 
          className="text-lg text-gray-600 max-w-2xl mx-auto"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          Timeless moments captured with elegance and emotion
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
        {couples.map((couple) => (
          <div 
            key={couple.id} 
            className="group overflow-hidden flex flex-col bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <div className="overflow-hidden h-[400px]">
              <img
                src={couple.portrait}
                alt={`${couple.name} wedding portrait`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 
                className="text-2xl text-gray-900 mb-2"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                {couple.name}
              </h3>
              <p 
                className="text-gray-600 mb-2 line-clamp-2"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {couple.description}
              </p>
              <div className="flex items-center mt-1 mb-4">
                <span 
                  className="text-sm text-gray-500"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {couple.destination}
                </span>
              </div>
              <div className="mt-auto">
                <Link 
                  to={`/photography/${couple.id}`} 
                  className="inline-block text-sm uppercase tracking-wide border-b border-gray-400 pb-0.5 hover:border-gray-800 transition-colors"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  See More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Photography;
