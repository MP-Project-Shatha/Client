import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";

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
    <>
      <div className="overlay">
        <video autoPlay muted loop id="video1">
          <source
            src="https://player.vimeo.com/external/433938674.sd.mp4?s=71fbc7c7a37f1123d6884b060f0304cdcf8ac988&profile_id=139&oauth2_token_id=57447761"
            type="video/webm"
          />
          Your browser does not support HTML5 video.
        </video>
        <div className="overlay__inner">
          <h1 className="overlay__title">
            <br />

            <span className="text-gradient" id="but-lift">
              Rest
            </span>
          </h1>

          <div className="align">
            {!Erro ? (
              <div className="grid">
                <form className="form login" onSubmit={reset}>
                  <div className="form__field">
                    <label htmlFor="login__username">
                      <svg className="icon"></svg>
                      <svg className="icon">
                        <use xlinkHref="#icon-lock" />
                      </svg>
                    </label>
                    <input
                      autoComplete="username"
                      id="login__username"
                      type="password"
                      name="password"
                      className="form__input"
                      placeholder="password"
                      required
                    />
                  </div>
                  <div className="form__field">
                    <label htmlFor="login__password">
                      <svg className="icon">
                        <use xlinkHref="#icon-lock" />
                      </svg>
                      <span className="hidden">Password</span>
                    </label>
                    <input
                      id="login__password"
                      type="password"
                      name="password2"
                      className="form__input"
                      placeholder="Password"
                      required
                    />
                  </div>

                  <div className="group">
                    <button class="custom-btn btn-2" id="but-lift">
                      {" "}
                      login
                    </button>
                  </div>
                </form>

                <p>{err}</p>
                <button onClick={() => navigate("/")}>back</button>
              </div>
            ) : (
              <div className="formm">
                <h1>Error</h1>
                <p>{err}</p>
                <button
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  Back to home
                </button>
              </div>
            )}
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
  );
};

export default PasswordReset;
{
  /* <div className="overlay">
{!Erro ? (
  <div className="align">
    <h1>Enter your new password</h1>
    <div className="grid">
    <form onSubmit={reset}>
      <label htmlFor="password">New Password:</label>
      <input    id="login__password"
              type="password"
              name="password"
              className="form__input"
              placeholder="Password"
              required />
              <br />
      <label htmlFor="password2">Confirm New Password:</label>
      <input    id="login__password"
              type="password"
           
              className="form__input"
              placeholder="Password"
              required name="password2" />
      <button type="submit">Change Password</button>
    </form>
    <p>{err}</p>
    <button
      onClick={() => {
        navigate("/");
      }}
    >
      Back
    </button>
    </div>
  </div>
) : (
  <div className="formm">
    <h1>Error</h1>
    <p>{err}</p>
    <button
      onClick={() => {
        navigate("/");
      }}
    >
      Back to home
    </button>
  </div>
)}
</div>
);
}; */
}
