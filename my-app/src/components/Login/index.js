import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./style.css";
import {MdEmail} from "react-icons/md"
const Login = () => {
  const navigate = useNavigate();
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const [err, setErr] = useState("");
  const login = async (e) => {
    try {
      e.preventDefault();
      const result = await axios.post(
        `${BASE_URL}/login`,
        {
          email: e.target.email.value,
          password: e.target.password.value,
        },
        { withCredentials: true }
      );
      console.log(result.data);
      if (result.data?.token) {
        localStorage.setItem("user",JSON.stringify(result.data))
        navigate("/information");
      }
    } catch (error) {
      
      console.log(error);
    }
  };

  return (
    <>


    <div className="overlay">
    <video autoPlay muted loop id="video1">
      <source src="https://ak.picdn.net/shutterstock/videos/1028252639/preview/stock-footage-girl-in-the-gym-fitness-training-workout-sport.webm" type="video/webm" />
      Your browser does not support HTML5 video.
    </video>
      <div className="overlay__inner">
    
        <h1 className="overlay__title">
          Form<br />
          <span className="text-gradient">Login</span>
        </h1>
      
        <div className="align">
          <div className="grid">
            <form action="https://httpbin.org/post" method="POST" className="form login" onSubmit={login}>
              <div className="form__field">
                <label htmlFor="login__username"><svg className="icon">
                <MdEmail/>
                   </svg><span className="hidden">Email</span></label>
                 <input autoComplete="username" id="login__username" type="text" name="email" className="form__input" placeholder="email" required />
              </div>
              <div className="form__field">
                <label htmlFor="login__password"><svg className="icon">
                    <use xlinkHref="#icon-lock" />
                  </svg><span className="hidden">Password</span></label>
                <input id="login__password" type="password" name="password" className="form__input" placeholder="Password" required />
              </div>
              <div className="form__field">
                
                <input className="text-gradient" type="submit" defaultValue="Sign In" />
              </div>
            </form>
            <p className="text--center">Not a member? <a href={"/register"}>Sign up now</a> <svg className="icon">
                <use xlinkHref="#icon-arrow-right" />
              </svg></p>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" className="icons">
            &gt;
            <symbol id="icon-lock" viewBox="0 0 1792 1792">
              <path d="M640 768h512V576q0-106-75-181t-181-75-181 75-75 181v192zm832 96v576q0 40-28 68t-68 28H416q-40 0-68-28t-28-68V864q0-40 28-68t68-28h32V576q0-184 132-316t316-132 316 132 132 316v192h32q40 0 68 28t28 68z" />
            </symbol>
            <symbol id="icon-user" viewBox="0 0 1792 1792">
              <path d="M1600 1405q0 120-73 189.5t-194 69.5H459q-121 0-194-69.5T192 1405q0-53 3.5-103.5t14-109T236 1084t43-97.5 62-81 85.5-53.5T538 832q9 0 42 21.5t74.5 48 108 48T896 971t133.5-21.5 108-48 74.5-48 42-21.5q61 0 111.5 20t85.5 53.5 62 81 43 97.5 26.5 108.5 14 109 3.5 103.5zm-320-893q0 159-112.5 271.5T896 896 624.5 783.5 512 512t112.5-271.5T896 128t271.5 112.5T1280 512z" />
            </symbol>
          </svg>
        </div>
      </div>
    </div>
  
  


</>

  )
};

export default Login;
