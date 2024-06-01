export const getRepoName = (url: string) => {
  const match = url.match(/github\.com\/([^/]+\/[^/]+)/);
  if (match) {
    const path = match[1];
    return path;
  }
};

export const getLastCommitDate = async (repoUrl: string) => {
  const repoName = getRepoLastCommit(repoUrl);
  const response = await fetch(
    `https://api.github.com/repos/${repoName}/commits`
  );
  const data = await response.json();
  if (data && data.length > 0) {
    return data[0].commit.committer.date;
  }
  return null;
};

const getRepoLastCommit = (url: string) => {
  const parts = url.split("/");
  return `${parts[parts.length - 2]}/${parts[parts.length - 1]}`;
};

export const getRepoIssues = async (repoUrl: string) => {
  try {
    const repoName = getRepoName(repoUrl);
    const response = await fetch(
      `https://api.github.com/repos/${repoName}/issues`
    );
    const data = await response.json();
    const issues = data
      .filter((issue: any) => issue.state === "open")
      .map((issue: any) => ({
        html_url: issue.html_url,
        title: issue.title,
        state: issue.state,
      }));

    return issues;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getIssueNumber = (issueUrl: string) => {
  return issueUrl.split("/").pop();
};

export const truncateDescription = (
  description: string,
  wordLimit: number
): string => {
  const words = description.trim().split(/\s+/);
  if (words.length <= wordLimit) {
    return description;
  }
  return words.slice(0, wordLimit).join(" ") + "...";
};
