import Link from "next/link";
import classes from "./main-header.module.css";
function MainHeader() {
  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        <Link href="/" className={classes.link}>
          <a className={classes.top}>HOME</a>
        </Link>
      </nav>
    </header>
  );
}

export default MainHeader;
