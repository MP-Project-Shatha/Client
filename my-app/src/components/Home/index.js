import React from 'react'
import gym from "./../../videos/gym.mp4"
import "./style.css";

const Home = () => {
  return (
    <div>
<div className="bggg">  </div>
      <video
        className="videoInsideDec"
        autoPlay={true}
        loop={true}
        muted={true}
      >5
        <source src={gym} type="video/mp4" />
      </video>
     
    </div>
  )}
  export default Home;
