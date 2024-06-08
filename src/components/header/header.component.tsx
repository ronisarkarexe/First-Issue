"use client";
import React, { useEffect, useState } from "react";
import girlsScriptLogo from "../../assert/image/girls_script.png";
import Image from "next/image";

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
      className={`fixed top-0 w-full transition-all flex align-center justify-center ${
        scrolled ? "bg-slate-900 shadow-md" : "bg-slate-900"
      }`}
    >
      <div>
        <h1 className="text-3xl text-center my-4 text-blue-500">
          👨‍💻 First Issue 🎉
        </h1>
      </div>
      <div className="my-4 flex align-center justify-center">
        <Image
          src={girlsScriptLogo}
          alt="girls_script_logo"
          width={160}
          height={120}
        />
      </div>
    </div>
  );
};

export default HeaderComponent;
