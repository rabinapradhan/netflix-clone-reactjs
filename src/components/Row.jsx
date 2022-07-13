import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Row = ({ title, fetchURL }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(fetchURL).then((res) => setMovies(res.data.results));
  }, [fetchURL]);

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <>
      <h2 className="text-white  text-2xl mx-8 my-6 md:mx-10 font-bold">
        {title}
      </h2>

      <div className=" md:max-w-7xl  max-w-lg  mx-auto">
        <Slider {...settings}>
          {movies.map((item) => (
            <Link to={`/movies/${item.id}`}>
              <div className=" relative px-2 cursor-pointer">
                <img
                  className=" w-full  h-full"
                  src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
                  alt={item?.title}
                />
                <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80  opacity-0 hover:opacity-100 "></div>

                <div className="w-full py-3  whitespace-normal  md:text-base text-sm  bg-black text-white mt-2">
                  {item?.title}
                </div>
              </div>
            </Link>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Row;
