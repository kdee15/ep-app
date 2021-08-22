import ArrowRightIcon from "../components/icons/arrow-right-icon";
import Button from "../components/ui/button";
import { useState, useEffect } from "react";
import EpisodeList from "../components/episodes/episode-list";

function HomePage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedEpisodes, setLoadedEpisodes] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const episodes = [];
        for (const episode in data._embedded.episodes) {
          episodes.push(data._embedded.episodes[episode]);
        }
        setIsLoading(false);
        setLoadedEpisodes(episodes);
      });
  }, []);

  if (isLoading) {
    <section>
      <p>Loading ...</p>
    </section>;
  }

  return (
    <section>
      <h1>All Episodes Page</h1>
      <EpisodeList episodes={loadedEpisodes} />
    </section>
  );
}

export default HomePage;
