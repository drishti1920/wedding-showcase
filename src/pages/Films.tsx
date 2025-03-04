import { useEffect, useState } from 'react';
import { Play, X } from 'lucide-react';
import { films } from '../data/films';

interface Film {
  id: string;
  couple: string;
  location: string;
  thumbnailUrl: string;
  videoUrl: string;
  description: string;
}

const Films = () => {
  const [selectedFilm, setSelectedFilm] = useState<Film | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Load the fonts
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&family=Montserrat:wght@300;400;500&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    // Scroll to top when component mounts
    window.scrollTo(0, 0);

    // Handle body scroll when modal is open
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      if (link.parentNode) {
        document.head.removeChild(link);
      }
      document.body.style.overflow = '';
    };
  }, [isModalOpen]);

  const openModal = (film: Film) => {
    setSelectedFilm(film);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    // Give time for fade out animation before removing the film
    setTimeout(() => {
      setSelectedFilm(null);
    }, 300);
  };

  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 
          className="text-4xl md:text-5xl text-gray-900 mb-4" 
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          Wedding Films
        </h1>
        <p 
          className="text-lg text-gray-600 max-w-2xl mx-auto"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          Cinematic storytelling that captures the emotion and beauty of your special day
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
        {films.map((film) => (
          <div 
            key={film.id} 
            className="group relative overflow-hidden rounded shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer aspect-video"
            onClick={() => openModal(film)}
          >
            {/* Thumbnail Background */}
            <div className="absolute inset-0 bg-black">
              <img 
                src={film.thumbnailUrl}
                alt={`${film.couple} wedding film`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
                loading="lazy"
              />
            </div>
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-300"></div>
            
            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/80 flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:bg-white">
                <Play className="w-7 h-7 md:w-8 md:h-8 text-gray-800 ml-1" />
              </div>
            </div>
            
            {/* Film Info */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
              <h3 
                className="text-xl md:text-2xl font-light mb-1" 
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                {film.couple}
              </h3>
              <p 
                className="text-sm text-white/80" 
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {film.location}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Video Modal */}
      {isModalOpen && (
        <div 
          className={`fixed inset-0 z-50 flex items-center justify-center bg-black/90 transition-opacity duration-300 ${isModalOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
          onClick={closeModal}
        >
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Close Button */}
            <button 
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-200"
              onClick={closeModal}
              aria-label="Close video"
            >
              <X className="w-6 h-6 text-white" />
            </button>
            
            {/* Video Player */}
            {selectedFilm && (
              <div 
                className="w-full h-full md:w-5/6 md:h-5/6 lg:w-4/5 lg:h-4/5"
                onClick={(e) => e.stopPropagation()}
              >
                <iframe 
                  src={`${selectedFilm.videoUrl}?autoplay=1`}
                  title={`${selectedFilm.couple} wedding film`}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Films;
