"use client";

import { usePathname, useRouter } from "next/navigation";
import React from "react";

const MenuItem = ({ item }) => {
  const router = useRouter();
  const isCurrentPath = usePathname() === item.route;

  return (
    <div
      className={`
        cursor-pointer
        border-white
        p-4
        hover:border-l-4
        hover:bg-nav-hover
        hover:font-semibold
        ${isCurrentPath && "border-l-4 bg-nav-selected font-semibold"}
      `}
      onClick={() => router.push(item.route)}
    >
      <p className={`truncate`}>{item.title}</p>
    </div>
  );
};

export default MenuItem;
