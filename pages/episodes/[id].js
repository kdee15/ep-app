// import styles from "../../../styles/Home.module.css";

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
  return (
    <section className="o-episode-detail">
      <img
        className="a-image "
        alt={epData.name}
        src={"/images/ep-" + epData.id + ".jpg"}
      />
      <div className="o-card">
        <div className="m-card-body">
          <h1>{epData.name}</h1>
        </div>
      </div>
    </section>
  );
}
