import { Component } from "solid-js";
import { savedRepos, setSavedRepos } from "../features/repo/savedRepos";

export type Repo = {
  id: string;
  html_url: string;
  name: string;
  description: string;
  stargazers_count: string;
  owner: {
    login: string;
  };
};

interface Props {
  repo: Repo;
}

const saveRepo = (repo: Repo) => {
  setSavedRepos([repo, ...savedRepos()]);
  localStorage.setItem("savedRepos", JSON.stringify(savedRepos()));
};

const unsaveRepo = (repoId: string) => {
  const nextState = savedRepos()?.filter((item) => item.id !== repoId);
  setSavedRepos(nextState);
  localStorage.setItem("savedRepos", JSON.stringify(savedRepos()));
};

const repoIsSaved = (repoId: string) => {
  const repo = savedRepos()?.filter((item) => item.id === repoId);
  return repo?.length;
};

const RepoCard: Component<Props> = ({ repo }) => {
  return (
    <div class="card mb-3">
      <div class="card-header">&#11088; stars: {repo.stargazers_count}</div>
      <div class="card-body">
        <a
          href={repo.html_url}
          class="h4 card-title text-decoration-none"
          target="_blank"
          rel="noreferrer"
        >
          <strong>
            {repo.owner?.login}/{repo.name}
          </strong>
          <p class="card-text mt-2">{repo.description}</p>
        </a>
        {repoIsSaved(repo.id) ? (
          <button
            class="btn btn-danger mt-3"
            onClick={() => unsaveRepo(repo.id)}
          >
            Unsave
          </button>
        ) : (
          <button class="btn btn-success mt-3" onClick={() => saveRepo(repo)}>
            Save
          </button>
        )}
      </div>
    </div>
  );
};

export default RepoCard;
