import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const tweets_api_base_url = "http://localhost:8000";

  return (
    <div className="flex items-center  justify-end  mx-auto md:h-screen  lg:py-0">
      <img src="../src/assets/bg-login.png" className="w-2/3" />
      <div className="form p-7s rounded-xl w-1/3">
        <h1 className="flex justify-center mb-6 text-2xl font-semibold dark:text-white">
          Login
        </h1>

        <form className=" w-full justify-center  grid gap-y-4">
          <div className="logo w-[100px] h-9 bg-gray-300"></div>
          <h1 className="text-2xl font-bold">Welcome, Admin BCR</h1>
          <div className="grid w-full">
            <label
              className=" font-light text-sm  mb-1 md:mb-0 pr-4"
              htmlFor="email"
            >
              Email :
            </label>
            <input
              className=" appearance-none border-2 border-gray-200 py-2 px-3 rounded w-[370px] leading-tight focus:outline-none focus:bg-white  font-light text-sm "
              id="email"
              type="email"
              value={email}
              onChange={({ target }) => {
                setEmail(target.value);
              }}
              placeholder="Masukkan email"
            />
          </div>

          <div className="grid justify-center w-full">
            <label
              className="font-light text-sm   mb-1 md:mb-0 pr-4"
              htmlFor="password"
            >
              Password :
            </label>
            <input
              className=" appearance-none border-2 border-gray-200 py-2 px-3 rounded w-[370px] leading-tight focus:outline-none focus:bg-white  font-light text-sm "
              id="password"
              type="password"
              value={password}
              onChange={({ target }) => {
                setPassword(target.value);
              }}
              placeholder="Masukkan password"
            />
          </div>

          <div className="flex justify-center">
            <button
              className="shadow bg-blue-900 hover:bg-blue-800 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-3 rounded w-[370px] "
              typeof="button"
              onClick={async (e) => {
                e.preventDefault();

                const payload = {
                  email: email,
                  password: password,
                };

                const response = await fetch(
                  tweets_api_base_url + "/api/auth/login",
                  {
                    method: "post",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(payload),
                  }
                );

                const responseJson = await response.json();

                if (response.status !== 200) {
                  alert("error: " + responseJson.message);
                }

                localStorage.setItem(
                  "access_token",
                  responseJson.data.access_token
                );

                // If login succeed, redirect ke home
                navigate("/");
              }}
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
