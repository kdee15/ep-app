import ArrowRightIcon from "../icons/arrow-right-icon";
import Button from "../ui/button";
import classes from "./episode-item.module.css";

function EpisodeItem(props) {
  const { name, image, id } = props;
  const exploreLink = `/episodes/${id}`;
  console.log("epi-item", props);
  return (
    <li>
      <div>
        <figure>
          <img src={"/" + image} alt={name} />
        </figure>
      </div>

      <div>
        <div>
          <h2>name:{name}</h2>
        </div>
        <div>
          <Button link={exploreLink}>
            <span>Explore Link</span>
            <span>{/* <ArrowRightIcon /> */}</span>
          </Button>
        </div>
      </div>
    </li>
  );
}

export default EpisodeItem;
