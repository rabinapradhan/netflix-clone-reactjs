import React from "react";
import logo from "../assets/avatar.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="flex justify-between p-4 top-0 z-[100] w-full absolute items-center ">
      <Link to={"/netflix-clone-reactjs"}>
        <h1 className="text-red-600 text-4xl font-extrabold cursor-pointer">
          NETFLIX
        </h1>
      </Link>

      <div className="w-[30px]">
        <img src={logo} alt="avatar" />
      </div>
    </div>
  );
};

export default Navbar;
