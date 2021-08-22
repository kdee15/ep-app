import { useState, useEffect } from "react";

const DUMMY_EVENTS = [
  {
    id: "e1",
    title: "Programming for everyone",
    description:
      "Everyone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.",
    location: "Somestreet 25, 12345 San Somewhereo",
    date: "2021-05-12",
    image: "images/coding-event.jpg",
  },
  {
    id: "e2",
    title: "Networking for introverts",
    description:
      "We know: Networking is no fun if you are an introvert person. That's why we came up with this event - it'll be so much easier. Promised!",
    location: "New Wall Street 5, 98765 New Work",
    date: "2021-05-30",
    image: "images/coffee-event.jpg",
  },
  {
    id: "e3",
    title: "Networking for extroverts",
    description:
      "You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.",
    location: "My Street 12, 10115 Broke City",
    date: "2022-04-10",
    image: "images/orange-event.jpg",
  },
];

export function getAllEvents() {
  return DUMMY_EVENTS;
}

export function getAllMeetups() {
  return DUMMY_EVENTS;
}

export function getEventById(id) {
  return DUMMY_EVENTS.find((event) => event.id === id);
}

export function getAllEpisodes() {
  return DUMMY_EVENTS;
}

export function getEpisodeById(id) {
  return DUMMY_EVENTS.find((episode) => episode.id === id);
}

export function getAllAPIEpisodes() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedEpisodes, setLoadedEpisodes] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    fetch("https://episodes-260ee-default-rtdb.firebaseio.com/episodes.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const episodes = [];
        for (const key in data) {
          const episode = {
            id: key,
            ...data[key],
          };
          episodes.push(episode);
        }
        setIsLoading(false);
        setLoadedEpisodes(episodes);
        console.log(data);
      });
  }, []);
}

export function getAPIEpisodeById(id) {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedEpisodes, setLoadedEpisodes] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    fetch("https://episodes-260ee-default-rtdb.firebaseio.com/episodes.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const episodes = [];
        for (const key in data) {
          const episode = {
            id: key,
            ...data[key],
          };
          episodes.push(episode);
        }
        setIsLoading(false);
        setLoadedEpisodes(episodes);
        console.log(data);
      });
  }, []);

  return episodes.find((episode) => episode.id === id);
}
