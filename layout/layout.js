import { Fragment } from "react";
import MainFooter from "./main-footer";
import MainHeader from "./main-header";
import classes from "./home.module.css";
function Layout(props) {
  return (
    <Fragment>
      <MainHeader />
      <main className={classes.main}>{props.children}</main>
      <MainFooter />
    </Fragment>
  );
}

export default Layout;
