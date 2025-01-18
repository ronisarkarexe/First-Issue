import contributors from "../contributors.json";

export const fetchAllUserData = async (): Promise<Record<string, any[]>> => {
  const baseUrl = "/data";
  const data: Record<string, any[]> = {};
  await Promise.all(
    contributors.map(async (contributor) => {
      const username = contributor.replace(".json", "");
      const response = await fetch(`${baseUrl}/${contributor}`);
      if (!response.ok) {
        throw new Error(`Failed to fetch data from ${contributor}`);
      }
      const projects = await response.json();
      data[username] = projects;
    })
  );
  return data;
};

export const fetchUserData = async (username: string) => {
  const response = await fetch(`/data/${username}`);
  return response.json();
};
