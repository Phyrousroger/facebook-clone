import {
  FiChevronRight,
  FiSettings,
  FiLogOut,
  FiBookOpen,
} from "react-icons/fi";
import { MdHelp, MdFeedback, MdGroups } from "react-icons/md";
import { CgMenuGridR } from "react-icons/cg";
import {
  BsFillBellFill,
  BsCalendarPlus,
  BsMessenger,
  BsFillMoonFill,
  BsFlag,
} from "react-icons/bs";
import { BiEdit, BiVideoPlus } from "react-icons/bi";
import Menu from "../src/components/Menu";
import Messenegr from "../src/components/Messenegr";
import Noti from "../src/components/Noti";
import Account from "../src/components/Account";
import { HiSpeakerphone } from "react-icons/hi";
export const category = [
  {
    name: "Settings and privacy",
    icons: <FiSettings />,
    up: <FiChevronRight />,
  },
  {
    name: "Help & support",
    icons: <MdHelp />,
    up: <FiChevronRight />,
  },
  {
    name: "Display & accessibility",
    icons: <BsFillMoonFill />,
    up: <FiChevronRight />,
  },
  {
    name: "Give feedback",
    icons: <MdFeedback />,
  },
  {
    name: "Log Out",
    icons: <FiLogOut />,
  },
];

export const NavMenu = [
  {
    id: 1,
    name: "menu",
    icons: <CgMenuGridR />,
    type: "icon",
    component: <Menu />,
    show: false,
  },
  {
    id: 2,
    name: "messenger",
    icons: <BsMessenger />,
    type: "icon",
    component: <Messenegr />,
    show: false,
  },
  {
    id: 3,
    name: "noti",
    icons: <BsFillBellFill />,
    type: "icon",
    component: <Noti />,
    show: false,
  },
  {
    id: 4,
    name: "account",
    icons: "profile",
    type: "image",
    component: <Account />,
    show: false,
  },
];

export const maincomponent = [
  {
    id: 1,
    icon: "../Assests/fb-img/video.png",
    desc: "Live Video",
  },
  {
    id: 2,
    icon: "../Assests/fb-img/photo.png",
    desc: "Photo/Video",
    file: (
      <input
        //   onChange={handleFileChange}
        type="file"
        className=""
      />
    ),
  },
  {
    id: 3,
    icon: "../Assests/fb-img/smile.png",
    desc: "Feeling Activity",
  },
];

export const menulist = [
  {
    id: 1,
    icons: <BiEdit />,
    title: "Post",
    desc: "Share a post on NewsFeed",
  },
  {
    id: 2,
    icons: <FiBookOpen />,
    title: "Story",
    desc: "Share a photo or write something",
  },
  {
    id: 3,
    icons: <BiVideoPlus />,
    title: "Room",
    desc: "Video chat with anyone, on or off facebook,without time limits.",
    divider: true,
  },
  {
    id: 4,
    icons: <BsFlag />,
    title: "Page",
    desc: "Connect and share with customers or fans",
  },
  {
    id: 5,
    icons: <HiSpeakerphone />,
    title: "Ad",
    desc: "Advertise your business, brand organization.",
  },
  {
    id: 6,
    icons: <MdGroups />,
    title: "Group",
    desc: "Connect with people who share your interests.",
  },
  {
    id: 7,
    icons: <BsCalendarPlus />,
    title: "Event",
    desc: "Bring people together with a public or private event.",
  },
];
