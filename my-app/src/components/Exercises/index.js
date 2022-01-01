import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./style.css";
import Navbar from "../Navbar";

const Exercises = () => {
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const navigate = useNavigate();
  const [cardsExe, setCardsExe] = useState([]);

  // exercises befor login

  // console.log(JSON.parse(localStorage.getItem("user")).result._id);
  const getPosts = () => {
    try {
      axios.get(`${BASE_URL}/allExercises`).then((result) => {
        if (result.data) {
          console.log(result.data);
          setCardsExe(result.data);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      <Navbar />
      <div className="profile">
        <div className="mainwrapper">
          <div>
            <p> Cardio</p>
            <div className="full">
              <img
                className="imag"
                src="https://explore.zoom.us/docs/image/postattendee/postattendee-onzoom.jpg"
                alt=""
                path="images/"
                onClick={() => {
                  navigate(`/Exerciesdesc/Cardio`);
                }}
              />
            </div>
            <div />
          </div>
          <div>
            <p> Abs</p>
            <div className="full">
              <img
                className="imag"
                src="https://explore.zoom.us/docs/image/postattendee/postattendee-onzoom.jpg"
                alt=""
                path="images/"
                onClick={() => {
                  navigate(`/Exerciesdesc/Abs`);
                }}
              />
            </div>
            <div />
          </div>{" "}
          <div>
            <p> Cardio</p>
            <div className="full">
              <img
                className="imag"
                src=""
                alt=""
                path="images/"
                onClick={() => {
                  navigate(`/Exerciesdesc/Cardio`);
                }}
              />
            </div>
            <div />
          </div>{" "}
          <div>
            <p> Cardio</p>
            <div className="full">
              <img
                className="imag"
                src=""
                alt=""
                path="images/"
                onClick={() => {
                  navigate(`/Exerciesdesc/Cardio`);
                }}
              />
            </div>
            <div />
          </div>{" "}
          <div>
            <p> Cardio</p>
            <div className="full">
              <img
                className="imag"
                src=""
                alt=""
                path="images/"
                onClick={() => {
                  navigate(`/Exerciesdesc/Cardio`);
                }}
              />
            </div>
            <div />
          </div>{" "}
          <div>
            <p> Cardio</p>
            <div className="full">
              <img
                className="imag"
                src=""
                alt=""
                path="images/"
                onClick={() => {
                  navigate(`/Exerciesdesc/Cardio`);
                }}
              />
            </div>
            <div />
          </div>{" "}
          <div>
            <p> Cardio</p>
            <div className="full">
              <img
                className="imag"
                src=""
                alt=""
                path="images/"
                onClick={() => {
                  navigate(`/Exerciesdesc/Cardio`);
                }}
              />
            </div>
            <div />
          </div>{" "}
          <div>
            <p> Cardio</p>
            <div className="full">
              <img
                className="imag"
                src=""
                alt=""
                path="images/"
                onClick={() => {
                  navigate(`/Exerciesdesc/Cardio`);
                }}
              />
            </div>
            <div />
          </div>{" "}
          <div>
            <p> Cardio</p>
            <div className="full">
              <img
                className="imag"
                src=""
                alt=""
                path="images/"
                onClick={() => {
                  navigate(`/Exerciesdesc/Cardio`);
                }}
              />
            </div>
            <div />
          </div>{" "}
          <div>
            <p> Cardio</p>
            <div className="full">
              <img
                className="imag"
                src=""
                alt=""
                path="images/"
                onClick={() => {
                  navigate(`/Exerciesdesc/Cardio`);
                }}
              />
            </div>
            <div />
          </div>{" "}
          <div>
            <p> Cardio</p>
            <div className="full">
              <img
                className="imag"
                src=""
                alt=""
                path="images/"
                onClick={() => {
                  navigate(`/Exerciesdesc/Cardio`);
                }}
              />
            </div>
            <div />
          </div>{" "}
          <div>
            <p> Cardio</p>
            <div className="full">
              <img
                className="imag"
                src=""
                alt=""
                path="images/"
                onClick={() => {
                  navigate(`/Exerciesdesc/Cardio`);
                }}
              />
            </div>
            <div />
          </div>{" "}
          <div>
            <p> Cardio</p>
            <div className="full">
              <img
                className="imag"
                src=""
                alt=""
                path="images/"
                onClick={() => {
                  navigate(`/Exerciesdesc/Cardio`);
                }}
              />
            </div>
            <div />
          </div>{" "}
          <div>
            <p> Cardio</p>
            <div className="full">
              <img
                className="imag"
                src=""
                alt=""
                path="images/"
                onClick={() => {
                  navigate(`/Exerciesdesc/Cardio`);
                }}
              />
            </div>
            <div />
          </div>{" "}
          <div>
            <p> Cardio</p>
            <div className="full">
              <img
                className="imag"
                src=""
                alt=""
                path="images/"
                onClick={() => {
                  navigate(`/Exerciesdesc/Cardio`);
                }}
              />
            </div>
            <div />
          </div>{" "}
          <div>
            <p> Cardio</p>
            <div className="full">
              <img
                className="imag"
                src=""
                alt=""
                path="images/"
                onClick={() => {
                  navigate(`/Exerciesdesc/Cardio`);
                }}
              />
            </div>
            <div />
          </div>
        </div>
      </div>
    </>
  );
};
export default Exercises;
