export interface Issue {
  comment: string;
  number: number;
  created_at: string;
  labels: { name: string; color: string }[];
  status: string;
  title: string;
  url: string;
  repository_url: string;
  user: {
    username: string;
    url: string;
  }
}
