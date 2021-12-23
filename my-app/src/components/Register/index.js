import React from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { useState } from "react";
import "./style.css";

const Register = () => {
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const navigate = useNavigate();
  const [err, setErr] = useState("");

  const signup = async (e) => {
    try {
      e.preventDefault();
      const result = await axios.post(`${BASE_URL}/register`, {
        username: e.target.username.value,
        email: e.target.email.value,
        password: e.target.password.value,
        password2: e.target.password2.value,
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
    <div className="Register">
      <div className="Reg">
        <h1>Register</h1>
        <form onSubmit={signup}>
          <label htmlFor="username">Username:</label>
          <input type="text" name="username" />
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" />
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" />
          <label htmlFor="password2">Confirm Password:</label>
          <input type="password" name="password2" />
          <button type="submit">Register</button>
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
  );
};

export default Register;
