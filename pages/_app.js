import "../styles/normalize.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/styles.css";
import { Fragment } from "react";
import Header from "../layout/head";
import Layout from "../layout/layout";

function KDApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Header />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Fragment>
  );
}

export default KDApp;
