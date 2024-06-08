"use client";
import { Repository } from "@/model/repository.model";
import React, { useEffect, useState } from "react";
import RepositoryViewComponent from "./view/repository-view.component";
import { getLastCommitDate } from "./repository.helper";
import LoadingPage from "@/app/loading";

const RepositoryListComponent = () => {
  const [repositories, setRepositories] = useState<Repository[]>([]);
  useEffect(() => {
    const repositoryData = async () => {
      const res = await fetch(
        "https://first-issue-server.vercel.app/api/v1/repository"
      );
      const result = await res.json();
      const repositoriesWithDates = await Promise.all(
        result.data.map(async (repo: Repository) => {
          const lastCommitDate = new Date(
            await getLastCommitDate(
              repo.repoUrl,
              process.env.NEXT_PUBLIC_GET_AC_TOKEN as string
            )
          );
          return { ...repo, lastCommitDate };
        })
      );
      const sortedRepositories = repositoriesWithDates.sort(
        (a, b) => b.lastCommitDate.getTime() - a.lastCommitDate.getTime()
      );
      setRepositories(sortedRepositories);
    };
    repositoryData();
  }, []);

  if (repositories.length === 0) {
    return <LoadingPage />;
  }

  return (
    <div>
      {repositories.length ? (
        repositories.map((item) => (
          <div key={item.id} className="mb-2">
            <RepositoryViewComponent item={item} />
          </div>
        ))
      ) : (
        <div>No Repository List available</div>
      )}
    </div>
  );
};

export default RepositoryListComponent;
