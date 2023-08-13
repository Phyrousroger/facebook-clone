import React, { useState } from "react";
import profile from "../../../Assests/fb-img/profile-img.jpg";
import { NavMenu } from "../../../data/constant";

const Menu = () => {
  const data = NavMenu;
  const [menu, setmenu] = useState(data);
  const handle = (id) => {
    console.log(id);
    setmenu(
      menu?.map((nav) => {
        if (nav?.id === id) {
          console.log(nav.id);
          nav.show = !nav.show;
        } else {
          nav.show = false;
        }
        return nav;
      })
    );
  };

  return (
    <div className=" flex relative items-center justify-end md:justify-center gap-3 h-full">
      {data?.map((navmenu) => (
        <div key={navmenu.id}>
          {navmenu.type == "icon" ? (
            <div
              onClick={() => handle(navmenu.id)}
              className={`p-3 duration-150 text-xl  menu rounded-full ${
                navmenu?.show
                  ? "bg-[#3C4D63] text-[#3982E4]"
                  : "text-white  bg-[#3A3B3C] hover:bg-[#909396]"
              }`}
            >
              {navmenu.icons}
            </div>
          ) : (
            <div onClick={() => handle(navmenu.id)} className=" w-10">
              <img src={profile} alt="" className=" rounded-full " />
            </div>
          )}

          <div className=" absolute bg-[#242526] rounded-lg right-3 shadow-lg top-20">
            {navmenu?.show && <>{navmenu.component}</>}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Menu;
