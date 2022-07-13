import React from "react";
import Banner from "../components/Banner";
import Row from "../components/Row";
import requests from "../Request";
import { Link } from "react-router-dom";
const Homepage = () => {
  return (
    <Link to={"/netflix-clone-reactjs"}>
      <Banner />
      <Row title="Popular" fetchURL={requests.popularMovies} />
      <Row title="Upcoming" fetchURL={requests.Upcoming} />
      <Row title="Trending" fetchURL={requests.trendingMovies} />
      <Row title="Top Rated" fetchURL={requests.topRatedMovies} />
    </Link>
  );
};

export default Homepage;
