"use client";

import React from "react";
import RepositoryListComponent from "./repository-list.component";

const RepositoryComponent = () => {
  return (
    <div className="flex flex-wrap md:flex-nowrap mx-5 mt-20 h-screen gap-5">
      <div className="w-full md:w-3/10 bg-lightblue">
        <h2 className="text-center text-blue-500 text-2xl">ABOUT</h2>
        <div>
          <p className="text-sm text-gray-500 text-pretty indent-8 text-justify">
            First Issue is a platform dedicated to curating beginner-friendly
            issues from open-source projects. Whether you are a developer
            looking to make your contribution to open source or an experienced
            programmer seeking new projects to collaborate on, First Issue makes
            it easier to find tasks that match your skill level and interests.
          </p>
        </div>
        <h2 className="text-center text-blue-500 text-sm">
          Developed by Developer for Beginner
        </h2>
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
