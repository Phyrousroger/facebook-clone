import React from "react";
import { AiFillHome } from "react-icons/ai";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { HiUserGroup } from "react-icons/hi";
import { CgGames } from "react-icons/cg";
import { NavLink } from "react-router-dom";

import Logo from "./Logo";
import Menu from "./Menu";

const Navbar = () => {
  return (
    <header className=" bg-[#242526] grid grid-flow-col md:grid-cols-4 grid-cols-2 gap-3  mb-2 md:p-0 p-2 sticky top-0 z-50">
      <Logo />

      <nav className=" md:col-span-2 col-auto md:flex hidden items-center gap-2 h-full w-full justify-center">
        <NavLink to="/" className="text-white ">
          <div className="mb-1 duration-150 bg-[#242526] hover:bg-[#909396] hover:rounded lg:w-32 w-24 h-full  p-3">
            <AiFillHome className=" text-3xl  mx-auto " />
          </div>
        </NavLink>

        <NavLink to="/video" className="text-white ">
          <div className="mb-1 duration-150 bg-[#242526] hover:bg-[#909396] hover:rounded h-full w-24 lg:w-32 p-3">
            <MdOutlineOndemandVideo className=" text-3xl  mx-auto " />
          </div>
        </NavLink>
        <NavLink to="/group" className=" text-white ">
          <div className="mb-1 duration-150 bg-[#242526] hover:rounded lg:w-32 w-24 h-full  p-3">
            <HiUserGroup className=" text-3xl  mx-auto " />
          </div>
        </NavLink>
        <NavLink to="/game" className="text-white">
          <div className="mb-1 text-white bg-[#242526] duration-150 hover:bg-[#909396] hover:rounded w-24 lg:w-32 h-full p-3">
            <CgGames
              className=" text-3xl
                mx-auto"
            />
          </div>
        </NavLink>
      </nav>

      <Menu />
    </header>
  );
};

export default Navbar;
