import React from "react";
// import LeftSide from "../Component/LeftSide";
import LeftSide from "../components/LeftSide";
import profile from "../../Assests/fb-img/profile-img.jpg";
import { maincomponent } from "../../data/constant";
import Navbar from "../components/Nav/Navbar";
import RightSide from "../components/RightSide";
import Posts from "../components/MainComponent/Myday";
import Myday from "../components/MainComponent/Myday";
import MainComponent from "../components/MainComponent/MainComponent";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";

const Home = () => {
  return (
    <main className="bg-[#18191A] ">
      <div className=" max-w-7xl container mx-auto">
        <Navbar />
        <div className=" md:grid grid-flow-col grid-cols-4 gap-3">
          <div className="left-list md:inline hidden bg-[#18191A] relative top-0  ">
            <LeftSide />
          </div>
          <div className=" md:col-span-2 col-span-full flex flex-col place-items-center gap-5">
            <div className="">
              <Myday />
            </div>

            <div
              className=" w-11/12 bg-[#242526] rounded-lg p-3 shadow-md
          "
            >
              <div className=" flex justify-start items-center gap-3 mb-3">
                <div className="">
                  <img src={profile} alt="" className=" w-12 rounded-full" />
                </div>
                <div className=" w-full rounded-full overflow-hidden bg-[#3A3B3C]">
                  <input
                    type="text"
                    placeholder="What's on your mind, Phyo?"
                    className=" bg-[#3A3B3C] ml-1 p-3 outline-none border-none w-full text-white placeholder-white placeholder:font-normal placeholder:text-lg"
                  />
                </div>
              </div>
              <hr className=" border-[#909396]" />
              <div className=" flex justify-center">
                {maincomponent.map((main) => (
                  <MainComponent main={main} key={main.id} />
                ))}
              </div>
            </div>
            <div
              className=" w-11/12 bg-[#242526] rounded-lg p-3 
          "
            >
              <div className=" flex justify-start items-center cursor-pointer">
                <div className=" flex gap-3 border-2 border-[#3982E4] px-4 py-2 rounded-full">
                  <img
                    src="../../Assests/fb-img/video.png"
                    alt=""
                    className=""
                  />
                  <p className="text-white">Create Room</p>
                </div>
              </div>
            </div>

            <Posts />
            <Posts />
            <Posts />
            <div
              className=" w-11/12 p-3 bg-[#242526] rounded-lg  flex flex-col justify-between
          "
            >
              <div className=" flex justify-between ">
                <p className=" text-lg text-gray-300 font-bold">
                  People You May Know
                </p>

                <div className=" p-1 hover:bg-[#3A3B3C] cursor-pointer rounded-full my-auto duration-200">
                  <BiDotsHorizontalRounded className=" text-white text-2xl m-1 " />
                </div>
                {/* <BiDotsHorizontalRounded className=" text-white text-2xl m-1 " /> */}
              </div>
              <div className=" flex gap-2">
                <div className=" relative  rounded-md shadow-sm shadow-slate-50 overflow-hidden">
                  <div className=" bg-gray-200 opacity-80 cursor-pointer p-1 rounded-full absolute text-lg text-black right-2 m-1 top-2">
                    <RxCross2 className=" text-lg" />
                  </div>
                  <img src={profile} alt="" className="" />
                  <div className=" bg-[#242526] p-2">
                    <p className=" text-white text-md">Phyo Thu Kha</p>
                    <small className=" text-gray-300">6 mutual friend</small>
                    <button className=" bg-blue-500 text-center py-1 rounded-md text-white font-normal w-full">
                      Add Friend
                    </button>
                  </div>
                </div>
                <div className=" relative  rounded-md shadow-sm shadow-slate-50 overflow-hidden">
                  <div className=" bg-gray-200 opacity-80 cursor-pointer p-1 rounded-full absolute text-lg text-black right-2 m-1 top-2">
                    <RxCross2 className=" text-lg" />
                  </div>
                  <img src={profile} alt="" className="" />
                  <div className=" bg-[#242526] p-2">
                    <p className=" text-white text-md">Phyo Thu Kha</p>
                    <small className=" text-gray-300">6 mutual friend</small>
                    <button className=" bg-blue-500 text-center py-1 rounded-md text-white font-normal w-full">
                      Add Friend
                    </button>
                  </div>
                </div>
                <div className=" relative  rounded-md shadow-sm shadow-slate-50 overflow-hidden">
                  <div className=" bg-gray-200 opacity-80 cursor-pointer p-1 rounded-full absolute text-lg text-black right-2 m-1 top-2">
                    <RxCross2 className=" text-lg" />
                  </div>
                  <img src={profile} alt="" className="" />
                  <div className=" bg-[#242526] p-2">
                    <p className=" text-white text-md">Phyo Thu Kha</p>
                    <small className=" text-gray-300">6 mutual friend</small>
                    <button className=" bg-blue-500 text-center py-1 rounded-md text-white font-normal w-full">
                      Add Friend
                    </button>
                  </div>
                </div>
                <div className=" relative  rounded-md shadow-sm shadow-slate-50 overflow-hidden">
                  <div className=" bg-gray-200 opacity-80 cursor-pointer p-1 rounded-full absolute text-lg text-black right-2 m-1 top-2">
                    <RxCross2 className=" text-lg" />
                  </div>
                  <img src={profile} alt="" className="" />
                  <div className=" bg-[#242526] p-2">
                    <p className=" text-white text-md">Phyo Thu Kha</p>
                    <small className=" text-gray-300">6 mutual friend</small>
                    <button className=" bg-blue-500 text-center py-1 rounded-md text-white font-normal w-full">
                      Add Friend
                    </button>
                  </div>
                </div>
              </div>

              {/* <div className="duration-200 cursor-pointer p-2 text-center relative"> */}

              <p className=" text-[#3982E4] text-sm font-bold text-center mt-4">
                See All
              </p>

              {/* </div> */}
            </div>
          </div>

          <div className=" md:inline hidden col-span-1">
            <RightSide />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
