import { useContext } from "react";
import ArrowRightIcon from "../icons/arrow-right-icon";
import Button from "../ui/button";
import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";

function MeetupItem(props) {
  const { title, image, id } = props;
  const exploreLink = `/meetups/${id}`;
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <Button link={exploreLink}>
            <span>Explore Link</span>
            <span>{/* <ArrowRightIcon /> */}</span>
          </Button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
