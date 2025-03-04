import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { couples } from '../data/couples';
import { ArrowLeft } from 'lucide-react';

const CoupleDetail = () => {
  const { coupleId } = useParams<{ coupleId: string }>();
  const couple = couples.find(c => c.id === coupleId);

  useEffect(() => {
    // Load the fonts
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&family=Montserrat:wght@300;400;500&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    // Scroll to top when component mounts
    window.scrollTo(0, 0);

    return () => {
      if (link.parentNode) {
        document.head.removeChild(link);
      }
    };
  }, []);

  if (!couple) {
    return (
      <div className="pt-24 pb-16 px-4 min-h-[50vh] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl text-gray-800 mb-4">Couple not found</h2>
          <Link 
            to="/photography" 
            className="inline-flex items-center text-gray-600 hover:text-gray-900"
          >
            <ArrowLeft size={18} className="mr-2" />
            Back to Photography
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <Link 
        to="/photography" 
        className="inline-flex items-center text-gray-500 hover:text-gray-800 mb-8 transition-colors"
        style={{ fontFamily: "'Montserrat', sans-serif" }}
      >
        <ArrowLeft size={18} className="mr-2" />
        Back to Gallery
      </Link>

      <div className="text-center mb-12">
        <h1 
          className="text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-6 font-light"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          {couple.name}
        </h1>
        <div className="max-w-3xl mx-auto">
          <p 
            className="text-lg text-gray-600 mb-4 leading-relaxed"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            {couple.description}
          </p>
          <p 
            className="text-gray-500 italic"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            {couple.destination}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {couple.gallery.map((image, index) => (
          <div 
            key={index} 
            className={`overflow-hidden ${index === 0 ? 'md:col-span-2' : ''}`}
          >
            <img
              src={image}
              alt={`${couple.name} wedding photo ${index + 1}`}
              className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-500"
              style={{ 
                aspectRatio: index === 0 ? '16/9' : '4/5',
                objectFit: 'cover'
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoupleDetail;
