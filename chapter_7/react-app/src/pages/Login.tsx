import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const tweets_api_base_url = "http://localhost:8000";

  return (
    <div className="flex items-center  justify-center px-6 py-8 mx-auto md:h-screen  lg:py-0">
      <div className="form p-7 dark:bg-gray-900 rounded-xl ">
        <h1 className="flex items-center justify-center mb-6 text-2xl font-semibold dark:text-white">
          Login
        </h1>

        <form className=" w-full max-w-sm ">
          <div className="mb-3 flex flex-row">
            <div className="md:w-1/3">
              <label
                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                htmlFor="inline-full-name"
              >
                Email :
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-full-name"
                type="email"
                value={email}
                onChange={({ target }) => {
                  setEmail(target.value);
                }}
                placeholder="Masukkan email"
              />
            </div>
          </div>
          <div className="mb-3 flex flex-row">
            <div className="md:w-1/3">
              <label
                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                htmlFor="inline-full-name"
              >
                Password :
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-full-name"
                type="password"
                value={password}
                onChange={({ target }) => {
                  setPassword(target.value);
                }}
                placeholder="Masukkan password"
              />
            </div>
          </div>
          <div className="flex justify-center">
            <button
              className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded "
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
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
