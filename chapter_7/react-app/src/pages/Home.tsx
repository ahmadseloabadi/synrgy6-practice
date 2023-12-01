import { useEffect, useState } from "react";
import { PlusCircleIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";
// import Login from "./Login";

interface UserResponse {
  id: number;
  name: string;
  email: string;
  profile_picture_file?: string;
  password: string;
  role?: string;
}

interface CarResponse {
  id: number;
  car_name: string;
  car_rentperday: number;
  car_size: string;
  car_img?: string;
  created_by: UserResponse;
  updated_by: UserResponse;
  deleted_by: UserResponse;
  create_at?: Date;
  update_at?: Date;
  delete_at?: Date;
}

const cars_api_base_url = "http://localhost:8000";

export default function Home() {
  const [cars, setCars] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    //akan di running pertama kali saat halaman di load
    const fetchCars = async () => {
      const response = await fetch(cars_api_base_url + "/api/cars");
      const responseJSON = await response.json();

      console.log("response", responseJSON);
      setCars(responseJSON.data.cars);
    };

    const checkIsLoggedIn = () => {
      const accessToken = localStorage.getItem("access_token");

      if (accessToken) setIsLoggedIn(true);
      else setIsLoggedIn(false);
    };

    fetchCars();
    checkIsLoggedIn();
  }, []);

  const deleteCar = async (carId: number) => {
    try {
      const accessToken = localStorage.getItem("access_token");

      if (!accessToken) {
        // Handle the case when the user is not logged in
        console.error("User not logged in");
        return;
      }
      alert("yakin mau hapus??");

      const response = await fetch(`${cars_api_base_url}/api/cars/${carId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (response.ok) {
        // Update the state to reflect the changes after successful deletion
        setCars((prevCars) =>
          prevCars.filter((car: CarResponse) => car.id !== carId)
        );
      } else {
        // Handle errors if the deletion fails
        console.error("Failed to delete car:", response.statusText);
      }
    } catch (error: any) {
      console.error("Error deleting car:", error.message);
    }
  };

  const logoutHandler = () => {
    localStorage.removeItem("access_token");

    setIsLoggedIn(false);
  };
  return (
    <div className="flex w-full bg-gray-300 place-content-center min-h-screen">
      <div className="w-[800px] bg-gray-200 p-5 rounded-xl">
        <div className="flex justify-between ">
          <h1 className="font-bold text-3xl">Home</h1>
          {isLoggedIn ? (
            <button
              className="py-2 px-3 bg-black text-white rounded-lg"
              onClick={logoutHandler}
            >
              Logout
            </button>
          ) : (
            <Link to="/login">
              <button className="py-2 px-3 bg-black text-white rounded-lg">
                Login
              </button>
            </Link>
          )}
        </div>

        <div className="mt-[30px]">
          <div className="flex items-center justify-between">
            <h1 className="font-bold text-xl">List car</h1>
            <Link to="/create-car">
              <button className="py-2 px-3  text-white rounded-lg">
                <PlusCircleIcon className="w-8 h-8 text-black" />
              </button>
            </Link>
          </div>

          <div className="card-container mt-[10px] grid gap-y-4 grid-cols-2">
            {!cars.length /*jika carsnya tidak ada maka */ && (
              /*akan menjalankan "data kosong" */ <div>Data kosong</div>
            )}
            {cars.map((car: CarResponse) => (
              <div
                key={car.id}
                className="card flex flex-col gap-4 shadow bg-white border-0  text-sm p-6  rounded-xl  w-[351px] "
              >
                <img
                  className="h-[190px] w-full object-cover "
                  src={car.car_img}
                />
                <div className="card-body flex flex-col gap-2 ">
                  <p className="card-title font-semibold ">{car.car_name}</p>
                  <p className="font-semibold">
                    Rp {car.car_rentperday} / hari
                  </p>
                  <p className="font-normal">Car size : {car.car_size}</p>
                  <h3 className="font-normal">created_by</h3>
                  {car.created_by && (
                    <ul className="pl-4">
                      <li className="font-normal">id : {car.created_by.id}</li>
                      <li className="font-normal">
                        username : {car.created_by.name}
                      </li>
                      <li className="font-normal">
                        email : {car.created_by.email}
                      </li>
                    </ul>
                  )}

                  <h3 className="font-normal">updated_by</h3>
                  {car.updated_by.id ? (
                    <ul className="pl-4">
                      <li className="font-normal">id : {car.updated_by.id}</li>
                      <li className="font-normal">
                        username : {car.updated_by.name}
                      </li>
                      <li className="font-normal">
                        email : {car.updated_by.email}
                      </li>
                    </ul>
                  ) : (
                    <p className="card-title font-normal pl-4">
                      data belum diupdate
                    </p>
                  )}

                  <h3 className="font-normal mt-2">deleted_by</h3>

                  {car.deleted_by.id ? (
                    <ul className="pl-4">
                      <li className="font-normal">id : {car.deleted_by.id}</li>
                      <li className="font-normal">
                        username : {car.deleted_by.name}
                      </li>
                      <li className="font-normal">
                        email : {car.deleted_by.email}
                      </li>
                    </ul>
                  ) : (
                    <p className="card-title font-normal pl-4">
                      data belum didelete
                    </p>
                  )}

                  <div className="flex gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5 "
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <p className="font-light text-sm">
                      create_at{" "}
                      {car.create_at
                        ? car.create_at?.toString()
                        : "data blm dibuat"}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <p className="font-light text-sm">
                      update_at{" "}
                      {car.create_at
                        ? car.update_at?.toString()
                        : "data blm diupdate"}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <p className="font-light text-sm">
                      delete_at{" "}
                      {car.delete_at
                        ? car.delete_at?.toString()
                        : "data blm didelete"}
                    </p>
                  </div>
                  <div className="card-button mt-4 flex gap-2">
                    <button
                      className="inline-flex bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white border border-red-500 hover:border-transparent rounded  w-[143.5px] h-12 items-center justify-center"
                      onClick={() => deleteCar(car.id)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-[18px] h-[18px]"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                        />
                      </svg>
                      Delete
                    </button>
                    <button className="inline-flex bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-[143.5px] h-12 items-center justify-center">
                      <Link to={`/update-car/${car.id}`}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-[18px] h-[18px]"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                          />
                        </svg>
                        Edit
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
