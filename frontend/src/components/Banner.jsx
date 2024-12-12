import React, { useEffect, useRef, useState } from "react";
import "animate.css";

const Banner = ({ heading, imageUrl }) => {
  const bannerRef = useRef(null); // Reference to the banner container
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Trigger animation when in view
        } else {
          setIsVisible(false); // Optionally reset animation when out of view
        }
      },
      {
        threshold: 0.5, // Trigger when 50% of the banner is visible
      }
    );

    if (bannerRef.current) {
      observer.observe(bannerRef.current);
    }

    return () => {
      if (bannerRef.current) {
        observer.unobserve(bannerRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={bannerRef}
      className="relative bg-cover bg-center h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url('${imageUrl}')`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-10"></div>

      {/* Content with Animation */}
      <div
        className={`relative text-white font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center ${
          isVisible ? "animate__animated animate__fadeInUp" : "opacity-0"
        }`}
      >
        {heading}
      </div>
    </div>
  );
};

export default Banner;
