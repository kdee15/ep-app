import ArrowRightIcon from "../icons/arrow-right-icon";
import Button from "../ui/button";
import classes from "./episode-item.module.css";

function EpisodeItem(props) {
  const { name, image, id } = props;
  const exploreLink = `/episodes/${id}`;
  return (
    <div className="col-12 col-md-6">
      <div className="o-card">
        <picture className="m-card-image">
          <source
            media="(min-width: 991px)"
            alt={name}
            srcSet={"/images/ep-" + id + ".jpg"}
            className="a-image"
          />
          <source
            media="(min-width: 0px)"
            alt={name}
            srcSet={"/images/ep-" + id + "-sm.jpg"}
            className="a-image"
          />
          <img
            className="a-image"
            alt={name}
            src={"/images/ep-" + id + ".jpg"}
          />
        </picture>

        <div className="m-card-body">
          <h3>{name}</h3>
          <Button link={exploreLink}>
            <span>Explore Link</span>
            <span className={classes.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default EpisodeItem;
