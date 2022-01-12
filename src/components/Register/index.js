import React from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { useState } from "react";
import { MdEmail } from "react-icons/md";
import { RiArrowGoBackLine } from "react-icons/ri";

import "./style.css";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";

const Register = () => {
  const navigate = useNavigate();
  const BASE_URL = process.env.REACT_APP_BASE_URL;

  const [err, setErr] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const signup = async (e) => {
    try {
      e.preventDefault();
      const result = await axios.post(`${BASE_URL}/register`, {
        username,
        email,
        password,
        password2,
        role: "61a4eae86ad0c2fe2b45d0aa",
      });
      console.log(result.data);
      if (result.data.errors) {
        console.log(result.data.errors[0].msg);
        setErr(result.data.errors[0].msg);
      } else if (result.data.message) {
        setErr(result.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Navbar />

      <div className="login-box-container">
        <video autoPlay muted loop className="login-background-video">
          <source
            src="https://player.vimeo.com/external/567369323.sd.mp4?s=bbe1ca68c5b709053efbdeb735855d3754ad14ef&profile_id=164&oauth2_token_id=57447761"
            type="video/webm"
          />
          Your browser does not support HTML5 video.
        </video>
        <section className="section-login">
          <div className={"section-login-image flip"}>
            <p>
              Do something today that your future self will <span>thank</span>{" "}
              you for
            </p>

            <img
              src={require("../../imges/register-img.jpg")}
              alt=""
              className=""
            />
          </div>

          <div className="login-container">
            <div>
              <h1 className={"login-title"}>Register</h1>
              <p className={"login-massage"}>
                Create account to start using Hero Gym
              </p>
            </div>
            <form className="login-form" onSubmit={signup}>
              <div className="input-box">
                <p className="input-label">Username</p>
                <input
                  autoComplete="username"
                  type="text"
                  name="Username"
                  className={"input-field"}
                  placeholder="Enter your username"
                  required
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="input-box">
                <p className="input-label">Email</p>
                <input
                  autoComplete="username"
                  type="email"
                  name="email"
                  className={"input-field"}
                  placeholder="example@domain.com"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="password-group">
                <div className="input-box">
                  <p className="input-label">Password</p>
                  <input
                    type="password"
                    name="password"
                    className={"input-field"}
                    placeholder="Type your password"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="input-box">
                  <p className="input-label">Conform Password</p>
                  <input
                    type="password"
                    name="password"
                    className={"input-field"}
                    placeholder="Retype your password"
                    required
                    onChange={(e) => setPassword2(e.target.value)}
                  />
                </div>
              </div>
              <input
                type="submit"
                className={"submit-btn"}
                value={"Register"}
              />
            </form>
            <p>{err}</p>
            <p className="not-member">
              <i>Already have an account?</i>
              <Link className={"forget-pass"} to={"/login"}>
                {" "}
                Login
              </Link>
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default Register;
