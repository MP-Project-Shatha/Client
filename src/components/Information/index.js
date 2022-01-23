import axios from "axios";
import React, { useEffect, useState } from "react";
import "./style.css";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Navbar";

function Information() {
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const navigate = useNavigate();
  const [user, setuser] = useState([]);

  const addInformation = async (e) => {
    e.preventDefault();
    console.log(e.target);
    const result = await axios.post(
      `${BASE_URL}/addInfo`,
      {
        id: user.result._id,
        gender: e.target.Gender.value,
        age: e.target.Age.value,
        weight: e.target.Weight.value,
        height: e.target.Height.value,
        wrist: e.target.Wrist.value,
        waist: e.target.Waist.value,
        chest: e.target.Chest.value,
        thigh: e.target.Thigh.value,
        pelvis: e.target.Pelvis.value,
        ankle: e.target.Ankle.value,
        musclediameter: e.target.Muscledimeter.value,
        fatpercentage: e.target.Fatpercentage.value,
        bonepercentage: e.target.Bonepercentage.value,
        active: e.target.Active.value,
        nutrition: e.target.Nutrition.value,
        armdiameter: e.target.Armdiameter.value,
      },
      
    );
    console.log(user);
    let usr = user
    usr.result.weight = e.target.Weight.value
    localStorage.setItem("user",JSON.stringify(usr))

    navigate("/Advices");
    if (result.data == "Done") {
      navigate("/Advices");
    }
  };

  useEffect(() => {
    setuser(JSON.parse(localStorage.getItem("user")));
  }, []);

  return (
    <>
      <Navbar />
      <div className="login-box-container">
        <video
          autoPlay
          muted
          loop
          className="login-background-video-information"
        >
          <source
            src="https://player.vimeo.com/external/433938674.sd.mp4?s=71fbc7c7a37f1123d6884b060f0304cdcf8ac988&profile_id=139&oauth2_token_id=57447761"
            type="video/webm"
          />
          Your browser does not support HTML5 video.
        </video>
        <section className="section-login">
          <div className={"section-login-image flip"}>
            <p>
              Focus On Your <span>Goals</span>, <br />
              The Rest Is Just <span>Noise.</span>
            </p>
            <img
              src="https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className=""
            />
          </div>
          <div className="login-container">
            <div>
              <h1 className={"login-title"}>Information</h1>
              <p className={"login-massage"}>Please enter your details.</p>
            </div>
            <form className="login-form" onSubmit={addInformation}>
              <div className="password-group radio">
                <div className="input-box">
                  <p className="input-label">Gender:</p>
                </div>
                <div className="input-box">
                  <p>Female</p>
                  <input
                    type="radio"
                    name="Gender"
                    value="Female"
                    className={"input-field"}
                  />
                </div>
                <div className="input-box">
                  <p>Male</p>

                  <input
                    type="radio"
                    name="Gender"
                    value="Male"
                    className={"input-field"}
                  />
                </div>
              </div>
              <div className="password-group">
                <div className="input-box">
                  <p className="input-label">Age</p>
                  <input className={"input-field"} type="number" name="Age" />
                </div>
                <div className="input-box">
                  <p className="input-label">Weight (Kg)</p>
                  <input
                    className={"input-field"}
                    type="number"
                    name="Weight"
                  />
                </div>
                <div className="input-box">
                  <p className="input-label">Height (cm) </p>
                  <input
                    className={"input-field"}
                    type="number"
                    name="Height"
                  />
                </div>
              </div>
              <div className="password-group">
                <div className="input-box">
                  <p className="input-label">Wrist (cm) </p>
                  <input className={"input-field"} type="number" name="Wrist" />
                </div>
                <div className="input-box">
                  <p className="input-label">Waist (cm)</p>
                  <input className={"input-field"} type="number" name="Waist" />
                </div>
                <div className="input-box">
                  <p className="input-label">Chest (cm)</p>
                  <input className={"input-field"} type="number" name="Chest" />
                </div>
              </div>
              <div className="password-group">
                <div className="input-box">
                  <p className="input-label">Thigh (cm)</p>
                  <input className={"input-field"} type="number" name="Thigh" />
                </div>
                <div className="input-box">
                  <p className="input-label">Pelvis (cm)</p>
                  <input
                    className={"input-field"}
                    type="number"
                    name="Pelvis"
                  />
                </div>
                <div className="input-box">
                  <p className="input-label">Ankle (cm)</p>
                  <input className={"input-field"} type="number" name="Ankle" />
                </div>
              </div>
              <div className="password-group">
                <div className="input-box">
                  <p className="input-label">Armdiameter (cm)</p>
                  <input
                    className={"input-field"}
                    type="number"
                    name="Armdiameter"
                  />
                </div>
                <div className="input-box">
                  <p className="input-label">Muscledimeter(%)</p>
                  <input
                    className={"input-field"}
                    type="number"
                    name="Muscledimeter"
                  />
                </div>
                <div className="input-box">
                  <p className="input-label">Fatpercentage(%)</p>
                  <input
                    className={"input-field"}
                    type="number"
                    name="Fatpercentage"
                  />
                </div>
              </div>
              <div className="password-group">
                <div className="input-box">
                  <p className="input-label">Bone percentage(%)</p>
                  <input
                    className={"input-field"}
                    type="number"
                    name="Bonepercentage"
                  />
                </div>
              </div>
              <div className="password-group">
                <div className="input-box">
                  <select name="Active" id="Active" className={"input-field"}>
                    <option value="1.5">Active</option>
                    <option value="1.4 ">Average active</option>
                    <option value="1.3">Inactive</option>
                  </select>
                </div>
                <div className="input-box">
                  <select
                    name="Nutrition"
                    id="Nutrition"
                    className={"input-field"}
                  >
                    <option value="HighNutrition">High nutrition</option>
                    <option value="AverageNutrition">Average nutrition</option>
                    <option value="LowNutrition">Low nutrition</option>
                  </select>
                </div>
              </div>

              <input type="submit" className={"submit-btn"} value={"Send"} />
            </form>
          </div>
        </section>
      </div>
    </>
  );
}

export default Information;
