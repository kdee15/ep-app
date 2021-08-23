import EpisodeItem from "./episode-item";
import classes from "./episode-list.module.css";
function EpisodeList(props) {
  const { episodes } = props;
  return (
    <section className={classes.episodes}>
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
    </section>
  );
}

export default EpisodeList;
