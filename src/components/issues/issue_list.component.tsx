import { Issue } from "@/model/issue.model";
import React, { useState } from "react";
import { extractRepoName, getRelativeTime } from "./issue.helper";
import Link from "next/link";

interface IRepositoryComponentProps {
  issues: Issue[];
  issuesPerPage?: number;
}

const IssueListComponent: React.FC<IRepositoryComponentProps> = ({
  issues,
  issuesPerPage = 4,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(issues.length / issuesPerPage);

  const startIndex = (currentPage - 1) * issuesPerPage;
  const displayedIssues = issues.slice(startIndex, startIndex + issuesPerPage);

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="w-full px-4">
      {issues.length > 0 ? (
        displayedIssues.map((issue) => (
          <div className="py-1" key={issue.url}>
            <div className="space-y-1">
              <div className="bg-gray-800 rounded-lg p-2 hover:bg-gray-750 transition">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <span
                      className={`block w-2 h-2 rounded-full ${
                        issue.status === "open"
                          ? "bg-green-400"
                          : "bg-yellow-400"
                      }`}
                    ></span>
                  </div>
                  <div className="ml-3 flex-1">
                    <Link href={issue.repository_url}>
                      <div className="text-sm text-gray-400">
                        {extractRepoName(issue.repository_url)}
                      </div>
                    </Link>
                    <Link href={issue.url}>
                      <div className="font-medium">{issue.title}</div>
                    </Link>
                    <div className="mt-1 flex items-center text-sm text-gray-400">
                      <span>
                        #{issue.number} opened{" "}
                        {getRelativeTime(issue.created_at)} by{" "}
                        <Link href={issue.user.url}>
                          <span>{issue.user.username}</span>
                        </Link>
                      </span>
                      <span className="mx-2">•</span>
                      {issue.labels.map((label, index) => (
                        <span
                          key={index}
                          className="px-2 py-0.5 text-xs rounded-full bg-blue-500/20 text-blue-400"
                        >
                          {label.name}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="ml-4">
                    <span className="text-gray-400">
                      <i className="far fa-comment mr-1"></i>
                      {issue.comment}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="text-center text-gray-400 py-6">
          No issues available. Try searching for something else.
        </div>
      )}

      <div className="py-6 border-t border-gray-800">
        <div className="flex justify-between items-center text-sm text-gray-400">
          <div>
            <span>
              Showing {startIndex + 1} -{" "}
              {Math.min(startIndex + issuesPerPage, issues.length)} of{" "}
              {issues.length} issues
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={handlePrev}
              disabled={currentPage === 1}
              className="!rounded-button px-3 py-1 bg-gray-800 hover:bg-gray-700 disabled:opacity-50"
            >
              <i className="fas fa-chevron-left"></i>
            </button>
            <span>
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className="!rounded-button px-3 py-1 bg-gray-800 hover:bg-gray-700 disabled:opacity-50"
            >
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IssueListComponent;
