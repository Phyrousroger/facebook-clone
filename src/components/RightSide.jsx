import { BiVideoPlus, BiSearch, BiDotsHorizontalRounded } from "react-icons/bi";
// import profile from "../../Assests/fb-img/profile-img.jpg";
import { posts } from "../../data/component.json";

const RightSide = () => {
  return (
    <div className=" fixed ">
      <div className=" flex justify-center mb-3 w-72">
        <p className=" text-xl text-gray-300 font-bold w-1/2">Contacts</p>
        <div className=" flex justify-evenly items-center w-1/2">
          <div className=" p-2 text-gray-300  hover:bg-red-400 rounded-full">
            <BiVideoPlus className=" text-xl m-1" />
          </div>
          <BiSearch className=" text-gray-300 text-xl" />
          <BiDotsHorizontalRounded className=" text-gray-300 text-xl" />
        </div>
      </div>
      <div className="left-scroll scroll-m-0">
        <ul className=" h-screen flex flex-col ">
          {posts.map((post) => (
            <li
              key={post.id}
              className=" flex gap-3 items-center hover:bg-[#4E4F50] duration-150 p-2 rounded"
            >
              <img
                src={post.profile}
                alt=""
                className=" w-7 rounded-full mr-2"
              />
              <p className=" text-white font-bold">{post.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RightSide;
