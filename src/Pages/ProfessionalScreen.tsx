import React, { useState, ReactNode } from "react";
import { IoMdArrowDropleftCircle, IoMdArrowDroprightCircle } from "react-icons/io";

interface CarouselProps {
  children: ReactNode[];
}

const Carousel: React.FC<CarouselProps> = ({ children }) => {
  const [current, setCurrent] = useState(0);
  const total = children.length;

  const nextSlide = () => {
    setCurrent((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  return (
    <div className="w-screen min-h-screen flex items-center justify-center">
      <div className="relative w-screen h-screen flex items-center justify-center text-black">
        {/* Slide Content */}
        <div className="w-full h-full flex items-center justify-center">
          {children[current]}
        </div>

        {/* Arrows */}
        <button
          onClick={prevSlide}
          className="fixed left-0 mr-1 top-[55%] transform -translate-y-1/2 rounded-full p-2 transition cursor-pointer text-4xl text-blue-500 hover:scale-105 hover:text-blue-600"
        >
          <IoMdArrowDropleftCircle />
        </button>
        <button
          onClick={nextSlide}
          className="fixed right-0 ml-1 top-[55%] transform -translate-y-1/2 rounded-full p-2 transition cursor-pointer text-4xl text-blue-500 hover:scale-105 hover:text-blue-600"
        >
          <IoMdArrowDroprightCircle />
        </button>

        {/* Dots */}
        <div className="fixed bottom-6 flex gap-2">
          {children.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full ${
                index === current ? "bg-blue-500" : "bg-blue-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
