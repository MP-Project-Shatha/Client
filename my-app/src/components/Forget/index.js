import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { RiArrowGoBackLine } from 'react-icons/ri';
import "./style.css"
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
    <div className="overlay">
      <video autoPlay muted loop id="video1">
        <source
          src="https://player.vimeo.com/external/542601017.sd.mp4?s=2efb45620d5cd4b587dcb66202ea1f34940424b4&profile_id=164&oauth2_token_id=57447761"
          type="video/webm"
        />
        Your browser does not support HTML5 video.
      </video>
      <div className="overlay__inner">
        <h1 className="overlay__title">
          <br />
          <span className="text-gradient" id="but-lift">Forget</span>
        </h1>

        <div className="align">
          <div className="grid">
            <form className="form login" onSubmit={reset}>
              <div className="form__field">
                <label htmlFor="login__username">
                  <svg className="icon">
                    <MdEmail />
                  </svg>
                  <span className="hidden">Email</span>
                </label>
                <input
                  autoComplete="username"
                  id="login__username"
                  type="text"
                  name="email"
                  className="form__input"
                  placeholder="email"
                  required
                />
              </div>

              {/* <button
                className="text-gradient"
                type="submit"
                defaultValue="Sign In"
              >
                send
              </button> */}
               <div className="group">
                  <button class="custom-btn btn-2" id="but-lift"   type="submit"
                defaultValue="send">send</button>
                </div>
            </form>
            <p>{err}</p>
            <h1 class="icon-back"
              onClick={() => {
                navigate("/");
              }}
            >
              <RiArrowGoBackLine/>
            </h1>
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
    // <div className="home">
    //   <div className="formm">
    //     <h1>Why did you forget :(</h1>

    //     <form onSubmit={reset}>
    //       <h3>Enter email to send you password reset link</h3>
    //       <br />
    //       <label htmlFor="email">Email:</label>
    //       <input type="email" name="email" />
    //       <button type="submit">Send</button>
    //     </form>
    //     <p>{err}</p>
    //     <button
    //       onClick={() => {
    //         navigate("/");
    //       }}
    //     >
    //       Back
    //     </button>
    //   </div>
    // </div>
  );
};

export default ForgotPass;
