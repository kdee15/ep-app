import EpisodeItem from "./episode-item";
// import classes from "./episode-item.module.css";
function EpisodeList(props) {
  const { episodes } = props;
  return (
    <ul>
      {episodes.map((episode) => (
        <li>
          <div>
            <figure>
              <img src={"/" + episode.image} alt={episode.name} />
            </figure>
          </div>

          <div>
            <div>
              <h2>name:{episode.id}</h2>
            </div>
            <div></div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default EpisodeList;
