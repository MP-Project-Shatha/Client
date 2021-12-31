import React from 'react'
import Navbar from '../Navbar';
import gym from "./../../videos/gym.mp4"
import "./style.css";

const Home = () => {
  return (
    <div>
           <Navbar/> 

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
