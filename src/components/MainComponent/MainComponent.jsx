import React from "react";


const MainComponent = ({ main }) => {
  const { id, icon, desc, file } = main;
  return (
    <>
      <form

        className="duration-200 hover:bg-[#3A3B3C] cursor-pointer p-2 hover:rounded-lg mt-2 w-1/3 flex gap-2 justify-center items-center relative"
      >
        <img src={icon} alt="" />
        <div className=" absolute opacity-0 left-2">{file}</div>
        <p className=" text-white text-xs lg:text-base font-bold ">{desc}</p>
      </form>
    </>
  );
};

export default MainComponent;
