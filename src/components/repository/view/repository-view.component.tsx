/* eslint-disable @next/next/no-img-element */
import { Repository, RepositoryIssue } from "@/model/repository.model";
import React, { useEffect, useState } from "react";
import {
  getIssueNumber,
  getLastCommitDate,
  getRepoIssues,
  getRepoName,
  truncateDescription,
} from "../repository.helper";
import Link from "next/link";
import { formatDistanceToNow } from "date-fns";

const RepositoryViewComponent = (props: { item: Repository }) => {
  const [issueListShow, setIssueListShow] = useState(false);
  const [lastCommitDate, setLastCommitDate] = useState<string>("");
  const [repoIssues, setRepoIssues] = useState<RepositoryIssue[]>([]);

  useEffect(() => {
    const fetchRepoDetails = async () => {
      const commit = await getLastCommitDate(props.item.repoUrl);
      const issues = await getRepoIssues(props.item.repoUrl);
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
    <div
      className={`${
        issueListShow ? "border border-blue-400" : "border border-gray-400"
      } p-3 rounded-md cursor-pointer`}
      onClick={() => setIssueListShow(!issueListShow)}
    >
      <div className="flex flex-col sm:flex-row md:flex-col lg:flex-col xl:flex-row justify-start gap-1 sm:gap-10 md:gap-1 lg:gap-1 xl:gap-10">
        <h1 className="text-start text-sm">
          <Link href={props.item.liveUrl} target="_b">
            {getRepoName(props.item.repoUrl)}
          </Link>
        </h1>
        <div className="flex sm:gap-2 gap-2">
          <img
            alt="Stars"
            className="w-12 h-auto sm:w-auto sm:h-auto lg:w-auto lg:h-auto"
            src={`https://img.shields.io/github/stars/${getRepoName(
              props.item.repoUrl
            )}?style=flat-square&labelColor=343b41`}
          />
          <img
            alt="Forks"
            className="w-12 h-auto sm:w-auto sm:h-auto lg:w-auto lg:h-auto"
            src={`https://img.shields.io/github/forks/${getRepoName(
              props.item.repoUrl
            )}?style=flat-square&labelColor=343b41`}
          />
          <img
            alt="Issues"
            className="w-12 h-auto sm:w-auto sm:h-auto lg:w-auto lg:h-auto"
            src={`https://img.shields.io/github/issues/${getRepoName(
              props.item.repoUrl
            )}?style=flat-square&labelColor=343b41`}
          />
          <img
            alt="Pull Requests"
            className="w-12 h-auto sm:w-auto sm:h-auto lg:w-auto lg:h-auto"
            src={`https://img.shields.io/github/issues-pr/${getRepoName(
              props.item.repoUrl
            )}?style=flat-square&labelColor=343b41`}
          />
        </div>
        <div>
          <span
            className={`text-end text-base ${
              issueListShow ? "text-blue-500 " : "text-gray-500 "
            } ml-0 sm:ml-12 md:ml-0 lg:ml-0 xl:ml-12`}
          >
            last activity: {lastCommitDate}
          </span>
        </div>
      </div>
      <div className="my-2">
        <span className="text-sm text-gray-400">
          {truncateDescription(props.item.description, 24)}
        </span>
      </div>
      <div className="flex text-base my-1">
        <span className="text-sm text-gray-400">Lang:</span>
        <div className="flex gap-1 flex-wrap">
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

      {issueListShow && (
        <div className="mt-3">
          <hr className="border-gray-700 mb-2" />
          {repoIssues.length ? (
            repoIssues.map((issue, index) => (
              <div
                className="flex my-1 text-gray-500 text-sm hover:text-blue-500"
                key={index}
              >
                <span>#{getIssueNumber(issue.html_url)}</span>
                <Link href={issue.html_url} target="_b">
                  <h1 className="ml-2">{issue.title}</h1>
                </Link>
              </div>
            ))
          ) : (
            <div>
              <span className="text-gray-500 text-base">
                Issue list not available!
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default RepositoryViewComponent;
