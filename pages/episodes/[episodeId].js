import { useRouter } from "next/router";
import { getEpisodeById } from "../../dummy-data";

function EpisodeDetailPage(props) {
  const router = useRouter();
  const episodeId = router.query.episodeId;
  const episode = getEpisodeById(episodeId);
  const { date, address, image, imageAlt } = props;
  if (!episode) {
    return <p>No events found</p>;
  }

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
