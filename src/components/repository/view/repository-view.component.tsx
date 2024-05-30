/* eslint-disable @next/next/no-img-element */
import { Repository } from "@/model/repository.model";
import React from "react";
import { getRepoName } from "../repository.helper";
import Link from "next/link";

const RepositoryViewComponent = (props: { item: Repository }) => {
  return (
    <div className="border border-gray-400 p-3 rounded-md">
      <div className="flex justify-start gap-10">
        <h1 className="text-start text-xl">
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
