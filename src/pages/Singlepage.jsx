import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Singlepage = () => {
  const [movie, setMovie] = useState({});

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=9190e4c097577c6ffc706d8a743f8f99&language=en-US`
      )
      .then((res) => setMovie(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <div className="w-full h-[400px]  bg-gradient-to-b from-black  ">
        <div className="w-full h-full">
          <div className="absolute w-full h-[400px]  bg-gradient-to-b from-black"></div>
          <img
            className="w-full h-full object-cover"
            src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
            alt={movie?.title}
          />
        </div>
      </div>

      <div className="max-w-screen-lg text-white mx-auto my-12 px-4">
        <h1 className="md:text-4xl text-3xl font-bold">
          {movie.original_title}
        </h1>
        {Array.isArray(movie.genres) &&
          movie.genres.map((genre) => (
            <small className="pr-3">{genre.name}</small>
          ))}
        <h2 className="my-4 text-xl font-bold">Overview</h2>
        <p>{movie.overview}</p>

        <ul className="text-base my-2">
          <li className="my-2">Revenue: {movie.revenue}</li>
          <li>Popularity: {movie.popularity}</li>
          <li className="my-2">Original_language: {movie.original_language}</li>

          <li>Release_date: {movie.release_date}</li>
        </ul>
      </div>
    </>
  );
};

export default Singlepage;
