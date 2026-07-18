"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed right-5 bottom-24 w-12 h-12 rounded-full
      bg-pink-700/70
      backdrop-blur-md
      border-2 
      text-white
      flex items-center justify-center
      shadow-xl
      cursor-pointer
      transition-all duration-300
      z-50
      hover:bg-pink-800
      ${
        showTop
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-5 pointer-events-none"
      }`}
    >
      <ArrowUp size={24} strokeWidth={2.5} />
    </button>
  );
}