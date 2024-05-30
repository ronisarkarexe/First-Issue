import React from "react";
import RepositoryListComponent from "./repository-list.component";

const RepositoryComponent = () => {
  return (
    <div className="flex flex-wrap md:flex-nowrap mx-5">
      <div className="w-full md:w-3/10 bg-lightblue">H1</div>
      <div className="w-full md:w-7/10 bg-lightgreen">
        <RepositoryListComponent />
      </div>
    </div>
  );
};

export default RepositoryComponent;
