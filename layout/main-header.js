import Link from "next/link";
import classes from "./home.module.css";
function MainHeader() {
  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        <Link href="/">
          <a className={classes.link}>HOME</a>
        </Link>
      </nav>
    </header>
  );
}

export default MainHeader;
