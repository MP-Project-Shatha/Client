import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./style.css";

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
      if (result.data.err) {
        setErr(result.data.err);
      } else if (result.data.success) {
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login">
      <div className="log">
        <h1>Login</h1>

        <form onSubmit={login}>
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" />
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" />
          <button type="submit">Login</button>
        </form>
        <p>{err}</p>
        <p
          onClick={() => {
            navigate("/forgot");
          }}
        >
          Forget Password?
        </p>
        <button
          onClick={() => {
            navigate("/Home");
          }}
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default Login;
