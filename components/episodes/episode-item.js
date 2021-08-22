import ArrowRightIcon from "../icons/arrow-right-icon";
import Button from "../ui/button";
import classes from "./episode-item.module.css";

function EpisodeItem(props) {
  const { name, image, id } = props;
  const exploreLink = `/episodes/${id}`;
  console.log("epi-item", props);
  return (
    <div className="col-12 col-md-6 episode-card">
      <picture className="card-image">
        <source
          media="(min-width: 991px)"
          alt={name}
          srcset={"/images/ep-" + id + ".jpg"}
        />
        <source
          media="(min-width: 0px)"
          alt={name}
          srcset={"/images/ep-" + id + "-sm.jpg"}
        />
        <img className="image" alt={name} src={"/images/ep-" + id + ".jpg"} />
      </picture>

      <div>
        <h2>
          {id}:{name}
        </h2>
      </div>
      <Button link={exploreLink}>
        <span>Explore Link</span>
        <span className={classes.icon}>
          <ArrowRightIcon />
        </span>
      </Button>
    </div>
  );
}

export default EpisodeItem;
