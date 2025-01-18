"use client";
import React from "react";
import AboutUsComponent from "../about_us";
import HeroComponent from "../hero/hero.component";

const RepositoryComponent = () => {
  return (
    <div className="flex flex-wrap md:flex-nowrap mx-5 mt-20 h-screen">
      

      <AboutUsComponent />
      <style jsx>{`
        .h-full::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default RepositoryComponent;
