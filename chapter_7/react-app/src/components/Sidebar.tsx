// Sidebar.tsx
import React from "react";
import { Link } from "react-router-dom";

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  return (
    <div
      className={`sidebar w-[290px] flex flex-col gap-y-2 ${
        isOpen ? "" : "hidden"
      }`}
    >
      <Link
        to={"/"}
        className=" h-10 w-full hover:bg-indigo-200 mt-4 font-bold text-sm py-3 pl-6"
      >
        CARS
      </Link>
      <Link
        to={"/"}
        className=" h-10 w-full hover:bg-indigo-200 font-bold text-sm py-3 pl-6"
      >
        List Car
      </Link>
    </div>
  );
};

export default Sidebar;
