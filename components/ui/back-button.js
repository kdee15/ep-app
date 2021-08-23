import Link from "next/link";
import classes from "./button.module.css";

function ButtonBack(props) {
  return (
    <Link href={props.link}>
      <a className={classes.btn}>GO BACK</a>
    </Link>
  );
}

export default ButtonBack;
