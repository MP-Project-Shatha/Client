import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";
import Swal from "sweetalert2";
import { MdEmail } from "react-icons/md";
import { RiArrowGoBackLine } from "react-icons/ri";
import Navbar from "../Navbar";

const Login = () => {
  const navigate = useNavigate();
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const [err, setErr] = useState("");
  let showForgotDiagram = false;

  const login = async (e) => {
    console.log(e.target.email.value);
    try {
      e.preventDefault();
      const result = await axios.post(`${BASE_URL}/login`, {
        email: e.target.email.value,
        password: e.target.password.value,
      });

      if (result.data.result) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Logged in Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        localStorage.setItem("user", JSON.stringify(result.data));
        navigate("/");
      } else {
        Swal.fire("Please make sure your password and email");
        setErr(result.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="login-box-container login-page">
        <video autoPlay muted loop className="login-background-video">
          <source
            src="https://player.vimeo.com/external/433938674.sd.mp4?s=71fbc7c7a37f1123d6884b060f0304cdcf8ac988&profile_id=139&oauth2_token_id=57447761"
            type="video/webm"
          />
          Your browser does not support HTML5 video.
        </video>
        <section className="section-login">
          <div className="login-container">
            <div>
              <h1 className={"login-title"}>Login</h1>
              <p className={"login-massage"}>
                Welcome back! Please enter your details.
              </p>
            </div>
            <form className="login-form" onSubmit={login}>
              <div className="input-box">
                <p className="input-label">Email</p>
                <input
                  className={"input-field"}
                  autoComplete="username"
                  type="text"
                  name="email"
                  placeholder="example@domain.com"
                  required
                />
              </div>
              <div className="input-box">
                <p className="input-label">Password</p>
                <input
                  className={"input-field"}
                  type="password"
                  name="password"
                  placeholder="ex. 'ILoveHeroGym'"
                  required
                />
              </div>
              <div className="forgot-submit">
                <input type="submit" className={"submit-btn"} value={"Login"} />
                <Link className={"forget-pass"} to={"/forgot"}>
                  Forget Password?
                </Link>
              </div>
              <p>{err}</p>
            </form>

            <p className="not-member">
              <i>Don't have an account?</i>
              <Link className={"forget-pass"} to={"/register"}>
                {" "}
                Sign up
              </Link>
            </p>
          </div>
          <div className={"section-login-image"}>
            <p>
              you don't find
              <br />
              <span>willpower</span>
              <br />
              you create it
            </p>
            <img
              src={require("../../imges/login-img.jpg")}
              alt=""
              className=""
            />
          </div>
        </section>
      </div>
    </>
  );
};

export default Login;