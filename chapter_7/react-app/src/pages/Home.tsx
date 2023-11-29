import { useEffect, useState } from "react";
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

  useEffect(() => {
    //akan di running pertama kali saat halaman di load
    const fetchCars = async () => {
      const response = await fetch(cars_api_base_url + "/api/cars");
      const responseJSON = await response.json();

      console.log("response", responseJSON);
      setCars(responseJSON.data.cars);
    };

    fetchCars();
  }, []);

  return (
    <div>
      <h1>Home</h1>
      <button
        onClick={() => {
          localStorage.removeItem("access_token");
        }}
      >
        Logout
      </button>

      <div>
        <h2>List cars</h2>

        <div>
          {!cars.length /*jika carsnya ada maka */ && (
            /*akan menjalankan "data kosong" */ <div>Data kosong</div>
          )}

          {cars &&
            cars.map((car: CarEntity) => (
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
  );
}
