import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Check if we're on the home page
  // const isHomePage = location.pathname === "/" ;

  const isHomePage = ["/", "/about-us"].includes(location.pathname);


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Prevent scrolling when menu is open
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-300 
          ${
          isOpen
            ? "bg-white/90 backdrop-blur-sm shadow-sm"
            : scrolled
            ? isHomePage
              ? "bg-white/95 backdrop-blur-sm shadow-md" // Home page: white when scrolled
              : "bg-white/95 backdrop-blur-sm shadow-md" // Other pages: dark overlay with blur when scrolled
            : "bg-transparent" // All pages: transparent when at top
        }
        
        `}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center md:order-2">
              <Link
                to="/"
                className={`text-2xl font-serif font-light transition-colors duration-300 ${
                  (scrolled && isHomePage) || isOpen
                    ? "text-gray-800"
                    : isHomePage && !scrolled
                    ? "text-white"
                    : scrolled
                    ? "text-gray-800" // When scrolled on other pages, keep text white for contrast
                    : "text-gray-800"
                }`}
              >
                TheStoryTimeliners
              </Link>
            </div>

            {/* Menu Links - Left on desktop, hidden on mobile unless menu is open */}
            <div className="hidden md:flex md:items-center md:order-1">
              <div className="flex space-x-8">
                {["Home", "Films", "Photography", "Contact", "About Us"].map(
                  (item) => (
                    <Link
                      key={item}
                      to={
                        item === "Home"
                          ? "/"
                          : `/${item.toLowerCase().replace(/\s+/g, "-")}`
                      }
                      className={`text-sm tracking-wide hover:opacity-70 transition-all duration-300 ${
                        (scrolled && isHomePage) || isOpen
                          ? "text-gray-700"
                          : isHomePage && !scrolled
                          ? "text-white"
                          : scrolled
                          ? "text-gray-800" // When scrolled on other pages, keep text white for contrast
                          : "text-gray-800"
                      }`}
                    >
                      {item}
                    </Link>
                  )
                )}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="flex md:hidden order-1">
              <button
                className={`inline-flex items-center justify-center p-2 rounded-md transition-all duration-300 ${
                  (scrolled && isHomePage) || isOpen
                    ? "text-gray-700"
                    : isHomePage && !scrolled
                    ? "text-white"
                    : scrolled
                    ? "text-white" 
                    : "text-gray-800"
                } hover:opacity-70 focus:outline-none z-[60]`}
                onClick={toggleMenu}
                aria-expanded={isOpen}
                aria-label="Toggle menu"
              >
                {isOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Full-screen Mobile menu with animations */}
      <div
        className={`fixed inset-0 bg-black/70 backdrop-blur-sm z-50 md:hidden transition-opacity duration-300 ease-in-out ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Close icon positioned at the top of the menu */}
        <button
          className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 z-[60]"
          onClick={toggleMenu}
          aria-label="Close menu"
        >
          <X className="h-5 w-5 text-white" aria-hidden="true" />
        </button>

        <div
          className="h-full flex flex-col items-center justify-center"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="px-8 py-4 text-center w-full max-w-md mx-auto">
            {["Home", "Films", "Photography", "Contact", "About Us"].map(
              (item, index) => (
                <div
                  key={item}
                  className={`transition-all duration-500 transform ${
                    isOpen
                      ? "translate-y-0 opacity-100"
                      : "translate-y-4 opacity-0"
                  }`}
                  style={{ transitionDelay: `${150 + index * 100}ms` }}
                >
                  <Link
                    to={
                      item === "Home"
                        ? "/"
                        : `/${item.toLowerCase().replace(/\s+/g, "-")}`
                    }
                    className="block py-5 text-2xl font-light text-white hover:text-white/70 transition-colors text-center"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                  </Link>
                  {index < 4 && (
                    <div className="h-px w-1/2 mx-auto bg-white/20"></div>
                  )}
                </div>
              )
            )}
          </div>

          {/* Footer content for mobile menu */}
          <div
            className={`mt-auto pb-10 px-8 text-center w-full transition-all duration-500 transform ${
              isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
            style={{ transitionDelay: "550ms" }}
          >
            <p
              className="text-white/80 text-sm mb-3"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Capturing timeless moments
            </p>
            <div className="flex justify-center space-x-6">
              <a
                href="#"
                className="text-white/80 hover:text-white transition-colors"
              >
                Instagram
              </a>
              <a
                href="#"
                className="text-white/80 hover:text-white transition-colors"
              >
                Facebook
              </a>
              <a
                href="#"
                className="text-white/80 hover:text-white transition-colors"
              >
                Pinterest
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
