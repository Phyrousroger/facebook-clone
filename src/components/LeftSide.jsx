import axios from "axios";
import React, { useEffect, useState } from "react";
import { LeftSidebar } from "../../data/component.json";
import profile from "../../Assests/fb-img/profile-img.jpg";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import Footer from "./Footer";

const LeftSide = () => {
  const [show, setShow] = useState(true);
  const [leftlist, setleftlist] = useState([]);
  const [isloading, setLoading] = useState(false);

  const getList = async () => {
    const { data } = await axios.get("http://localhost:3000/leftsideList");
    setShow(!show);
    setleftlist(data);
  };

  // const {id,image,desc}=data
  useEffect(() => {
    setLoading(true);
    getList();
  }, []);
  return (
    <ul
      className=" left-scroll  fixed h-screen
    "
    >
      <li className=" flex items-center justify-start hover:bg-[#4E4F50] duration-150 p-2 rounded">
        <div className=" w-12">
          <img src={profile} alt="" className=" w-7 rounded-full mx-auto" />
        </div>
        <p className=" text-white font-normal">Phyo Thu Kha</p>
      </li>
      {LeftSidebar.map((left) => (
        <li
          key={left.id}
          className=" flex items-center duration-150 hover:bg-[#4E4F50] p-2 rounded cursor-pointer select-none"
        >
          <div className=" w-12">
            <img
              src={left.image}
              alt=""
              className=" w-7 rounded-full mx-auto"
            />
          </div>
          <p className=" text-white font-normal">{left.desc}</p>
        </li>
      ))}
      {show &&
        leftlist.map((left) => (
          <li
            key={left.id}
            className=" flex items-center duration-150 hover:bg-[#4E4F50] p-2 rounded cursor-pointer select-none"
          >
            <div className=" w-12">
              <img
                src={left.image}
                alt=""
                className=" w-7 rounded-full mx-auto"
              />
            </div>
            <p className=" text-white font-normal">{left.desc}</p>
          </li>
        ))}
      <li
        onClick={getList}
        className=" flex items-center duration-150 hover:bg-[#4E4F50] p-2 rounded cursor-pointer select-none"
      >
        <div className="p-1 mx-2 bg-[#3A3B3C] rounded-full">
          {show ? (
            <FiChevronUp className=" text-white" />
          ) : (
            <FiChevronDown className=" text-white" />
          )}
        </div>
        {isloading ? (
          <p className=" text-white font-normal">
            See {show ? " Less" : " More"}
          </p>
        ) : (
          "Loading"
        )}
      </li>

      <li className=" mt-10 mb-5 flex justify-between hello duration-500">
        <p className=" text-xl text-white ">Your shortcuts</p>
        <span className=" text-lg text-[#3982E4] font-normal"> Edit </span>
      </li>
      <li className=" flex items-center justify-start hover:bg-[#4E4F50] duration-150 p-2">
        <img
          src="https://scontent.xx.fbcdn.net/v/t1.18169-9/1483207_10150001784124944_240076833_n.png?stp=cp0_dst-png_p50x50&_nc_cat=1&ccb=1-7&_nc_sid=e007fa&_nc_ohc=_IcMcSLx4DMAX8iDrzg&_nc_ht=scontent.xx&oh=00_AfB74jOpkt6FxHOmA9n29ZJdOVS9GqZWLR36e6q58e4yzA&oe=644E2707"
          alt=""
          className=" w-7 mr-3 rounded"
        />
        <p className=" text-white font-bold">Myanmar Ai Community</p>
      </li>
      <li className=" flex items-center justify-start hover:bg-[#4E4F50] duration-150 p-2">
        <img
          src="https://scontent.xx.fbcdn.net/v/t1.18169-9/1483207_10150001784124944_240076833_n.png?stp=cp0_dst-png_p50x50&_nc_cat=1&ccb=1-7&_nc_sid=e007fa&_nc_ohc=_IcMcSLx4DMAX8iDrzg&_nc_ht=scontent.xx&oh=00_AfB74jOpkt6FxHOmA9n29ZJdOVS9GqZWLR36e6q58e4yzA&oe=644E2707"
          alt=""
          className=" w-7 mr-3 rounded"
        />
        <p className=" text-white font-bold">Myanmar Ai Community</p>
      </li>
    </ul>
  );
};

export default LeftSide;
