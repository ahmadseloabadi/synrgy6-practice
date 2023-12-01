import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import CreateCar from "./pages/CreateCar";
import UpdateCar from "./pages/UpdateCar";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create-car" element={<CreateCar />} />
        <Route path="/update-car/:carId" element={<UpdateCar />} />
      </Routes>
    </>
  );
}

export default App;
