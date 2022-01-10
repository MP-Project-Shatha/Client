import React from 'react'
import Navbar from '../Navbar';
import {Link} from "react-router-dom";
import gym from "./../../videos/gym.mp4"
import "./style.css";
import {AiOutlineArrowDown, AiOutlineArrowRight} from "react-icons/ai";
import {FaRunning} from "react-icons/fa";
import {BiSwim} from "react-icons/bi";
import {GiChestArmor} from "react-icons/gi";

const Home = () => {
    return (
        <>
            <Navbar/>
            <section className={"welcome-section"}>
                <div className="welcome-screen">
                    <div className="welcome-text">
                        <p>start <span>exercising</span> today</p>
                    </div>
                </div>
                <video
                    className="videoInsideDec"
                    autoPlay={true}
                    loop={true}
                    muted={true}>
                    <source src={gym} type="video/mp4"/>
                </video>

            </section>
           
            <section className="top-exercises">
                <div className="scroll-down">
                    <span><AiOutlineArrowDown/></span>
                </div>
                <h1 className={"section-title"}>
                    Top Workout in Hero Gym
                </h1>
                <div className="cards-container">
                    <div className="card">
                        <span><GiChestArmor/></span>

                        <h2 className="card-title">
                            Chest Workout
                        </h2>
                        <p className="card-desc">
                            Chest Exercises Will Make Your Body Shape And Train Breathing And Make Blood Circulation Smooth
                        </p>
                        <Link className="learn-more-link" to="/Exerciesdesc/Chest">
                            Learn more <i><AiOutlineArrowRight/></i>
                        </Link>

                    </div>
                    <div className="card">
                        <span><FaRunning/></span>

                        <h2 className="card-title">
                            Leg Workout
                        </h2>
                        <p className="card-desc">
                            By Training Your Leg Muscles, You Will Not
                            Get Tired Quickly And Make Your Legs Avoid
                            Cramps In Every Condition
                        </p>
                        <Link className="learn-more-link" to="/Exerciesdesc/Adductors">
                            Learn more <i><AiOutlineArrowRight/></i>
                        </Link>
                    </div>
                    <div className="card">
                        <span><BiSwim/></span>

                        <h2 className="card-title">
                            Belly Workout
                        </h2>
                        <p className="card-desc">
                            Abdominal Exercises Will Make Your Body
                            Look Like A Bodybuilder And Big And Will
                            Make You A Girl
                        </p>
                        <Link className="learn-more-link" to="/Exerciesdesc/Abs">
                            Learn more <i><AiOutlineArrowRight/></i>
                        </Link>
                    </div>
                </div>
                
            </section>
            
        </>
    )
}
export default Home;
