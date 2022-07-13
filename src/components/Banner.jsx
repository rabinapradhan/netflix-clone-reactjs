import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import requests from "../Request";
const Banner = () => {
  const [movies, setMovies] = useState([]);
  const movie = movies[Math.floor(Math.random() * movies.length)];
  useEffect(() => {
    axios(requests.popularMovies).then((res) => {
      setMovies(res.data.results);
    });
  }, []);
  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  return (
    <div className="w-full h-[400px] text-white">
      <div className="w-full h-full  ">
        <div className="absolute w-full h-[400px] bg-gradient-to-r from-black"></div>
        <img
          className="w-full h-full  object-cover"
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        />
        <div className="absolute w-full top-[20%] p-4  md:p-8">
          <h1 className="text-3xl md:text-5xl font-bold">{movie?.title}</h1>
          <div className="my-6">
            <Link
              to={`/movies/${movie?.id}`}
              className="border border-gray-300  text-white px-5 py-2
              bg-black opacity-75"
            >
              {" "}
              More Info
            </Link>
          </div>
          <p className=" w-full md:max-w-[70%] lg:max-w-[50%] text-gray-300 xl:max-w-[35%]">
            {truncateString(movie?.overview, 150)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
