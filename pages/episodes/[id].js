import { useRouter } from "next/router";
import ArrowRightIcon from "../../components/icons/arrow-right-icon";
import classes from "../../components/episodes/episode-detail.module.css";

export async function getServerSideProps({ query }) {
  const { id } = query;
  let episodeDetail = null;

  await fetch(
    "https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes"
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let episodes = [];
      for (const episode in data._embedded.episodes) {
        episodes.push(data._embedded.episodes[episode]);
      }
      return episodes;
    })
    .then((episodes) => {
      episodeDetail = episodes.filter((ep) => {
        return ep.id == id;
      });
      return episodeDetail;
    });

  return {
    props: {
      episodeDetail,
    },
  };
}

export default function Episode(props) {
  const epData = props.episodeDetail[0];
  const router = useRouter();
  return (
    <section className={classes.block}>
      <img
        className={classes.image}
        alt={epData.name}
        src={"/images/ep-" + epData.id + ".jpg"}
      />
      <div className={classes.cardregion}>
        <div className={classes.body}>
          <h1>{epData.name}</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at
            scelerisque lectus, vel semper massa. Morbi id quam rhoncus, sodales
            mauris vitae, ultrices urna. Nullam dapibus non ligula a commodo.
            Integer quis sapien finibus, pretium diam eu, porttitor turpis.
            Pellentesque non odio consequat, blandit nisl nec, venenatis felis.
            Quisque dapibus urna eget odio molestie lacinia. Nam a mi ac orci
            ultricies sollicitudin. Sed porta non purus elementum convallis.
            Cras sodales malesuada elit mattis gravida. Donec viverra
            sollicitudin erat, sed venenatis nisl. Duis fringilla pharetra
            imperdiet. In tristique erat metus.
          </p>
          <p>
            Pellentesque risus diam, imperdiet ac purus a, euismod efficitur
            dolor. Donec sed tristique erat. Ut elementum gravida nibh non
            lobortis. Integer id mauris velit. Pellentesque habitant morbi
            tristique senectus et netus et malesuada fames ac turpis egestas.
          </p>
        </div>
      </div>
      <button className="m-btn btn _back" onClick={() => router.back()}>
        <span className="icon">
          <ArrowRightIcon />
        </span>
        <span>BACK</span>
      </button>
    </section>
  );
}
