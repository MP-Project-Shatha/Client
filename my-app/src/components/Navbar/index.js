import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
import { AiOutlineLogout } from "react-icons/ai";
import logo from "./../../imges/logof.png";

import "./style.css";

const Navbar = () => {
  const navigate = useNavigate();
  var current = useLocation().pathname;
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
    <header className="navbar-header">
      <div className="header-container">
        <div className="logo">
          <img
            src={require("../../imges/logo.png")}
            alt=""
            className="logo-image"
          />
        </div>
        <div className="navbar-container">
          <ul className="navbar-list">
            <li className="navbar-item">
              <Link
                className={`navbar-link ${
                  current === "/" ? "navbar-link-current" : ""
                }`}
                to={"/"}
              >
                Home
              </Link>
            </li>
            <li className={"navbar-item"}>
              <Link
                className={`navbar-link ${
                  current === "/Exercises" ? "navbar-link-current" : ""
                }`}
                to="/Exercises"
              >
                {" "}
                Exercises{" "}
              </Link>
            </li>
            <li className="navbar-item">
              <Link
                className={`navbar-link ${
                  current === "/Profile" ? "navbar-link-current" : ""
                }`}
                to="/Profile"
              >
                {" "}
                Profile
              </Link>
            </li>
            {logged ? (
              <>
                <li className="navbar-item">
                  <Link
                    className={`navbar-link ${
                      current === "/Advices" ? "navbar-link-current" : ""
                    }`}
                    to="/Advices"
                  >
                    {" "}
                    Advices
                  </Link>
                </li>
                <li className="navbar-item">
                  <Link
                    className={`navbar-link ${
                      current === "/Information" ? "navbar-link-current" : ""
                    }`}
                    to="/Information"
                  >
                    {" "}
                    Information{" "}
                  </Link>
                </li>
              </>
            ) : (
              <></>
            )}
          </ul>
        </div>
        <div className="login-register">
          <ul className={"navbar-list"}>
            {logged ? (
              <>
                <li className={"navbar-item"}>
                  <button className="logout-btn" onClick={logout}>
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className={"navbar-item register-btn"}>
                  <Link className="navbar-link" to="/register">
                    Register
                  </Link>
                </li>
                <li className={"navbar-item login-btn"}>
                  <Link className="navbar-link" to={"/login"}>
                    {" "}
                    Login
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
