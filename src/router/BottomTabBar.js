import React from "react";
import homeIcon from "../assets/images/home.png";
import feedIcon from "../assets/images/icon.png";
import profileIcon from "../assets/images/profile.png";
import { Home } from "../pages";

const menuOptions = [
  {
    page: Home,
    src: homeIcon,
    alt: "home.png",
  },
  {
    page: Home,
    src: feedIcon,
    alt: "icon.png",
  },
  {
    page: Home,
    src: profileIcon,
    alt: "profile.png",
  },
];

export const BottomTabBar = () => {
  const [page, setPage] = React.useState(Home);

  return (
    <>
      <div
        className="bg-primary w-full relative block overflow-auto"
        style={{
          height: "92vh",
        }}
      >
        {page}
      </div>
      <ul
        className="flex bg-primary text-white justify-center p-2 fixed bottom-0 w-full gap-20"
        style={{
          height: "8vh",
        }}
      >
        {menuOptions.map((menu, index) => (
          <li key={index} className="flex items-center">
            <button href={menu.path} onClick={() => setPage(menu.page)}>
              <img src={menu.src} alt={menu.alt} className="w-10 h-10" />
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
