import { aiGenerateModel } from "@/components/ai_model/ai_model";
const githubToken = process.env.NEXT_PUBLIC_GET_AC_TOKEN;

async function fetchGitHubRepositories(query: string) {
  const url = `https://api.github.com/search/issues?q=is:open+is:issue+language:${query}"`;
  try {
    const response = await fetch(url, {
      headers: {
        Accept: "application/vnd.github.v3+json",
        Authorization: process.env.GITHUB_TOKEN
          ? `Bearer ${process.env.GITHUB_TOKEN}`
          : "",
      },
    });

    if (!response.ok) {
      throw new Error(
        `GitHub API error: ${response.status} ${response.statusText}`
      );
    }

    const data = await response.json();
    return data.items;
  } catch (error) {
    console.error("Error fetching data from GitHub API:", error);
    return [];
  }
}

export const getOpenSourceSuggestions = async (generateText: string) => {
  const result = await fetchGitHubRepositories(generateText);
  return result;
};
