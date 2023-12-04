// Navbar.tsx
import {
  ListBulletIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import React from "react";
import { Link } from "react-router-dom";

interface NavbarProps {
  onSidebarToggle: () => void;
  isLoggedIn: boolean;
  onLogout: () => void;
}

const Navbar: React.FC<NavbarProps> = ({
  onSidebarToggle,
  isLoggedIn,
  onLogout,
}) => {
  return (
    <div className="navbar flex  shadow items-center p-4 relative h-[70px] min-h-max ">
      <div className="flex justify-around w-1/6">
        <div className="logo w-24 h-8 bg-indigo-200 "></div>
        <button
          className="text-gray-700 cursor-pointer"
          onClick={onSidebarToggle}
        >
          <ListBulletIcon className="h-6 w-6 text-gray-400" />
        </button>
      </div>

      <div className="flex justify-end  w-5/6">
        <form>
          <div className="relative flex">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 ">
              <MagnifyingGlassIcon className="h-6 w-6 text-gray-400" />
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full h-9 px-3 py-2 ps-10 text-sm border border-gray-400 rounded-sm "
              placeholder="Search"
              required
            />
            <button
              type="submit"
              className="inline-flex bg-transparent hover:bg-blue-900 dark:text-blue-900 font-bold hover:text-white border dark:border-blue-900 hover:border-transparent rounded-sm  w-[71px] h-9 px-3 py-2 items-center justify-center"
            >
              Search
            </button>
          </div>
        </form>

        {isLoggedIn ? (
          <button
            className="ml-4 py-2 px-3 bg-black text-white rounded-lg"
            onClick={onLogout}
          >
            Logout
          </button>
        ) : (
          <Link to="/login">
            <button className="ml-4 py-2 px-3 bg-black text-white rounded-lg">
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
