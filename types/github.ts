export interface Repo {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  description: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  updated_at: string;
  topics?: string[];
}

export interface GitHubData {
  user: {
    login: string;
    id: number;
    avatar_url: string;
    html_url: string;
    name?: string;
    bio?: string;
    location?: string;
  };
  repos: Repo[];
}
