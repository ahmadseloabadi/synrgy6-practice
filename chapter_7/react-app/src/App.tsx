import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/Login";
import CreateCar from "./pages/CreateCar";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/createcar" element={<CreateCar />} />
      </Routes>
    </>
  );
}

export default App;
