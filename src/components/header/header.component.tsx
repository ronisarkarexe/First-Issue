"use client";
import React, { useEffect, useState } from "react";

const HeaderComponent = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 w-full transition-all ${
        scrolled ? "bg-slate-900 shadow-md" : "bg-slate-900"
      }`}
    >
      <h1 className="text-2xl text-center my-4">First Issue</h1>
    </div>
  );
};

export default HeaderComponent;
