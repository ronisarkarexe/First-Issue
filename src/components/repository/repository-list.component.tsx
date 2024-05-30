"use client";
import { Repository } from "@/model/repository.model";
import React, { useEffect, useState } from "react";
import RepositoryViewComponent from "./view/repository-view.component";

const RepositoryListComponent = () => {
  const [repositories, setRepositories] = useState<Repository[]>([]);
  useEffect(() => {
    const repositoryData = async () => {
      const res = await fetch(
        "https://first-issue-server.vercel.app/api/v1/repository"
      );
      const result = await res.json();
      setRepositories(result.data);
    };
    repositoryData();
  }, []);

  return (
    <div>
      {repositories.length ? (
        repositories.map((item) => (
          <div key={item.id}>
            <RepositoryViewComponent item={item} />
          </div>
        ))
      ) : (
        <div>No Repository List avaliable</div>
      )}
    </div>
  );
};

export default RepositoryListComponent;
