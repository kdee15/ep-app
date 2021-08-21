import { getAllEpisodes } from "../dummy-data";
import EpisodeList from "../components/episodes/episode-list";

function HomePage() {
  const allEpisodes = getAllEpisodes();
  return (
    <section class="container">
      <h1>Welcome to the next project</h1>
      <EpisodeList items={allEpisodes} />
    </section>
  );
}

export default HomePage;
