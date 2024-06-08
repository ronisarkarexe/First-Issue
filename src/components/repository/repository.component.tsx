"use client";

import React from "react";
import RepositoryListComponent from "./repository-list.component";
import Link from "next/link";

const RepositoryComponent = () => {
  return (
    <div className="flex flex-wrap md:flex-nowrap mx-5 mt-20 h-screen gap-5">
      <div className="w-full md:w-3/10 bg-lightblue">
        <h2 className="text-center text-blue-500 text-2xl">ABOUT 📝</h2>
        <div>
          <p className="text-sm text-gray-500 text-pretty indent-8 text-justify mt-3">
            <span className="text-blue-500 text-xl">First-Issue</span> is an
            open-source platform designed specifically for beginners looking to
            contribute to open-source projects. It is especially tailored for
            the <span className="text-blue-500 text-xl">Girls-Script-2024</span>{" "}
            contributors. First Issue simplifies the process of finding tasks
            that align with your skill level and interests, making it easier for
            you to get started in the world of{" "}
            <span className="text-blue-500">open-source</span> contributions.
          </p>
        </div>
        {/* <h2 className="text-center text-blue-500 text-xl mt-5">Open Source</h2> */}
        <h1 className="text-center text-sm text-gray-400 mt-4">
          © 2024{" "}
          <Link href="https://firstissuedev.vercel.app/">
            <span className="hover:text-blue-400">@firstissue</span>
          </Link>{" "}
        </h1>
      </div>
      <div
        className="w-full md:w-7/10 bg-lightgreen overflow-y-auto h-full"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <RepositoryListComponent />
      </div>
      <style jsx>{`
        .h-full::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default RepositoryComponent;
