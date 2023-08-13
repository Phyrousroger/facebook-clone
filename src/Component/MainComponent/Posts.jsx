import React from "react";
import profile from "../../../Assests/fb-img/profile-img.jpg";
import { BiDotsHorizontalRounded, BiWorld } from "react-icons/bi";
import { BsDot } from "react-icons/bs";
import { TbThumbUp, TbShare3 } from "react-icons/tb";
import { RxCross2 } from "react-icons/rx";
import { FiMessageSquare } from "react-icons/fi";

const Posts = () => {
  return (
    
      <div
        className=" w-11/12 bg-[#242526] rounded-lg  flex flex-col justify-between
          "
      >
        <div className="flex justify-between p-3">
          <div className=" flex justify-start gap-2 items-center">
            <div className=" border-2 cursor-pointer border-[#3982E4] rounded-full overflow-hidden p-[2px]">
              <img
                src={profile}
                alt=""
                className=" w-8 rounded-full hover:scale-95 duration-200 hover:opacity-90"
              />
              
            </div>
            <div className="">
              <p className=" cursor-pointer text-white mb-0 font-medium hover:underline duration-200">
                Phyo Thu Kha
              </p>
              <small
                className=" text-white text-sm cursor-pointer
             flex items-center gap-0 hover:underline duration-200"
              >
                1h
                <BsDot />
                <BiWorld />
              </small>
            </div>
            {/* </div> */}
          </div>
          <div className=" flex justify-end text-[#909396]">
            <div className=" p-1 hover:bg-[#3A3B3C] cursor-pointer rounded-full my-auto duration-200">
              <BiDotsHorizontalRounded className=" text-white text-2xl m-1 " />
            </div>
            <div className=" p-1 hover:bg-[#3A3B3C] cursor-pointer rounded-full my-auto duration-200">
              <RxCross2 className=" text-white text-2xl m-1 " />
            </div>
          </div>
        </div>
        <p className=" my-2 pl-3 text-white text-lg">
          This is my first project
        </p>
        <div className=" overflow-hidden flex gap-2">
          <img
            src={profile}
            alt=""
            className=" hover:scale-105 h-36 duration-200"
          />
          <img
            src={profile}
            alt=""
            className=" hover:scale-105 h-36 duration-200"
          /><img
          src={profile}
          alt=""
          className=" hover:scale-105 h-36 duration-200"
        />
          <img
            src={profile}
            alt=""
            className=" hover:scale-105 h-36 duration-200"
          />
        </div>
        <div className="flex justify-between mx-2 text-white">
          <span className=" flex items-center gap-1 hover:underline duration-200">
            <TbThumbUp />
            100
          </span>
          <div className=" flex gap-3">
            <span className=" flex items-center gap-1 hover:underline duration-200">
              <FiMessageSquare />
              20
            </span>
            <span className=" flex items-center gap-1 hover:underline duration-200">
              <TbShare3 />
              30
            </span>
          </div>
        </div>
        <hr className=" border-[#909396] mx-2" />
        
        <div className=" flex justify-center">
          <div className="duration-200 hover:bg-[#3A3B3C] cursor-pointer p-2 hover:rounded-lg m-2 w-1/3 flex gap-2 justify-center items-center relative">
            <TbThumbUp className=" text-white font-normal text-xl" />
            <p className=" text-white text-sm font-bold ">Like</p>
          </div>
          <div className="duration-200 hover:bg-[#3A3B3C] cursor-pointer p-2 hover:rounded-lg m-2 w-1/3 flex gap-2 justify-center items-center relative">
            <FiMessageSquare className=" text-white font-normal text-xl" />
            <p className=" text-white text-sm font-bold ">Comment</p>
          </div>
          <div className="duration-200 hover:bg-[#3A3B3C] cursor-pointer p-2 hover:rounded-lg m-2 w-1/3 flex gap-2 justify-center items-center relative">
            <TbShare3 className=" text-white font-normal text-xl" />
            <p className=" text-white text-sm font-bold ">Share</p>
          </div>
        

        </div>
        <hr className=" border-[#909396] mx-2 mb-3" />
      </div>
    
  );
};

export default Posts;
