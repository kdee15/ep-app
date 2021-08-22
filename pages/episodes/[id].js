import Head from "next/head";
import Image from "next/image";
import { useState, useEffect } from "react";
// import styles from "../../../styles/Home.module.css";

export async function getServerSideProps({ query }) {
  const { id } = query;
  let episodeDetail = null;
  // const res = await fetch(`${defaultEndpoint}${id}`);
  // const data = await res.json();

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
      // setIsLoading(false);
      // setLoadedEpisodes(episodes);
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
  // const { name, image, origin, status, species } = data;
  console.log("ss", props);
  return <div>hello - {props.episodeDetail[0].id}</div>;
}
