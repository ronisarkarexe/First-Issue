export const getRepoName = (url: string) => {
  const match = url.match(/github\.com\/([^/]+\/[^/]+)/);
  if (match) {
    const path = match[1];
    return path;
  }
};
