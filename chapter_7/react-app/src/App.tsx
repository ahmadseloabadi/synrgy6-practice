import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import CreateCar from "./pages/CreateCar";
import UpdateCar from "./pages/UpdateCar";
import Index from "./pages/index";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create-car" element={<CreateCar />} />
        <Route path="/update-car/:carId" element={<UpdateCar />} />
        <Route path="/index" element={<Index />} />
      </Routes>
    </>
  );
}

export default App;
