// App.tsx
import "./App.css";
import useSWR from "swr";
import ProviderButton from "remote1/button";
const fetcher = (url) => fetch(url).then((res) => res.json());

const App = () => {
  const { data, error, isLoading } = useSWR(
    "https://api.github.com/repos/vercel/swr",
    fetcher
  );

  if (error) return "An error has occurred.";
  if (isLoading) return "Loading...";
  return (
    <>
      <div>
        <h1>{data.name}</h1>
        <p>{data.description}</p>
        <strong>👁 {data.subscribers_count}</strong>{" "}
        <strong>✨ {data.stargazers_count}</strong>{" "}
        <strong>🍴 {data.forks_count}</strong>
      </div>
      <ProviderButton />
    </>
  );
};

export default App;
