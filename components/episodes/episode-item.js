import ArrowRightIcon from "../icons/arrow-right-icon";
import Button from "../ui/button";
import Card from "../ui/card";
import classes from "./episode-item.module.css";

function EpisodeItem(props) {
  const { name, image, id } = props;
  const exploreLink = `/episodes/${id}`;
  return (
    <div className="col-12 col-md-6">
      <Card>
        <div className={classes.wrapper}>
          <picture className={classes.picture}>
            <source
              media="(min-width: 991px)"
              alt={name}
              srcSet={"/images/ep-" + id + ".jpg"}
              className={classes.image}
            />
            <source
              media="(min-width: 0px)"
              alt={name}
              srcSet={"/images/ep-" + id + "-sm.jpg"}
              className={classes.image}
            />
            <img
              className={classes.image}
              alt={name}
              src={"/images/ep-" + id + ".jpg"}
            />
          </picture>

          <div className={classes.body}>
            <h3>{name}</h3>
            <Button link={exploreLink}>
              <span>Explore Link</span>
              <span className={classes.icon}>
                <ArrowRightIcon />
              </span>
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default EpisodeItem;
