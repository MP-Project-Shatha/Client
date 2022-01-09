import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./style.css";
import Navbar from "../Navbar";
import { AiOutlineArrowDown } from "react-icons/ai";

const Exercises = () => {
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const navigate = useNavigate();
  const [cardsExe, setCardsExe] = useState([]);

  const getPosts = () => {
    try {
      axios.get(`${BASE_URL}/allExercises`).then((result) => {
        if (result.data) {
          console.log(result.data);
          console.log(result);
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
      <section className="exercises-screen">
        <h1 className="section-title">
          <span>Explore</span> Our well picked <span>exercises</span>
        </h1>
        <div className="exercises-scroll-down">
          <span>
            <AiOutlineArrowDown />
          </span>
        </div>
      </section>

      <section className={"section-exercises"}>
        <h1 className="section-title ">
          <span>Explore</span>
        </h1>
        <div className="exercises-container">
          <div className="exercises-cards">
            <div className="exercise-card">
              <img
                src="https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
                className="exercise-card-img"
                onClick={() => {
                  navigate(`/Exerciesdesc/Cardio`);
                }}
              />
              <p className="exercise-card-text">Cardio</p>
            </div>
          </div>

          <div className="exercises-cards">
            <div className="exercise-card">
              <img
                src="https://images.pexels.com/photos/2261477/pexels-photo-2261477.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
                className="exercise-card-img"
                onClick={() => {
                  navigate(`/Exerciesdesc/Biceps`);
                }}
              />
              <p className="exercise-card-text">Biceps</p>
            </div>
          </div>

          <div className="exercises-cards">
            <div className="exercise-card">
              <img
                src="https://images.pexels.com/photos/4162548/pexels-photo-4162548.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
                className="exercise-card-img"
                onClick={() => {
                  navigate(`/Exerciesdesc/Abs`);
                }}
              />
              <p className="exercise-card-text">Abs</p>
            </div>
          </div>

          <div className="exercises-cards">
            <div className="exercise-card">
              <img
                src="https://images.pexels.com/photos/136404/pexels-photo-136404.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
                className="exercise-card-img"
                onClick={() => {
                  navigate(`/Exerciesdesc/Adductors`);
                }}
              />
              <p className="exercise-card-text">Adductors</p>
            </div>
          </div>

          <div className="exercises-cards">
            <div className="exercise-card">
              <img
                src="https://images.pexels.com/photos/6550851/pexels-photo-6550851.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
                className="exercise-card-img"
                onClick={() => {
                  navigate(`/Exerciesdesc/Shoulders`);
                }}
              />
              <p className="exercise-card-text">Shoulders</p>
            </div>
          </div>

          <div className="exercises-cards">
            <div className="exercise-card">
              <img
                src="https://images.pexels.com/photos/3837757/pexels-photo-3837757.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
                className="exercise-card-img"
                onClick={() => {
                  navigate(`/Exerciesdesc/Chest`);
                }}
              />
              <p className="exercise-card-text">Chest</p>
            </div>
          </div>

          <div className="exercises-cards">
            <div className="exercise-card">
              <img
                src="https://images.pexels.com/photos/1552249/pexels-photo-1552249.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
                className="exercise-card-img"
                onClick={() => {
                  navigate(`/Exerciesdesc/Foreams`);
                }}
              />
              <p className="exercise-card-text">Foreams</p>
            </div>
          </div>

          <div className="exercises-cards">
            <div className="exercise-card">
              <img
                src="https://images.pexels.com/photos/1111304/pexels-photo-1111304.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
                className="exercise-card-img"
                onClick={() => {
                  navigate(`/Exerciesdesc/Obliques`);
                }}
              />
              <p className="exercise-card-text">Obliques</p>
            </div>
          </div>

          <div className="exercises-cards">
            <div className="exercise-card">
              <img
                src="https://images.pexels.com/photos/5327534/pexels-photo-5327534.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
                className="exercise-card-img"
                onClick={() => {
                  navigate(`/Exerciesdesc/Qudas`);
                }}
              />
              <p className="exercise-card-text">Qudas</p>
            </div>
          </div>

          <div className="exercises-cards">
            <div className="exercise-card">
              <img
                src="https://images.pexels.com/photos/703014/pexels-photo-703014.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
                className="exercise-card-img"
                onClick={() => {
                  navigate(`/Exerciesdesc/Traps`);
                }}
              />
              <p className="exercise-card-text">Traps</p>
            </div>
          </div>

          <div className="exercises-cards">
            <div className="exercise-card">
              <img
                src="https://images.pexels.com/photos/414029/pexels-photo-414029.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
                className="exercise-card-img"
                onClick={() => {
                  navigate(`/Exerciesdesc/Triceps`);
                }}
              />
              <p className="exercise-card-text">Triceps</p>
            </div>
          </div>

          <div className="exercises-cards">
            <div className="exercise-card">
              <img
                src="https://images.pexels.com/photos/7690207/pexels-photo-7690207.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
                className="exercise-card-img"
                onClick={() => {
                  navigate(`/Exerciesdesc/Abductors`);
                }}
              />
              <p className="exercise-card-text">Abductors</p>
            </div>
          </div>

          <div className="exercises-cards">
            <div className="exercise-card">
              <img
                src="https://images.pexels.com/photos/5327505/pexels-photo-5327505.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
                className="exercise-card-img"
                onClick={() => {
                  navigate(`/Exerciesdesc/Hamstrings`);
                }}
              />
              <p className="exercise-card-text">Hamstrings</p>
            </div>
          </div>

          <div className="exercises-cards">
            <div className="exercise-card">
              <img
                src="https://images.pexels.com/photos/2204196/pexels-photo-2204196.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
                className="exercise-card-img"
                onClick={() => {
                  navigate(`/Exerciesdesc/Calves`);
                }}
              />
              <p className="exercise-card-text">Calves</p>
            </div>
          </div>

          <div className="exercises-cards">
            <div className="exercise-card">
              <img
                src="https://images.pexels.com/photos/3757934/pexels-photo-3757934.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
                className="exercise-card-img"
                onClick={() => {
                  navigate(`/Exerciesdesc/Lats`);
                }}
              />
              <p className="exercise-card-text">Lats</p>
            </div>
          </div>

          <div className="exercises-cards">
            <div className="exercise-card">
              <img
                src="https://images.pexels.com/photos/6493601/pexels-photo-6493601.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
                className="exercise-card-img"
                onClick={() => {
                  navigate(`/Exerciesdesc/LowerBack`);
                }}
              />
              <p className="exercise-card-text">Lower Back</p>
            </div>
          </div>

          <div className="exercises-cards">
            <div className="exercise-card">
              <img
                src="https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
                className="exercise-card-img"
                onClick={() => {
                  navigate(`/Exerciesdesc/Glutes`);
                }}
              />
              <p className="exercise-card-text">Glutes</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Exercises;
