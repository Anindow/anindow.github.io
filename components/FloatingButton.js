import React from "react";
import { FaArrowUp } from "react-icons/fa"
const scrollToTop = () => {
  const scrollStep = window.scrollY / 25; 
  const scrollInterval = setInterval(() => {
    if (window.scrollY === 0) {
      clearInterval(scrollInterval);
    }
    window.scrollBy(0, -scrollStep);
  }, 15); 
};

const FloatingButton = () => {
  return (
    <button
      className="fixed bottom-14 right-14 lg:p-8 p-4 bg-teal-500 text-white rounded-full hover:bg-teal-600 focus:outline-none animate-bounce"
      onClick={scrollToTop}
    >
     <FaArrowUp size={24} />
    </button>
  );
};

export default FloatingButton;
