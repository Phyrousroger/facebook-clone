import axios from "axios";
import React, { useEffect, useState } from "react";
import profile from "../../Assests/fb-img/profile-img.jpg";

import Footer from "./Footer";
import { category } from "../../data/constant";
const Account = () => {
  const data = category;

  return (
    <main className=" flex gap-2 left-scroll ">
      <div className=" h-[500px]">
        <div className="rounded shadow-2xl p-3">
          <div className=" flex gap-2 items-center justify-start hover:bg-[#4E4F50] rounded-md duration-150 p-3 ">
            <div className="">
              <img
                src={profile}
                alt=""
                className=" w-10 rounded-full mx-auto"
              />
            </div>
            <p className=" text-white text-lg font-semibold">Phyo Thu Kha</p>
          </div>
          <hr className=" border-gray-100 opacity-60 " />
          <p className=" ml-3  text-[#3982E4] font-medium mt-2 text-lg">
            See all profiles
          </p>
        </div>

        <ul
          className="  flex flex-col rounded-lg p-3 w-[400px]
    "
        >
          {data?.map(({ name, icons, up }) => (
            <li
              key={name}
              className=" flex justify-between items-center duration-150 hover:bg-[#4E4F50] p-2 rounded cursor-pointer select-none"
            >
              <div className=" flex items-center gap-3">
                <div className=" p-3 duration-150 text-xl text-white bg-[#909396] menu rounded-full ">
                  {icons}
                </div>

                <p className=" text-white font-normal text-lg">{name}</p>
              </div>
              <p className="text-xl text-white">{up}</p>
            </li>
          ))}
        </ul>
        <Footer />
      </div>
    </main>
  );
};

export default Account;
