import { useRouter } from "next/router";
import { useState, useEffect } from "react";

function EpisodeDetailPage(props) {
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

  const router = useRouter();
  const episodeId = router.query.episodeId;
  // const episode = getAPIEpisodeById(episodeId);
  const { date, address, image, imageAlt } = props;
  // if (!episode) {
  //   return <p>No events found</p>;
  // }

  return (
    <div class="container">
      <div class="row">
        <figure class="col-12 col-md-5">
          <img src={`/${episode.image}`} alt={episode.imageAlt} />
        </figure>
        <div class="col-12 col-md-7">
          <h1>{episode.title}</h1>
        </div>
      </div>
    </div>
  );
}

export default EpisodeDetailPage;
