import EpisodeItem from "./episode-item";
// import classes from "./episode-item.module.css";
function EpisodeList(props) {
  const { items } = props;
  return (
    <div class="row">
      {items.map((episode) => (
        <EpisodeItem
          key={episode.id}
          id={episode.id}
          title={episode.title}
          image={episode.image}
        />
      ))}
    </div>
  );
}

export default EpisodeList;
