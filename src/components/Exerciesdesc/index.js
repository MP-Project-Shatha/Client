import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../Navbar";
import Swal from "sweetalert2";
import { AiTwotoneDelete } from "react-icons/ai";

import "./style.css";

const Exerciesdesc = () => {
  const param = useParams();
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const navigate = useNavigate();
  const [workout, setWorkout] = useState([]);
  const [video, setVideo] = useState([]);
  const [search, setSearch] = useState("");
  const [add, setAdd] = useState([]);

  const user = JSON.parse(localStorage.getItem("user"));

  // console.log(param.id);
  const getPosts = () => {
    try {
      axios.get(`${BASE_URL}/allExercises`).then((result) => {
        if (result.data) {
          setWorkout(result.data.filter((i) => i.type == param.id));
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
    getPosts();
  }, []);

  // delete
  // const deletePost = (i) => {
  //   console.log(i);
  //   try {
  //     axios.put(`${BASE_URL}/softDelete/${i}`).then((result) => {
  //       console.log(result.data);
  //       getPosts();
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const removeOrAdd = async (id) => {
    // let test = [];

    const Add = await axios.put(`${BASE_URL}/Exe/${user.result.email}/${id}`);
    Swal.fire({
      position: "counter",
      icon: "success",
      title: "The exercises have been added to your exercises",
      showConfirmButton: false,
      timer: 1500,
    });
    // setAdd(false)
    getData()
    getPosts();
  };


  const getData = async () => {
    const item = await axios.post(`${BASE_URL}/Exee/${user.result.email}`);
    setAdd(item.data[0].plan);
    //   console.log(local.result.email);
  };

  useEffect(() => {
    // if (user.result) removeOrAdd();
    // console.log(user.result.email);
    // console.log(user);
    // eslint-disable-next-line
  }, [user]);

  return (
    <>
      <Navbar />

      <section className="player-section">
        <div className="search_div">
          <div className="divSearchInput">
            <input
              type="text"
              name="search"
              id="search"
              className="inputSearch"
              placeholder="Search..."
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
        <div className="player-container">
          <div className="video-player">
            <video src={video.video} controls />
          </div>
          <div className="videoList">
            {workout.length &&
              workout
                // eslint-disable-next-line
                .filter((item) => {
                  if (search === "") {
                    return item;
                  } else if (
                    item.title.toLowerCase().includes(search.toLowerCase())
                  ) {
                    return item;
                  }
                })
                .map((item, i) => {
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
                          {console.log(add)}
                          {!add.some(i=>i._id==item._id) ? (
                            <button
                              className={"info__button"}
                              onClick={() => removeOrAdd(item._id)}
                            >
                              Add
                            </button>
                          ) : (
                            <button
                              className={"info__button"}
                              onClick={() => removeOrAdd(item._id)}
                            >
                              Remove
                            </button>
                          )}
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
