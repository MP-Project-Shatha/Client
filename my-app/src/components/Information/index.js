import axios from "axios";
import React, { useEffect, useState } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import schedule from "node-schedule";
import Navbar from "../Navbar";

function Information() {
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const navigate = useNavigate();
  // const day = day(0-7);

  // schedule.scheduleJob(day, () => {
  //   addInformation();
  //  });

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
      },
      { withCredentials: true }
    );
    navigate("/Advices");
    // console.log(result.data);
    if (result.data == "Done") {
      navigate("/Advices");
    }
  };

  const [user, setuser] = useState([]);
  useEffect(() => {
    setuser(JSON.parse(localStorage.getItem("user")));
  }, []);

  return (
    <>
      <Navbar />

      <div className="overlay-info">
        <div>
          <img
            src="https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            id="video1"
          />
        </div>

        <form onSubmit={addInformation}>
          <label htmlFor="Gender">Gender:</label>
          <br />
          {/* <option value="Female">Female</option>
          <option value="Male ">Male</option> */}
          <div name="Gender">
            <input type="radio" name="Gender" value="Female" />
            <label for="age1">Female</label>
            <input type="radio" name="Gender" value="Male" />
            <label for="age1">Male</label>
          </div>

          <br />
          <label htmlFor="Age">Age:</label>
          <br />
          {/*  // يحفظ القيمة */}
          <input className="infoInput" type="Age" name="Age" defaultValue="" />
          <br />
          <label htmlFor="Weight">Weight:</label>
          <br />
          <input className="infoInput" type="Weight" name="Weight" />
          <br />
          <label htmlFor="Height">Height:</label>
          <br />
          <input className="infoInput" type="Height" name="Height" />
          <br />
          <label htmlFor="Wrist">Wrist:</label>
          <br />
          <input className="infoInput" type="Wrist" name="Wrist" />
          {/* //defaultValue={item.} */}
          <br />
          <label htmlFor="Waist">Waist:</label>
          <br />
          <input className="infoInput" type="Waist" name="Waist" />
          <br />
          <label htmlFor="Chest">Chest:</label>
          <br />
          <input className="infoInput" type="Chest" name="Chest" />
          <br />
          <label htmlFor="Thigh">Thigh:</label>
          <br />
          <input className="infoInput" type="Thigh" name="Thigh" />
          <br />
          <label htmlFor="Pelvis">Pelvis:</label>
          <br />
          <input className="infoInput" type="Pelvis" name="Pelvis" />
          <br />
          <label htmlFor="Ankle">Ankle:</label>
          <br />
          <input className="infoInput" type="Ankle" name="Ankle" />
          <br />
          <label htmlFor="Muscledimeter">Muscledimeter:</label>
          <br />
          <input
            className="infoInput"
            type="Muscledimeter"
            name="Muscledimeter"
          />
          <br />
          <label htmlFor="Fatpercentage">Fatpercentage:</label>
          <br />
          <input
            className="infoInput"
            type="Fatpercentage"
            name="Fatpercentage"
          />
          <br />
          <label htmlFor="Bonepercentage">Bonepercentage:</label>
          <br />
          <input
            className="infoInput"
            type="Bonepercentage"
            name="Bonepercentage"
          />
          <br />
          <br />
          <select name="Active" id="Active">
            <option value="1.5">Active</option>
            <option value="1.4 ">Average active</option>
            <option value="1.3">Inactive</option>
          </select>
          <br />
          <select name="Nutrition" id="Nutrition">
            <option value="HighNutrition">High nutrition</option>
            <option value="AverageNutrition">Average nutrition</option>
            <option value="LowNutrition">Low nutrition</option>
          </select>
          {/* <button type="submit">Submit</button> */}
          <div className="group">
            <button class="custom-btn btn-22" id="but-lift-2"  type="submit">
              {" "}
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Information;
