import React, { useState } from "react";
import NextGenerationViewComponent from "./next.generation.view.component";

interface IHeroComponentProps {
  setGenerateText: (text: string) => void;
}

const HeroComponent: React.FC<IHeroComponentProps> = ({ setGenerateText }) => {
  const [searchText, setSearchText] = useState<string>("");
  const generateText = () => {
    if (searchText.trim() === "") return;
    setGenerateText(searchText);
    setTimeout(() => setSearchText(""), 0);
  };
  return (
    <div className="gradient-bg min-h-screen">
      <div className="relative overflow-hidden">
        <div className="subtle-curves"></div>
        <div className="curved-line"></div>
        <nav className="relative z-10 mx-auto max-w-8xl px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-16">
              {/* <a href="/" className="flex items-center space-x-2">
                <img
                  src=""
                  alt="Logo"
                  className="h-8 w-auto"
                />
              </a> */}
              <div className="hidden md:flex items-center space-x-8">
                <a href="#" className="text-white hover:text-custom transition">
                  ABOUT
                </a>
                <a
                  href="/http_codes"
                  className="text-white hover:text-custom transition"
                >
                  HTTP CODES
                </a>
                <a
                  href="/repos"
                  className="text-white hover:text-custom transition"
                >
                  REPOS
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
            Type a technology or skill to explore and solve beginner-friendly
            issues from GitHub projects
          </p>

          <div className="flex-grow flex flex-col items-center justify-center">
            <div className="relative max-w-3xl w-full before:absolute before:inset-0 before:-z-10 before:bg-gradient-to-r before:from-purple-500/20 before:via-indigo-500/20 before:to-blue-500/20 before:blur-xl before:animate-pulse">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <i className="fas fa-sparkles text-gray-400"></i>
                </div>
                <input
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                  type="text"
                  className="block w-full pl-12 pr-32 py-4 bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 text-white placeholder-gray-400 transition-all duration-300 outline-none"
                  placeholder="Enter a topic and find the best issue..."
                />

                <div
                  className="absolute inset-y-0 right-0 flex items-center pr-2"
                  onClick={generateText}
                >
                  <button className="relative !rounded-button bg-gradient-to-r from-blue-900 via-emerald-800 to-blue-500 text-white font-medium px-6 py-2 mr-2 border border-transparent hover:border-white/20 transition-all duration-300 before:absolute before:inset-0 before:bg-gradient-to-r before:from-blue-500 before:via-blue-900 before:to-emerald-800 before:animate-border-gradient before:rounded-xl before:-z-10 before:blur-sm">
                    <i className="fa fa-wand-magic-sparkles mr-2"></i>Generate
                  </button>
                </div>
              </div>
            </div>
            <div className="text-gray-400 items-center pr-1">
              <span className="text-sm text-red-400">
                Trips: typescript+react+...
              </span>
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
