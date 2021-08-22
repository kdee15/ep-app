import Link from "next/link";
import HomeIcon from "../components/icons/home-icon";
import classes from "./main-header.module.css";
function MainHeader() {
  return (
    <header className={classes.header}>
      <Link href="/" className={classes.link}>
        <span>HOME</span>
      </Link>
      <div className={classes.logo}></div>
    </header>
  );
}

export default MainHeader;
