import "../styles/normalize.css";
import "../styles/bootstrap-grid.min.css";
import "../styles/styles.css";
import Layout from "../layout/layout";

function KDApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default KDApp;
