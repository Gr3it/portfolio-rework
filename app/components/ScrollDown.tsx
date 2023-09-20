"use client";

import React, { useEffect, useState } from "react";

const ScrollDown = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollY >= 50) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  }, [scrollY]);

  const style = {
    opacity: isVisible ? 1 : 0,
    transition: "opacity 0.3s ease-in-out",
  };

  return (
    <div style={style}>
      <a
        href="#projects"
        className={`absolute bottom-4 left-1/2 translate-x-[-50%] font-semibold animate-pulse-light py-2 px-4 ${
          isVisible ? "" : "cursor-default"
        }`}
      >
        Scroll Down
      </a>
    </div>
  );
};

export default ScrollDown;
