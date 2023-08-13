import axios from "axios";
import React, { useEffect, useState } from "react";
import { BiDotsHorizontalRounded } from "react-icons/bi";
// import { leftlist } from "../../data/component.json";

const Noti = () => {
  const [notiList, setnotiList] = useState([]);

  const getList = async () => {
    const { data } = await axios.get("http://localhost:3000/posts");
    setnotiList(data);
    // console.log(data);
  };
  useEffect(() => {
    // setLoading(true);
    getList();
    // setLoading(true);
  }, []);

  return (
    <div className=" flex gap-2 left-scroll p-2">
      <div className=" h-[500px] w-96">
        <div className=" flex justify-between items-center">
          <h1 className=" text-2xl font-semibold text-white">Notification</h1>
          <div className=" p-1 hover:bg-[#3A3B3C] cursor-pointer rounded-full my-auto duration-200">
            <BiDotsHorizontalRounded className=" text-white text-2xl m-1 " />
          </div>
        </div>
        <ul
          className="  flex flex-col rounded-lg p-3
    "
        >
          {notiList?.map((noti) => (
            <li
              key={noti.id}
              className=" relative flex gap-2 items-center duration-150 hover:bg-[#4E4F50] hover:first:visible px-2 m-2 rounded cursor-pointer select-none"
            >
              <div className=" invisible absolute p-1 cursor-pointer rounded-full my-auto duration-200 right-2 bg-[#18191A]">
                <BiDotsHorizontalRounded className=" text-white text-2xl m-1 " />
              </div>
              <div className=" w-12">
                <img
                  src={noti.profile}
                  alt=""
                  className=" rounded-full mx-auto"
                />
              </div>
              
              <div className="">
                <p className=" text-white font-normal">
                  {noti.desc} Facebook to Shared this post
                </p>
                <span className=" text-gray-300">This is my Firstpost</span>
                <br />
                <span className=" text-xs text-white font-semibold">
                  {noti.date} ago
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Noti;
