import { Component, createEffect, createSignal } from "solid-js";
import Nav from "./components/nav";
import GitHubServices from "./shared/services/moduleservices";
import { Repo } from "./components/repoCard";
import { Routes } from "./routes";

const [username, setUsername] = createSignal("your git hub default username");
const [repos, setRepos] = createSignal<Repo[]>([]);

createEffect(() => {
  new GitHubServices<Repo>().getAll(username()).then((data) => {
    setRepos(data);
  });
});

const App: Component = () => {
  return (
    <div class="container">
      <Nav />
      <Routes />
    </div>
  );
};

export { username, setUsername, repos };
export default App;
