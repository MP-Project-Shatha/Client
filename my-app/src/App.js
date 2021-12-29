import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login"
import Register from "./components/Register";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import PasswordReset from "./components/Passwordrest";
import Activated from "./components/Activated";
import Forget from "./components/Forget";
import Profile from "./components/Profile"
import Advices from "./components/Advices"
import Information from "./components/Information"
import Exercises from "./components/Exercises"

function App() {
  return (
    <>
     <Navbar/> 
      <Routes>
      <Route exact path="/Home" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/Exercises" element={<Exercises />} />
        <Route exact path="/forgot/:token" element={<PasswordReset />} />
        <Route exact path="/forgot" element={<Forget />} />
        <Route exact path="/activate/:token" element={<Activated />} />
      <Route exact path="/Profile" element={<Profile />} />
      <Route exact path="/Advices" element={<Advices />} />
      <Route exact path="/Information" element={<Information />} />

      </Routes>
    </>
  );
}

export default App;