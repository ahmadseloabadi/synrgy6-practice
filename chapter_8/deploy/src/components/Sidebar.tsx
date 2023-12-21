// Sidebar.tsx
import React from "react";
import { Link, useLocation } from "react-router-dom";

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

export default function Sidebar({ isOpen, toggleSidebar }: SidebarProps) {
  const location = useLocation();
  return (
    <div
      className={`sidebar w-[220px] flex flex-col gap-y-2 bg-white ${
        isOpen ? "" : "hidden"
      }`}
    >
      {location.pathname == "/dashboard" ? (
        <>
          <Link
            to={"/dashboard"}
            className=" h-10 w-full  mt-5 font-bold text-base py-3 pl-6 pointer-events-none text-gray-500"
          >
            Dashboard
          </Link>
          <Link
            to={"/dashboard"}
            className=" h-10 w-full hover:bg-indigo-200 font-bold text-sm py-3 pl-6"
          >
            Dashboard
          </Link>
        </>
      ) : (
        <>
          <Link
            to={"/"}
            className=" h-10 w-full  mt-5 font-bold text-sm py-3 pl-6 pointer-events-none text-gray-500"
          >
            CARS
          </Link>
          <Link
            to={"/"}
            className=" h-10 w-full hover:bg-indigo-200 font-bold text-sm py-3 pl-6"
          >
            List Car
          </Link>
        </>
      )}
    </div>
  );
}
