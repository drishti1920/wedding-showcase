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
          The Story Timeliners is redefining the art of wedding photography and filmmaking, capturing love stories with an unmatched blend of creativity and emotion. Specializing in candid photography, cinematography, videography, and timeless portraits, we turn fleeting moments into lifelong memories.
          </p>
          <p className="font-serif text-lg lg:text-xl leading-relaxed text-gray-800 mb-8 lg:text-left text-center">
          With a passion for storytelling, we go beyond traditional wedding coverage, crafting visually stunning narratives that reflect the essence of each couple. Our team ensures that every frame is infused with authenticity, making your special day unforgettable. At The Story Timeliners, we don’t just document weddings—we create cinematic experiences that you can relive forever.
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