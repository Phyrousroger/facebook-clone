import React, { useEffect, useState } from "react";
import { LeftSidebar } from "../../data/component.json";
import axios from "axios";
import { AiOutlineSearch } from "react-icons/ai";
import { menulist } from "../../data/constant";

const Menu = () => {
  const [leftlist, setleftlist] = useState([]);

  const getList = async () => {
    const { data } = await axios.get("http://localhost:3000/leftsideList");
    setleftlist(data);
  };
  useEffect(() => {
    getList();
  }, []);

  return (
    <div className="p-3">
      <h1 className=" text-2xl text-white font-bold mb-2">Menu</h1>
      <div className=" flex gap-2 left-scroll ">
        <div className=" h-[500px]">
          <div className="bg-[#18191A] rounded-md p-3">
            <div className="bg-[#3A3B3C] mx-auto flex overflow-hidden items-center justify-center py-2 px-3 rounded-full">
              <AiOutlineSearch className="text-2xl text-gray-100 mr-2" />
              <input
                type="text"
                className=" bg-[#3A3B3C] text-white w-full outline-none border-none"
                placeholder="Search Facebook"
              />
            </div>
            <ul
              className="  flex flex-col rounded-lg p-3 w-[300px]
    "
            >
              {leftlist?.map((left) => (
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
            </ul>
          </div>
        </div>
        <ul
          className=" sticky top-0 flex flex-col gap-2 w-48 rounded-lg h-full bg-[#18191A]
    "
        >
          {menulist.map((left) => (
            <>
              <li
                key={left.id}
                className=" flex gap-2 items-center duration-150 hover:bg-[#4E4F50] mx-2 m-2 p-2 rounded cursor-pointer select-none"
              >
                {/* <img src={} alt="" className=" w-7 rounded-full mr-2" /> */}
                <div className="text-xl text-white">{left.icons}</div>
                <p className=" text-white font-normal">{left?.title}</p>
              </li>
              {left.divider ? (
                <hr className=" border-gray-300 border-1 mx-2" />
              ) : (
                <></>
              )}
            </>
          ))}
        </ul>
      </div>
    </div>
    // </div>
  );
};

export default Menu;
