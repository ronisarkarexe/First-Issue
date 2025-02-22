"use client";
import React, { useEffect, useState } from "react";
import AboutUsComponent from "../about_us";
import HeroComponent from "../hero/hero.component";
import { getOpenSourceSuggestions } from "@/prompt/prompt";
import IssueListComponent from "../issues/issue_list.component";
import { Issue } from "@/model/issue.model";

interface IRepositoryComponentProps {
  generateText: string;
}

const RepositoryComponent: React.FC<IRepositoryComponentProps> = ({
  generateText,
}) => {
  const [issues, setIssues] = useState<Issue[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!generateText) return;
    setLoading(true);
    getOpenSourceSuggestions(generateText)
      .then((data) => {
        const extractedIssues: Issue[] = data.map((issue: any) => ({
          comment: issue.comments,
          number: issue.number,
          created_at: issue.created_at,
          labels: issue.labels.map((label: any) => ({
            name: label.name,
            color: label.color,
          })),
          status: issue.state,
          title: issue.title,
          url: issue.html_url,
          repository_url: issue.repository_url,
          user: {
            username: issue.user.login,
            url: issue.user.html_url,
          },
        }));
        setIssues(extractedIssues);
      })
      .catch((error) => console.error("Error fetching data:", error))
      .finally(() => setLoading(false));
  }, [generateText]);

  return (
    <div className="h-screen mt-2">
      {/* <AboutUsComponent /> */}
      <IssueListComponent issues={issues} />
      <style jsx>{`
        .h-full::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default RepositoryComponent;
