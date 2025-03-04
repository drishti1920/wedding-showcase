import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    // Load the fonts if not already loaded
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&family=Montserrat:wght@300;400;500&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    return () => {
      // Check if this is the only component using the font before removing
      const otherComponents = document.querySelectorAll('.font-serif, .font-sans');
      if (otherComponents.length <= 1 && link.parentNode) {
        document.head.removeChild(link);
      }
    };
  }, []);

  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Logo & Tagline */}
          <div className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-2xl text-gray-800 font-light"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              TheStoryTimeliners
            </Link>
            <p 
              className="text-sm text-gray-500 max-w-xs"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Capturing timeless moments and emotions through elegant wedding photography and cinematography.
            </p>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col space-y-4">
            <h3 
              className="text-base text-gray-800 font-light mb-2"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Contact
            </h3>
            <div className="flex flex-col space-y-3">
              <a 
                href="mailto:hello@artistry.com" 
                className="flex items-center text-sm text-gray-500 hover:text-gray-800 transition-colors"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                <Mail className="w-4 h-4 mr-2" />
                hello@thestorytimeliners.com
              </a>
              <a 
                href="tel:+917889457383" 
                className="flex items-center text-sm text-gray-500 hover:text-gray-800 transition-colors"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                <Phone className="w-4 h-4 mr-2" />
                +91 78894 55612
              </a>
              <div 
                className="flex items-center text-sm text-gray-500"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                <MapPin className="w-4 h-4 mr-2" />
                Jaipur, Rajasthan
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col space-y-4">
            <h3 
              className="text-base text-gray-800 font-light mb-2"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Navigate
            </h3>
            <div className="flex flex-col space-y-3">
              {['Home', 'Films', 'Photography', 'Contact', 'About Us'].map(
                (item) => (
                  <Link
                    key={item}
                    to={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-sm text-gray-500 hover:text-gray-800 transition-colors"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {item}
                  </Link>
                )
              )}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-10 mt-10 border-t border-gray-100 text-center">
          <p 
            className="text-xs text-gray-400"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            © {currentYear} TheStoryTimeliners Wedding Photography. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
