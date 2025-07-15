"use client";

import { useState, useEffect } from "react";
import { ChevronDown, Mouse } from "lucide-react";

const ScrollButton = () => {
  const [opacity, setOpacity] = useState(1);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    setOpacity(Math.max(1 - scrollY / 200, 0));
  };

  const handleClick = () => {
    window.scrollBy({
      top: 200,
      behavior: "smooth",
    });
  };

  // Add scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative w-full h-full">
      <div
        className="absolute top-44 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
        style={{ opacity }}
        onClick={handleClick}
      >
        <Mouse strokeWidth={1.3} />
        <ChevronDown
          className="animate-bounce"
          strokeWidth={1.3}
        />
      </div>
    </div>
  );
};

export default ScrollButton;
