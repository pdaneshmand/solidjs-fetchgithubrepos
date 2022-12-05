import { Component, createEffect, For, Show } from "solid-js";
import { repos, setUsername, username } from "../../app";
import RepoCard, { Repo } from "../../components/repoCard";

const Home: Component = () => {
  const refetchWithUsername = (event: Event) => {
    event.preventDefault();
    const usernameInput = document.querySelector(
      "#usernameInput"
    ) as HTMLInputElement;
    setUsername(usernameInput.value);
  };

  return (
    <div>
      <form class="mb-3" onSubmit={(event) => refetchWithUsername(event)}>
        <input
          type="text"
          class="p-1 align-middle"
          id="usernameInput"
          required
        />
        <button class="btn btn-dark ms-3 w-auto">Fetch</button>
      </form>
      <h3>Guthub repos for {username()}</h3>
      <Show when={repos().length}>
        <For each={repos()} fallback={<div>No data</div>}>
          {(repo: Repo) => <RepoCard repo={repo} />}
        </For>
      </Show>
    </div>
  );
};

export default Home;
