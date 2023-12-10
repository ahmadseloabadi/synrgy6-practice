import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import CreateCar from "./pages/CreateCar";
import UpdateCar from "./pages/UpdateCar";
import Index from "./pages/index";
import SearchCar from "./pages/SearchCar";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create-car" element={<CreateCar />} />
        <Route path="/update-car/:carId" element={<UpdateCar />} />
        <Route path="/index" element={<Index />} />
        <Route path="/search-car" element={<SearchCar />} />
      </Routes>
    </>
  );
}

export default App;
