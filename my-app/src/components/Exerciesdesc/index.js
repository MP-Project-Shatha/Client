import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../Navbar";
import "./style.css";

const Exerciesdesc = () => {
  const param = useParams();
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const navigate = useNavigate();
  const [workout, setWorkout] = useState([]);
  // console.log(JSON.parse(localStorage.getItem("user")).result._id);
  console.log(param.id);
  const getPosts = () => {
    try {
      axios.get(`${BASE_URL}/allExercises`).then((result) => {
        if (result.data) {
          console.log(result.data.filter((i) => i.type == param.id));
          setWorkout(result.data.filter((i) => i.type == param.id));
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
      <div className="card-show">
      {workout.map((item, i) => {
        return (
          <div>
            <tr>
              <td>{item.title}</td>
            </tr>
            <div>
            <video className="vWorkout" src={item.video} controls />
            </div>
            <tr>
              <td>{item.desc}</td>
            </tr>
          </div>
        );
      })}
      </div>
    </div>
    </>
  );
};

export default Exerciesdesc;
