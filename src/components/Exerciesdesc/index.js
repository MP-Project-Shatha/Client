import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../Navbar";
import { AiTwotoneDelete } from "react-icons/ai";

import "./style.css";

const Exerciesdesc = () => {
  const param = useParams();
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const navigate = useNavigate();
  const [workout, setWorkout] = useState([]);
  const [video, setVideo] = useState([]);

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

  // delete
  const deletePost = (i) => {
    console.log(i);
    try {
      axios.put(`${BASE_URL}/softDelete/${i}`).then((result) => {
        console.log(result.data);
        getPosts();
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />
      <section className="player-section">
        <div className="player-container">
          <div className="video-player">
            <video src={video.video} controls />
          </div>
          <div className="videoList">
            {workout.map((item, i) => {
              return (
                <>
                  <div
                    className={`video-item ${
                      item == video ? "video-item-active" : ""
                    }`}
                    onClick={() => setVideo(item)}
                  >
                    <video className="video-img" src={item.video} />
                    <div>
                      <p className="video-title">{item.title}</p>
                      <p className="video-desc">{item.desc}</p>
                      <p onClick={() => deletePost(item._id)}>
                        {" "}
                        <AiTwotoneDelete />{" "}
                      </p>
                    </div>
                  </div>
                </>
              );
            })}
          </div>

          <div className="videoList videoList-desc">
            <div className="selected-video">
              <>
                <div className={`video-item-desc`}>
                  <div className="video-description-container">
                    <p className="video-title">{video.title}</p>
                    <p className="video-desc">{video.desc}</p>
                  </div>
                </div>
              </>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Exerciesdesc;
