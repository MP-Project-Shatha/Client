import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./style.css";
const Navbar = () => {
  const [logged, setLogged] = useState(false);
  //
  console.log(localStorage.getItem("user"));
  useEffect(() => {
    setTimeout(() => {
      if (localStorage.getItem("user")) setLogged(true);
    }, 300);
  }, []);

  const  logout = () =>{
    localStorage.removeItem("user");
  }
  return (
    <div>
      <ul className="ul">
        <li>
          <Link to={"/Home"}>Home</Link>
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
                <button className="logout-btn" onClick={logout} > logout</button> 
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
    </div>
  );
};

export default Navbar;
