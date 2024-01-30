"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

function Carousel({ images }: { images: Array<string> }) {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((currentImage + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [currentImage, images]);

  return (
    <div
      id="default-carousel"
      className="relative m-4"
      data-carousel="slide"
    >
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute w-full transition-opacity duration-700 ease-in-out ${
              currentImage === index ? "opacity-100" : "opacity-0"
            }`}
            data-carousel-item
          >
            <Image
              src={image}
              className="object-cover w-full h-full"
              width={1000}
              height={1000}
              alt={image}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
