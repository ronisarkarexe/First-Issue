"use client";
import React, { useEffect, useState } from "react";
import { Repository } from "@/model/repository.model";
import RepositoryViewComponent from "./view/repository-view.component";
import LoadingPage from "@/app/loading";
import { fetchUserData } from "@/utils/fetchAllUserData";

const RepositoryListComponent = ({ selectedUser }: { selectedUser: string }) => {
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const repositoryData = async () => {
      setLoading(true);
      try {
        const result = await fetchUserData(selectedUser);
        if (result.length > 0) {
          setRepositories(result);
        }
      } catch (error) {
        console.error("Failed to fetch repositories:", error);
      } finally {
        setLoading(false);
      }
    };
    repositoryData();
  }, [selectedUser]);

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <div>
      {repositories.length ? (
        repositories.map((item, index) => (
          <div key={index} className="mb-2">
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
