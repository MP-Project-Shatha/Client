import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import Navbar from "../Navbar";
import { RiArrowGoBackLine } from "react-icons/ri";

const PasswordReset = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const token = location.pathname.split("/")[2];
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const [err, setErr] = useState("");
  const [Erro, setErro] = useState(true);
  const [id, setId] = useState("");
  const reset = async (e) => {
    try {
      e.preventDefault();
      const result = await axios.post(`${BASE_URL}/reset/${id}`, {
        password: e.target.password.value,
        password2: e.target.password2.value,
      });
      console.log(result.data);
      if (result.data.error) {
        setErr(result.data.error);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const check = async () => {
    try {
      const result = await axios.get(`${BASE_URL}/forgot/${token}`);
      if (result.data.success) {
        setId(result.data.success);
        setErro(false);
      }
      if (result.data.error) {
        setErr(result.data.error);
      }
      console.log(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    check();
  }, []);

  return (
    <div className="login-box-container">
      <video autoPlay muted loop className="login-background-video">
        <source
          src="https://player.vimeo.com/external/433938674.sd.mp4?s=71fbc7c7a37f1123d6884b060f0304cdcf8ac988&profile_id=139&oauth2_token_id=57447761"
          type="video/webm"
        />
        Your browser does not support HTML5 video.
      </video>
      <section className="section-login">
        <div className="login-container">
          <h1 className={"login-title"}>Rest</h1>
          <p className={"login-massage"}>Please enter your details.</p>

          <form className="login-form" onSubmit={reset}>
            <div className="input-box">
              <p className="input-label">Password</p>
              <input
                autoComplete="username"
                type="password"
                name="password"
                className={"input-field"}
                placeholder="Enter your new password"
                required
              />
            </div>
            <div className="input-box">
              <p className="input-label">Conform Password</p>
              <input
                type="password"
                name="password2"
                className={"input-field"}
                placeholder="Retype your password"
                required
              />
            </div>
            <div className="forgot-submit">
              <input type="submit" className={"submit-btn"} value={"Save"} />
            </div>
          </form>
          <h1
            className="icon-back"
            onClick={() => {
              navigate("/");
            }}
          >
            <RiArrowGoBackLine />
          </h1>
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
            src={require("../../imges/forgot-img.jpg")}
            alt=""
            className=""
          />
        </div>
      </section>
      <p>{err}</p>
    </div>
  );
};

export default PasswordReset;
