import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { AiOutlineLogout } from "react-icons/ai";

import logo from "./../../imges/logof.png";
import "./style.css";
const Navbar = () => {
  const navigate = useNavigate();

  const [logged, setLogged] = useState(false);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("user"))) setLogged(true);
  }, []);

  const logout = () => {
    setLogged(false);
    localStorage.removeItem("user");
    navigate("/");
  };
  return (
    <div>
      <ul className="ul">
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to="/Exercises"> Exercises </Link>
        </li>
        {logged ? (
          <>
            <li>
              <Link to="/Profile"> Profile</Link>
            </li>

            <li>
              <Link to="/Advices"> Advices</Link>
            </li>
            <li>
              <Link to="/Information"> Information </Link>
            </li>

            <li>
              {/* <button className="logout-btn" onClick={logout}>
                {" "}
               <AiOutlineLogout/>
              </button> */}
              <h1 className="logout-btn" onClick={logout}>
              <AiOutlineLogout/>
              </h1>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to={"/login"}> Login</Link>
            </li>
          </>
        )}
      </ul>
      {/* <h1 classNmae="logo">
        <img src={logo} />
      </h1> */}
    </div>
  );
};

export default Navbar;
