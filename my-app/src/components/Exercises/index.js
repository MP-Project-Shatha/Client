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
                src="https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
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
            
            <p> Biceps </p>
            <div className="full">
              <img
                className="imag"
                src="https://images.pexels.com/photos/2261477/pexels-photo-2261477.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
                path="images/"
                onClick={() => {
                  navigate(`/Exerciesdesc/Biceps`);
                }}
              />
            </div>
            <div />
          </div>{" "}
          <div>
            <p> Abs </p>
            <div className="full">
              <img
                className="imag"
                src="https://images.pexels.com/photos/4162548/pexels-photo-4162548.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
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
            <p> Adductors </p>
            <div className="full">
              <img
                className="imag"
                src="https://images.pexels.com/photos/136404/pexels-photo-136404.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
                path="images/"
                onClick={() => {
                  navigate(`/Exerciesdesc/Adductors`);
                }}
              />
            </div>
            <div />
          </div>{" "}
          <div>
            <p> Shoulders </p>
            <div className="full">
              <img
                className="imag"
                src="https://images.pexels.com/photos/6550851/pexels-photo-6550851.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
                path="images/"
                onClick={() => {
                  navigate(`/Exerciesdesc/Shoulders`);
                }}
              />
            </div>
            <div />
          </div>{" "}
          <div>
            <p> Chest </p>
            <div className="full">
              <img
                className="imag"
                src="https://images.pexels.com/photos/3837757/pexels-photo-3837757.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
                path="images/"
                onClick={() => {
                  navigate(`/Exerciesdesc/Chest`);
                }}
              />
            </div>
            <div />
          </div>{" "}
          <div>
            <p> Foreams </p>
            <div className="full">
              <img
                className="imag"
                src="https://images.pexels.com/photos/1552249/pexels-photo-1552249.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
                path="images/"
                onClick={() => {
                  navigate(`/Exerciesdesc/Foreams`);
                }}
              />
            </div>
            <div />
          </div>{" "}
          <div>
            <p> Obliques </p>
            <div className="full">
              <img
                className="imag"
                src="https://images.pexels.com/photos/1111304/pexels-photo-1111304.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
                path="images/"
                onClick={() => {
                  navigate(`/Exerciesdesc/Obliques`);
                }}
              />
            </div>
            <div />
          </div>{" "}
          <div>
            <p> Qudas </p>
            <div className="full">
              <img
                className="imag"
                src="https://images.pexels.com/photos/5327534/pexels-photo-5327534.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
                path="images/"
                onClick={() => {
                  navigate(`/Exerciesdesc/Qudas`);
                }}
              />
            </div>
            <div />
          </div>{" "}
          <div>
            <p> Traps </p>
            <div className="full">
              <img
                className="imag"
                src="https://images.pexels.com/photos/703014/pexels-photo-703014.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
                path="images/"
                onClick={() => {
                  navigate(`/Exerciesdesc/Traps`);
                }}
              />
            </div>
            <div />
          </div>{" "}
          <div>
            <p> Triceps </p>
            <div className="full">
              <img
                className="imag"
                src="https://images.pexels.com/photos/414029/pexels-photo-414029.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
                path="images/"
                onClick={() => {
                  navigate(`/Exerciesdesc/Triceps`);
                }}
              />
            </div>
            <div />
          </div>{" "}
          <div>
            <p> Abductors </p>
            <div className="full">
              <img
                className="imag"
                src="https://images.pexels.com/photos/7690207/pexels-photo-7690207.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
                path="images/"
                onClick={() => {
                  navigate(`/Exerciesdesc/Abductors`);
                }}
              />
            </div>
            <div />
          </div>{" "}
          <div>
            <p> Hamstrings </p>
            <div className="full">
              <img
                className="imag"
                src="https://images.pexels.com/photos/5327505/pexels-photo-5327505.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
                path="images/"
                onClick={() => {
                  navigate(`/Exerciesdesc/Hamstrings`);
                }}
              />
            </div>
            <div />
          </div>{" "}
          <div>
            <p> Calves </p>
            <div className="full">
              <img
                className="imag"
                src="https://images.pexels.com/photos/2204196/pexels-photo-2204196.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
                path="images/"
                onClick={() => {
                  navigate(`/Exerciesdesc/Calves`);
                }}
              />
            </div>
            <div />
          </div>{" "}
          <div>
            <p> Lats </p>
            <div className="full">
              <img
                className="imag"
                src="https://images.pexels.com/photos/3757934/pexels-photo-3757934.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
                path="images/"
                onClick={() => {
                  navigate(`/Exerciesdesc/Lats`);
                }}
              />
            </div>
            <div />
          </div>{" "}
          <div>
            <p> Lower Back </p>
            <div className="full">
              <img
                className="imag"
                src="https://images.pexels.com/photos/6493601/pexels-photo-6493601.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
                path="images/"
                onClick={() => {
                  navigate(`/Exerciesdesc/LowerBack`);
                }}
              />
            </div>
            <div />
          </div>
          <div>
            <p> Glutes </p>
            <div className="full">
              <img
                className="imag"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpS21XFq33PYBpv572PXnzugTmPj3zJro0hg&usqp=CAU"
                alt=""
                path="images/"
                onClick={() => {
                  navigate(`/Exerciesdesc/Glutes`);
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
