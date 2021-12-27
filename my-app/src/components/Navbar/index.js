import { React } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <div>
        <div>
          <div>
            <ul>
              <li>
                <Link to={"/Home"}>Home</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
            </ul>
          </div>
          <div className="account-icons">
            <ul className="icons-list">
              {localStorage.getItem("newUser") ? (
                <button className="logout-btn">logout</button>
              ) : (
                <li>
                  <Link to={"/login"}> Login</Link>
                </li>
              )}
            </ul>
            <ul>
              <li>
                <Link to="/Profile"> Profile</Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link to="/Advices"> Advices</Link>
              </li>
              <li>
                <Link to="/Information"> Information </Link>
              </li>
              <li>
                <Link to="/Exercises"> Exercises </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
