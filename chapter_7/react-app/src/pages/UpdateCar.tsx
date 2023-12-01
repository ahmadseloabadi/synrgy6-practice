import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const tweets_api_base_url = "http://localhost:8000";

export default function UpdateCar() {
  const navigate = useNavigate();
  const { carId } = useParams();
  const [car_name, setCarName] = useState("");
  const [car_size, setCarSize] = useState("");
  const [car_rentperday, setCarRentPerDay] = useState("");
  const [car_img, setCarImg] = useState(null);

  const handleFileChange = (e: any) => {
    const files = e.target.files;

    if (files && files.length > 0) {
      setCarImg(files[0]);
    }
  };
  return (
    <div className="flex items-center  justify-center px-6 py-8 mx-auto md:h-screen  lg:py-0">
      <div className="form p-7 dark:bg-gray-900 rounded-xl ">
        <h1 className="flex items-center justify-center mb-6 text-2xl font-semibold dark:text-white">
          Create New Car!
        </h1>

        <form className="w-full max-w-sm">
          <div className="mb-3 flex flex-row">
            <div className="md:w-1/3">
              <label
                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                htmlFor="inline-full-name"
              >
                Name car
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-full-name"
                type="text"
                value={car_name}
                onChange={({ target }) => {
                  setCarName(target.value);
                }}
                placeholder="Enter car name"
              />
            </div>
          </div>

          <div className="mb-3 flex flex-row">
            <div className="md:w-1/3">
              <label
                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                htmlFor="inline-full-name"
              >
                car size
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-full-name"
                type="text"
                value={car_size}
                onChange={({ target }) => {
                  setCarSize(target.value);
                }}
                placeholder="Enter car size"
              />
            </div>
          </div>

          <div className="mb-3 flex flex-row">
            <div className="md:w-1/3">
              <label
                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                htmlFor="inline-full-name"
              >
                car rentperday
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-full-name"
                type="number"
                value={car_rentperday}
                onChange={({ target }) => {
                  setCarRentPerDay(target.value);
                }}
                placeholder="Enter rent per day"
              />
            </div>
          </div>

          <div className="mb-3 flex flex-row">
            <div className="md:w-1/3">
              <label
                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                htmlFor="inline-full-name"
              >
                car img
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-full-name"
                type="file"
                onChange={handleFileChange}
              />
            </div>
          </div>
          <div className="flex justify-center">
            <button
              className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded "
              typeof="button"
              onClick={async (e) => {
                e.preventDefault();

                const formData = new FormData();
                formData.append("car_name", car_name);
                formData.append("car_size", car_size);
                formData.append("car_rentperday", car_rentperday);
                if (car_img) {
                  formData.append("car_img", car_img);
                }

                const response = await fetch(
                  tweets_api_base_url + "/api/cars/" + carId,
                  {
                    method: "PATCH",
                    headers: {
                      Authorization: `Bearer ${localStorage.getItem(
                        "access_token"
                      )}`,
                    },
                    body: formData,
                  }
                );

                const responseJson = await response.json();

                if (response.status !== 200 || 201) {
                  alert("error: " + responseJson.message);
                }

                navigate("/");
              }}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
