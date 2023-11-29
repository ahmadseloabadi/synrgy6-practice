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

interface CarEntity {
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

  const logoutHandler = () => {
    localStorage.removeItem("access_token");

    setIsLoggedIn(false);
  };
  return (
    <div className="flex w-full bg-gray-300 place-content-center min-h-screen">
      <div className="w-[600px] bg-gray-200 p-5">
        <div className="flex justify-between">
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
            <h1 className="font-bold text-xl">List Tweet</h1>
            <Link to="/create-tweet">
              <button className="py-2 px-3  text-white rounded-lg">
                <PlusCircleIcon className="w-8 h-8 text-black" />
              </button>
            </Link>
          </div>

          <div className="mt-[10px]">
            {!cars.length /*jika carsnya ada maka */ && (
              /*akan menjalankan "data kosong" */ <div>Data kosong</div>
            )}
            {cars.map((car: CarEntity) => (
              <div key={car.id}>
                <p>id car {car.id}</p>
                <p>Car name {car.car_name}</p>
                <p>Car rentperday {car.car_rentperday}</p>
                <p>Car size {car.car_size}</p>
                <p>Car img {car.car_img}</p>
                <h3>created_by</h3>
                <ul>
                  <li>{car.created_by.id}</li>
                  <li>{car.created_by.name}</li>
                  <li>{car.created_by.email}</li>
                  <li>{car.created_by.profile_picture_file}</li>
                </ul>
                <h3>updated_by</h3>
                <ul>
                  <li>{car.updated_by.id}</li>
                  <li>{car.updated_by.name}</li>
                  <li>{car.updated_by.email}</li>
                  <li>{car.updated_by.profile_picture_file}</li>
                </ul>
                <h3>deleted_by</h3>
                <ul>
                  <li>{car.deleted_by.id}</li>
                  <li>{car.deleted_by.name}</li>
                  <li>{car.deleted_by.email}</li>
                  <li>{car.deleted_by.profile_picture_file}</li>
                </ul>

                <p>create_at {car.create_at?.toString()}</p>
                <p>update_at {car.update_at?.toString()}</p>
                <p>delete_at {car.delete_at?.toString()}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
