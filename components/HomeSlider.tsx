"use client";

import { useEffect, useState } from "react";

const slides = [
  "/images/photos/accueil-1.jpg",
  "/images/photos/accueil-2.jpg",
  "/images/photos/accueil-3.jpg",
  "/images/photos/accueil-4.jpg",
];

export default function HomeSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrentSlide((current) => (current + 1) % slides.length);
    }, 4000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="home-photo-slider" aria-hidden="true">
      <div
        key={currentSlide}
        className="home-photo-slide home-photo-slide-current"
        style={{
          backgroundImage: `url("${slides[currentSlide]}")`,
        }}
      />

      <div className="home-photo-overlay" />
    </div>
  );
}