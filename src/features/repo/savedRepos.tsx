import { Component, createSignal, For } from "solid-js";
import RepoCard, { Repo } from "../../components/repoCard";

const reposFromLocalStorage = JSON.parse(
  localStorage.getItem("savedRepos") || "[]"
);
const [savedRepos, setSavedRepos] = createSignal(
  reposFromLocalStorage as Repo[]
);

const SavedRepos: Component = () => {
  console.log('hello')
  return (
    <div>
      <h2>Your saved repos</h2>
      <For each={savedRepos()}>{(repo: Repo) => <RepoCard repo={repo} />}</For>
    </div>
  );
};

export { setSavedRepos, savedRepos };
export default SavedRepos;
