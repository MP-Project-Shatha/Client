import { React, useState, useEffect } from "react";
import axios from "axios";
import "./style.css";
import Navbar from "../Navbar";
import Swal from 'sweetalert2'

// import {useNavigate} from "react-router";
// ff
const YourExercies = () => {
  const BASE_URL = process.env.REACT_APP_BASE_URL;

  // const navigate = useNavigate();
  const [account, setAccount] = useState([]);
  const [local, setLocal] = useState([]);
  const [video, setVideo] = useState([]);

  // Get email from localStorage
  const getLocalStorage = async () => {
    const item = await JSON.parse(localStorage.getItem("user"));
    setLocal(item);
    console.log(item.result.email);
  };

  // Get info the character base on email from backend
  const getData = async () => {
    const item = await axios.post(`${BASE_URL}/Exee/${local.result.email}`);
    setAccount(item.data[0].plan);
    //   console.log(local.result.email);
  };

  useEffect(() => {
    getLocalStorage();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (local.result) getData();
    console.log(local);
    // eslint-disable-next-line
  }, [local]);
  //   useEffect(() => {
  //     console.log(account.length);
  //     // eslint-disable-next-line
  //   }, [account]);

  // Remove
  const removeFavorite = (_id) => {

    const remove = axios.put(`${BASE_URL}/EExe/${local.result.email}/${_id}`);
    Swal.fire({
      position: 'counter',
      icon: 'success',
      title: 'Exercise has been removed from your workout',
      showConfirmButton: false,
      timer: 1500
    })
    console.log(remove);

   

    getLocalStorage();
  };
  return (
    <>
    <Navbar/>

      <section className="player-section">
        <div className="player-container">
          <div className="video-player">
            <video src={video.video} controls />
          </div>
          <div className="videoList">
            {account.map((item, i) => {
              return (
                <>
                  <div
                    className={`video-item ${
                      item == video ? "video-item-active" : ""
                    }`}
                    onClick={() => setVideo(item)}
                  >
                    {/* <video className="video-img" src={item.video} /> */}
                    {console.log(item.title)}
                    <div>
                      <p className="video-title">{item.title}</p>
                      <p className="video-desc">{item.desc}</p>
                      <button
                        className={"info__button"}
                        onClick={() => removeFavorite(item._id)}
                      >
                        {" "}
                        Remove
                      </button>
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
export default YourExercies;