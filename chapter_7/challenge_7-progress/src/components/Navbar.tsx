// Navbar.tsx
import {
  ChevronDownIcon,
  ListBulletIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { Dropdown } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

interface NavbarProps {
  onSidebarToggle: () => void;
  isLoggedIn: boolean;
  onLogout: () => void;
}

export default function Navbar({
  onSidebarToggle,
  isLoggedIn,
  onLogout,
}: NavbarProps) {
  const email = localStorage.getItem("email");
  const profile = localStorage.getItem("profile");
  return (
    <div className="navbar flex  shadow items-center p-4 relative h-[70px] min-h-max ">
      <div className="flex justify-around w-1/6 md:justify-between ">
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
              className="inline-flex bg-transparent hover:bg-blue-900 text-blue-800 font-bold hover:text-white border border-blue-800 hover:border-transparent rounded-sm  w-[71px] h-9 px-3 py-2 items-center justify-center"
            >
              Search
            </button>
          </div>
        </form>
        <div className="flex items-center gap-x-2 ml-6 w-[143px]">
          <div className="rounded-full bg-indigo-200 w-9 h-9 flex justify-center items-center ">
            <h1 className="font-bold text-base ">
              {profile ? (
                <img src={profile} className="rounded-full" />
              ) : (
                Array.from(email || "who am i")[0]
              )}
            </h1>
          </div>
          <div className="w-[80px] text-ellipsis overflow-x-clip items-center">
            <Dropdown
              label=""
              inline
              renderTrigger={() => (
                <span>
                  {email || "who am i"}
                  <ChevronDownIcon className=" h-5 w-5 text-black bg-white absolute top-6 right-6  " />
                </span>
              )}
              content="max-w-fit"
            >
              <Dropdown.Item content="fit">
                {isLoggedIn ? (
                  <button
                    className=" w-full py-2 px-3 bg-transparent text-black rounded-lg"
                    onClick={onLogout}
                  >
                    Logout
                  </button>
                ) : (
                  <Link to="/login">
                    <button className=" w-full py-2 px-3 bg-transparent text-black rounded-lg">
                      Login
                    </button>
                  </Link>
                )}
              </Dropdown.Item>
            </Dropdown>
          </div>
        </div>
      </div>
    </div>
  );
}
