import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login"
import Register from "./components/Register";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

function App() {
  return (
    <>
    <Navbar/>
      <Routes>
      <Route exact path="/Home" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />

      </Routes>
    </>
  );
}

export default App;