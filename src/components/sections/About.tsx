import React from "react";

import header from "/images/header.png";
import about1 from "/images/about1.webp";
import about2 from "/images/about2.webp";

const About: React.FC = () => {
  return (
    <section className="py-16 px-8 bg-[#faf4f0] min-h-screen flex flex-col items-center">
      <div className="mb-16 max-w-[950px]">
        <img src={header} alt="header" className="w-full" />
      </div>

      <div className="grid lg:grid-cols-[1fr_1.2fr_1fr] gap-8 lg:gap-8 max-w-[1400px] mx-auto items-center">
        <img
          src={about1}
          alt="Bride in detailed wedding attire"
          className="w-full object-cover aspect-[3/4]"
        />

        <div className="lg:px-4">
          <p className="font-serif text-lg lg:text-xl leading-relaxed text-gray-800 mb-8 lg:text-left text-center">
            Considered to be the epitome of Modern Photography and Filmmaking,
            HOTC has transformed the Indian Wedding landscape on a regular
            basis. For almost a decade House On The Clouds has been creating
            photographs and films which are timeless and have been etched in
            memories of thousands of people forever.
          </p>
          <p className="font-serif text-lg lg:text-xl leading-relaxed text-gray-800 mb-8 lg:text-left text-center">
            Awarded as the Wedding Filmmaker of the year for four consecutive
            years at the Weddingsutra awards along with numerous other awards
            HOTC is the only company listed on IMDB for its award winning films.
          </p>
        </div>

        <img
          src={about2}
          alt="Bride in wedding dress at scenic location"
          className="w-full object-cover aspect-[4/5]"
        />
      </div>
    </section>
  );
};

export default About;