/* eslint-disable @next/next/no-img-element */
import { Repository, RepositoryIssue } from "@/model/repository.model";
import React, { useEffect, useState } from "react";
import {
  getLastCommitDate,
  getRepoIssues,
  getRepoName,
} from "../repository.helper";
import Link from "next/link";
import { formatDistanceToNow } from "date-fns";

const RepositoryViewComponent = (props: { item: Repository }) => {
  const [lastCommitDate, setLastCommitDate] = useState<string>("");
  const [repoIssues, setRepoIssues] = useState<RepositoryIssue[]>([]);

  useEffect(() => {
    const fetchRepoDetails = async () => {
      const commit = await getLastCommitDate(props.item.repoUrl);
      const issues = await getRepoIssues(
        "https://github.com/OpenLake/Leaderboard-Pro"
      );
      setRepoIssues(issues);
      setLastCommitDate(formatRelativeTime(commit));
    };
    fetchRepoDetails();
  }, [props.item.repoUrl]);

  const formatRelativeTime = (timestamp: string): string => {
    const date = new Date(timestamp);
    return formatDistanceToNow(date, { addSuffix: true });
  };

  return (
    <div className="border border-gray-400 p-3 rounded-md">
      <div className="flex justify-start gap-10">
        <h1 className="text-start text-1xl">
          <Link href={props.item.repoUrl} target="_b">
            {getRepoName(props.item.repoUrl)}
          </Link>
        </h1>
        <div className="flex gap-2">
          <img
            alt="Stars"
            src={`https://img.shields.io/github/stars/${getRepoName(
              props.item.repoUrl
            )}?style=flat-square&labelColor=343b41`}
          />
          <img
            alt="Forks"
            src={`https://img.shields.io/github/forks/${getRepoName(
              props.item.repoUrl
            )}?style=flat-square&labelColor=343b41`}
          />
          <img
            alt="Issues"
            src={`https://img.shields.io/github/issues/${getRepoName(
              props.item.repoUrl
            )}?style=flat-square&labelColor=343b41`}
          />
          <img
            alt="Pull Requests"
            src={`https://img.shields.io/github/issues-pr/${getRepoName(
              props.item.repoUrl
            )}?style=flat-square&labelColor=343b41`}
          />
        </div>
        <div>
          <h1 className="text-end text-base text-gray-500 ml-12">
            last activity: {lastCommitDate}
          </h1>
        </div>
      </div>
      <div>
        <span>{props.item.description}</span>
      </div>
      <div className="flex text-base my-1">
        Lang:{" "}
        <div className="flex ml-2">
          {props.item.techStack.map((item, index) => (
            <h1
              key={index}
              className="text-base border border-gray-400 px-2 py-0 rounded-md mx-1 text-gray-500"
            >
              {item.toLocaleLowerCase()}
            </h1>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RepositoryViewComponent;
