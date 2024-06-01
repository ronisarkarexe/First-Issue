export interface Repository {
  id: string;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  liveUrl: string;
  repoUrl: string;
  techStack: string[];
}

export interface LabelName {
  name: string;
}

export interface RepositoryIssue {
  html_url: string;
  state: string;
  title: string;
  comments: number;
  assignee: {
    avatar_url: string;
  };
  labels: LabelName[];
}
