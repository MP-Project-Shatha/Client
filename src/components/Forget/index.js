import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { RiArrowGoBackLine } from "react-icons/ri";
import "./style.css";
import Navbar from "../Navbar";

const ForgotPass = () => {
  const navigate = useNavigate();

  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const [err, setErr] = useState("");
  const reset = async (e) => {
    try {
      e.preventDefault();
      const result = await axios.post(`${BASE_URL}/forgott`, {
        email: e.target.email.value,
      });
      console.log(result.data);
      if (result.data.success) {
        setErr(result.data.success);
      }
      if (result.data.errors[0].msg) {
        setErr(result.data.errors[0].msg);
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
            src="https://player.vimeo.com/external/542601017.sd.mp4?s=2efb45620d5cd4b587dcb66202ea1f34940424b4&profile_id=164&oauth2_token_id=57447761"
            type="video/webm"
          />
          Your browser does not support HTML5 video.
        </video>
        <section className="section-login">
          <div className="login-container">
            <h1 className={"login-title"}>Forget</h1>
            <p className={"login-massage"}>Please enter your details.</p>

            <form className="login-form" onSubmit={reset}>
              <div className="input-box">
                <p className="input-label">Email</p>
                <input
                  autoComplete="username"
                  type="text"
                  name="email"
                  className={"input-field"}
                  placeholder="example@domain.com"
                  required
                />
              </div>
              <div className="forgot-submit">
                <input type="submit" className={"submit-btn"} value={"Send"} />
              </div>
              <p>{err}</p>
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
      </div>
    </>
  );
};

export default ForgotPass;
