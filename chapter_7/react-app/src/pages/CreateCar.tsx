import { useState } from "react";
import { useNavigate } from "react-router-dom";

const tweets_api_base_url = "http://localhost:8000";

export default function CreateCar() {
  const navigate = useNavigate();
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
    <div>
      <h1>Create New Car!</h1>

      <form>
        <input
          value={car_name}
          onChange={({ target }) => {
            setCarName(target.value);
          }}
          placeholder="Enter car name"
        />

        <input
          value={car_size}
          onChange={({ target }) => {
            setCarSize(target.value);
          }}
          placeholder="Enter car size"
        />

        <input
          type="number"
          value={car_rentperday}
          onChange={({ target }) => {
            setCarRentPerDay(target.value);
          }}
          placeholder="Enter rent per day"
        />

        <input type="file" onChange={handleFileChange} />

        <button
          onClick={async (e) => {
            e.preventDefault();

            const formData = new FormData();
            formData.append("car_name", car_name);
            formData.append("car_size", car_size);
            formData.append("car_rentperday", car_rentperday);

            // Check if car_img is not null before appending
            if (car_img) {
              formData.append("car_img", car_img);
            }

            const response = await fetch(tweets_api_base_url + "/api/cars", {
              method: "post",
              headers: {
                Authorization: `Bearer ${localStorage.getItem("access_token")}`,
              },
              body: formData,
            });

            const responseJson = await response.json();

            if (response.status !== 201) {
              alert("error: " + responseJson.message);
            }

            // If create car succeed, redirect to home
            navigate("/");
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
