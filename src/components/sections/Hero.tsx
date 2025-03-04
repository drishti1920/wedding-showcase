import { useEffect, useRef, useState } from "react";

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    // Load the font
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&family=Montserrat:wght@300;400;500&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    // Ensure video plays
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error("Video play failed:", error);
        setVideoError(true);
      });
    }

    return () => {
      if (link.parentNode) {
        document.head.removeChild(link);
      }
    };
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        {!videoError ? (
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            src="/videos/hero.mp4"
            onError={() => setVideoError(true)}
          >
            Your browser does not support the video tag.
          </video>
        ) : (
          // Fallback background if video fails to load
          <div className="absolute inset-0 bg-gray-900"></div>
        )}
        {/* Overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Hero Content */}
      <div className="relative h-full flex items-center justify-center text-center px-4">
        <div
          className="max-w-3xl"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-light mb-4 leading-tight">
            Capturing Your Most Beautiful Moments
          </h1>
          <p
            className="text-xl md:text-2xl text-white/90 mb-8 font-light"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Timeless wedding photography and films for the romantic at heart
          </p>
        </div>
      </div>

     
    </div>
  );
};

export default Hero;
