import React from "react";
import sponsor3 from "../data/logos/Broventure logo.png";
import sponsor1 from "../data/logos/blinkit-seeklogo.svg";
import sponsor2 from "../data/logos/tambooBaba.png"
// Replace these URLs with your actual sponsor logos
const sponsorLogos = [
  sponsor1,
  sponsor2,
  sponsor3,
];

export const Sponsors: React.FC = () => {
  return (
    <section className=" w-full h-1/2 flex flex-col items-center justify-center text-white my-16 md:my-24">
      {/* Heading */}
      <h2 className="text-section-title text-3xl md:text-4xl font-bold mb-12 text-center animate-fade-in-up">
        Our Sponsors
      </h2>

      {/* Logo Pyramid */}
      <div className="flex flex-col items-center space-y-8">
        {/* Top logo */}
        <div className="w-24 h-24 flex items-center justify-center bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
          <img
            src={sponsorLogos[0]}
            alt="Sponsor 1"
            className="max-w-full max-h-full object-contain"
          />
        </div>

        {/* Bottom row with two logos */}
        <div className="flex gap-8">
          {sponsorLogos.slice(1).map((logo, index) => (
            <div
              key={index}
              className="w-24 h-24 flex items-center justify-center bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
            >
              <img
                src={logo}
                alt={`Sponsor ${index + 2}`}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

