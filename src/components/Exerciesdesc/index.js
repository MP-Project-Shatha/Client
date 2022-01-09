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
  const [video, setVideo] = useState("");
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
      <section className="player-section">
        <div className="player-container">
          <div className="video-player">
            <video src={video} controls />
          </div>
          <div className="videoList">
            {workout.map((item, i) => {
              return (
                <>
                  <div
                    className={"video-item"}
                    onClick={() => setVideo(item.video)}
                  >
                    <video className="video-img" src={item.video} />
                    <div>
                      <p className="video-title">{item.title}</p>
                      <p className="video-desc">{item.desc}</p>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Exerciesdesc;
