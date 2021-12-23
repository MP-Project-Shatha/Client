import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login"
import Register from "./components/Register";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;