import ArrowRightIcon from "../icons/arrow-right-icon";
import Button from "../ui/button";
import classes from "./episode-item.module.css";

function EpisodeItem(props) {
  const { title, image, id } = props;
  const exploreLink = `/episodes/${id}`;
  return (
    <div class="col-12 col-md-6">
      <div className={classes.episodeCard}>
        <figure class="m-0 p-0" className={classes.m_card_image}>
          <img class={classes.a_image} src={"/" + image} alt={title} />
        </figure>
      </div>

      <div>
        <div>
          <h2>{title}</h2>
        </div>
        <div>
          <Button link={exploreLink}>
            <span>Explore Link</span>
            <span>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default EpisodeItem;
