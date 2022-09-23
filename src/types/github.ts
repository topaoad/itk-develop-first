export type GitHubRepository = {
  description: string;
  forks_count: number;
  full_name: string;
  html_url: string;
  languages_url: string;
  stargazers_count: number;
};

// RESTAPIを基準にGraphQLに置き換える
export type GitHubRepositoryGraphQL = {
  name: string;
  description: string;
  forkCount: number;
  languages_url: string;
  stargazerCount: number;
  url: string;
};
