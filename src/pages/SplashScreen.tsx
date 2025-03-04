import { useEffect } from "react";

const SplashScreen = () => {
  useEffect(() => {
    // Load the fonts
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&family=Montserrat:wght@300;400;500&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    return () => {
      if (link.parentNode) {
        document.head.removeChild(link);
      }
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-white flex flex-col items-center justify-center z-50">
      <div className="text-center px-4">
        <h1
          className="text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-3"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          TheStoryTimeliners
        </h1>
        <p
          className="text-sm md:text-base text-gray-600 mb-8"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          WEDDING PHOTOGRAPHY & CINEMATOGRAPHY
        </p>

        {/* Loading indicator */}
        <div className="relative">
          <div className="w-12 h-0.5 bg-gray-200 mx-auto flex">
            <div className="absolute left-0 top-0 h-full bg-gray-400 animate-loadingBar"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
