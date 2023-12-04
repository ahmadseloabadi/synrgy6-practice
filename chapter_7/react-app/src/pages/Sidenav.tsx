import { HomeIcon, TruckIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

export default function Sidenav() {
  return (
    <div className="flex flex-col gap-y-5 bg-blue-700 w-[70px] items-center min-h-screen  ">
      <div className="logo  h-9 w-9 bg-indigo-200 mt-4"></div>

      <Link
        to="/"
        className="grid justify-center font-light text-xs content-center mt-2"
      >
        <div className="grid justify-center">
          <HomeIcon className="h-6 w-6 text-white" />
        </div>
        Dashboard
      </Link>
      <Link
        to="/"
        className="grid justify-center font-light text-xs content-center"
      >
        <div className="grid justify-center">
          <TruckIcon className="h-6 w-6 text-white" />
        </div>
        Cars
      </Link>

      {/* <div className="grid justify-center w-full">

      </div> */}
    </div>
  );
}
