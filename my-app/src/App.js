import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login"
import Register from "./components/Register";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import PasswordReset from "./components/Passwordrest";
import Activated from "./components/Activated";
import Forget from "./components/Forget";

function App() {
  return (
    <>
    <Navbar/>
      <Routes>
      <Route exact path="/Home" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/forgot/:token" element={<PasswordReset />} />
        <Route exact path="/forgot" element={<Forget />} />
        <Route exact path="/activate/:token" element={<Activated />} />
      </Routes>
    </>
  );
}

export default App;