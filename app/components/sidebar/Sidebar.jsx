"use client";
import React, { useState } from "react";
import {
  AiFillHome,
  AiOutlineMenuFold,
  AiOutlineMenuUnfold,
} from "react-icons/ai";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="flex w-full flex-row">
      <div
        className={`
          shrink-0
          overflow-x-hidden
          bg-nav-blue
          text-white
          shadow-lg
          transition-all
          duration-500
          ease-in-out
          ${isOpen ? "w-[300px]" : "w-16"}
        `}
      >
        <div
          className={`m-4 flex h-16 flex-row items-center ${
            !isOpen && " justify-center"
          }`}
        >
          <div
            className={`transition-all  ${
              isOpen ? "rotate-180 scale-0" : "scale-100 "
            }`}
          >
            <AiFillHome size={24} />
          </div>
          {isOpen && <p className={`truncate text-2xl`}>React Sandbox</p>}
        </div>
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
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Sidebar;
