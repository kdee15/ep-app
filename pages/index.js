import { useState, useEffect } from "react";
import EpisodeList from "../components/episodes/episode-list";
import HeroBlock from "../components/ui/hero-block";

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
    return (
      <section className="o-preloader d-flex">
        <p>Loading ...</p>
      </section>
    );
  }

  return (
    <section>
      <HeroBlock />
      <div className="content-block container">
        <h1>Rick and Morty Episodes Page</h1>
        <p>A quick little NextJS demo</p>
      </div>
      <EpisodeList episodes={loadedEpisodes} />
    </section>
  );
}

export default HomePage;
