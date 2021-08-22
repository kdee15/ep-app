import EpisodeItem from "./episode-item";
import classes from "./episode-item.module.css";
function EpisodeList(props) {
  const { episodes } = props;
  return (
    <div className="container">
      <div className="row">
        {episodes.map((episode) => (
          <EpisodeItem
            key={episode.id}
            id={episode.id}
            image={episode.id}
            name={episode.name}
          />
        ))}
      </div>
    </div>
  );
}

export default EpisodeList;
