import React from "react";
import NextGenerationViewComponent from "./next.generation.view.component";

const HeroComponent = () => {
  return (
    <div className="gradient-bg min-h-screen">
      <div className="relative overflow-hidden">
        <div className="subtle-curves"></div>
        <div className="curved-line"></div>
        <nav className="relative z-10 mx-auto max-w-8xl px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-16">
              {/* <a href="#" className="flex items-center space-x-2">
                <img
                  src="https://ai-public.creatie.ai/gen_page/logo_placeholder.png"
                  alt="Logo"
                  className="h-8 w-auto"
                />
              </a> */}
              <div className="hidden md:flex items-center space-x-8">
                <a
                  href="/repos"
                  className="text-white hover:text-custom transition"
                >
                  REPOS
                </a>
                <a href="#" className="text-white hover:text-custom transition">
                  ABOUT
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="!rounded-button bg-blue hover:bg-blue text-white px-6 py-2 font-medium transition-all">
                JOIN
              </button>
            </div>
          </div>
        </nav>
        <main className="relative z-10 mx-auto max-w-7xl px-6 pt-24 pb-24 text-center">
          <NextGenerationViewComponent />
          <h1 className="text-7xl font-bold text-white mb-8 tracking-tight">
            Find your next
            <br />
            Open Source project
            <span className="inline-block ml-4">
              <i className="fas fa-bolt text-yellow-400 glow"></i>
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Describe what you&apos;re looking for and let our AI help you
            discover the perfect repository.
          </p>

          <div className="flex-grow flex flex-col items-center justify-center">
            <div className="relative max-w-3xl w-full before:absolute before:inset-0 before:-z-10 before:bg-gradient-to-r before:from-purple-500/20 before:via-indigo-500/20 before:to-blue-500/20 before:blur-xl before:animate-pulse">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <i className="fas fa-sparkles text-gray-400"></i>
                </div>
                <input
                  type="text"
                  className="block w-full pl-12 pr-32 py-4 bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 text-white placeholder-gray-400 transition-all duration-300 outline-none"
                  placeholder="Describe the repository you're looking for..."
                />

                <div className="absolute inset-y-0 right-0 flex items-center pr-2">
                  <button className="relative !rounded-button bg-gradient-to-r from-blue-900 via-emerald-800 to-blue-500 text-white font-medium px-6 py-2 mr-2 border border-transparent hover:border-white/20 transition-all duration-300 before:absolute before:inset-0 before:bg-gradient-to-r before:from-blue-500 before:via-blue-900 before:to-emerald-800 before:animate-border-gradient before:rounded-xl before:-z-10 before:blur-sm">
                    <i className="fa fa-wand-magic-sparkles mr-2"></i>Generate
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-custom/20 rounded-full blur-3xl -z-10"></div>
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-emerald-500/20 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-3xl -z-10"></div>
      </div>
    </div>
  );
};

export default HeroComponent;
