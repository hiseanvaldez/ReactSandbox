"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  AiFillHome,
  AiOutlineGithub,
  AiOutlineMenuFold,
  AiOutlineMenuUnfold,
} from "react-icons/ai";
import MenuItem from "./MenuItem";

const items = [
  {
    title: "Image Uploader",
    route: "/uploader",
  },
  {
    title: "Formik",
    route: "/formik",
  },
  {
    title: "Progress Bar",
    route: "/progressbar",
  },
  {
    title: "PokéAPI",
    route: "/pokeapi",
  },
];

const Sidebar = ({ children }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="flex w-full flex-row">
      <div
        className={`
          flex 
          shrink-0
          cursor-pointer
          flex-col
          justify-between
          bg-nav-blue
          text-white
          shadow-lg
          transition-all
          duration-500
          ease-in-out
          ${isOpen ? "max-w-[300px]" : "max-w-0"}
        `}
      >
        <div>
          <button
            className="m-4 flex flex-row items-center gap-2"
            onClick={() => router.push("/")}
          >
            <AiFillHome size={24} />
            <p className={`truncate text-2xl font-semibold`}>React Sandbox</p>
          </button>
          <div className="my-4 flex flex-col justify-center">
            {items.map((item, idx) => (
              <MenuItem key={idx} item={item} />
            ))}
          </div>
        </div>

        <a href="https://github.com/hiseanvaldez" target="_blank">
          <div
            className="m-4 flex flex-row items-center gap-2"
            onClick={() => router.push("/")}
          >
            <AiOutlineGithub size={24} />
            <p className="truncate">hiseanvaldez</p>
          </div>
        </a>
      </div>
      <div className="flex h-full w-full flex-col">
        <div className="flex w-full items-center py-2">
          <button
            className="mr-8 flex h-12 w-12 items-center justify-center"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <AiOutlineMenuFold size={24} />
            ) : (
              <AiOutlineMenuUnfold size={24} />
            )}
          </button>
        </div>
        <>{children}</>
      </div>
    </div>
  );
};

export default Sidebar;
