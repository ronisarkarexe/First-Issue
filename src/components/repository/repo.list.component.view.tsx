"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import contributors from "../../contributors.json";
import { getGitHubUserAvatar } from "./repository.helper";
import RepositoryListComponent from "./repository-list.component";

const RepoListViewComponent = () => {
  const [selectedUser, setSelectedUser] = useState<string>("ronisarkarexe.json");
  const [avatarUrl, setAvatarUrl] = useState<{ name: string; url: string }[]>(
    []
  );
  useEffect(() => {
    const loadAvatars = async () => {
      const res = await Promise.all(
        contributors.map(async (contributor) => {
          const avatarURL = await getGitHubUserAvatar(
            contributor.split(".")[0]
          );
          return { name: contributor, url: avatarURL };
        })
      );
      setAvatarUrl(res);
    };
    loadAvatars();
  }, []);

  return (
    <div>
      <div className="relative h-[70px] mb-5 overflow-visible">
        {avatarUrl.map((user, index) => (
          <div
            key={index}
            className="absolute cursor-pointer transition-all duration-300 hover:scale-110"
            style={{ left: `${index * 26}px` }}
            onClick={() => setSelectedUser(user.name)}
          >
            <Image
              src={user.url}
              alt={user.name}
              width={50}
              height={50}
              className="rounded-full object-cover border-4 border-white shadow-sm"
            />
          </div>
        ))}
      </div>
      <RepositoryListComponent selectedUser={selectedUser} />
    </div>
  );
};

export default RepoListViewComponent;
