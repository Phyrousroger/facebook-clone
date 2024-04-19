import { Link } from "react-router-dom";
import facebook from "../../../Assests/fb-img/facebook-logo.png";
import { AiOutlineSearch } from "react-icons/ai";

const Logo = () => {
  return (
    <nav className="flex items-center">
      <Link to="/">
        <img src={facebook} alt="" className="w-10 m-3" />
      </Link>
      <div className="bg-[#3A3B3C] lg:flex overflow-hidden items-center lg:justify-around justify-center lg:w-56 lg:h-10 lg:p-3 p-2 rounded-full">
        <AiOutlineSearch className="text-2xl text-gray-100 lg:mr-2 mr-0" />
        <input
          type="text"
          className=" bg-[#3A3B3C] text-white w-full outline-none border-none lg:inline hidden"
          placeholder="Search Facebook"
        />
      </div>
    </nav>
  );
};

export default Logo;
