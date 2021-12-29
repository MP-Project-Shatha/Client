import axios from "axios";
import React, { useEffect, useState } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";

function Information() {
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const navigate = useNavigate();
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
        Waist: e.target.Waist.value,
        chest: e.target.Chest.value,
        thigh: e.target.Thigh.value,
        pelvis: e.target.Pelvis.value,
        ankle: e.target.Ankle.value,
        muscledimeter: e.target.Muscledimeter.value,
        fatpercentage: e.target.Fatpercentage.value,
        bonepercentage: e.target.Bonepercentage.value,
        active: e.target.Active.value,
        nutrition: e.target.Nutrition.value,
      },
      { withCredentials: true }
    );
    console.log(result.data);
    if (result.data == "Done") {
      navigate("/Advices");
    }
  };

  const [user, setuser] = useState([]);
  useEffect(() => {
    setuser(JSON.parse(localStorage.getItem("user")));
  }, []);

  return (
    <div className="overlay">
      <form onSubmit={addInformation}>
        <label htmlFor="Gender">Gender:</label>
        <br />
        <select name="Gender">
          <option value="Female">Female</option>
          <option value="Male ">Male</option>
        </select>
        <br />
        <label htmlFor="Age">Age:</label>
        <br />
        {/*  // يحفظ القيمة */}
        <input type="Age" name="Age" defaultValue=""  id="login__password" className="form__input" />
        <br />
        <label htmlFor="Weight">Weight:</label>
        <br />
        <input type="Weight" name="Weight" />
        <br />
        <label htmlFor="Height">Height:</label>
        <br />
        <input type="Height" name="Height" />
        <br />
        <label htmlFor="Wrist">Wrist:</label>
        <br />
        <input type="Wrist" name="Wrist" />
        <br />
        <label htmlFor="Waist">Waist:</label>
        <br />
        <input type="Waist" name="Waist" />
        <br />
        <label htmlFor="Chest">Chest:</label>
        <br />
        <input type="Chest" name="Chest" />
        <br />
        <label htmlFor="Thigh">Thigh:</label>
        <br />
        <input type="Thigh" name="Thigh" />
        <br />
        <label htmlFor="Pelvis">Pelvis:</label>
        <br />
        <input type="Pelvis" name="Pelvis" />
        <br />
        <label htmlFor="Ankle">Ankle:</label>
        <br />
        <input type="Ankle" name="Ankle" />
        <br />
        <label htmlFor="Muscledimeter">Muscledimeter:</label>
        <br />
        <input type="Muscledimeter" name="Muscledimeter" />
        <br />
        <label htmlFor="Fatpercentage">Fatpercentage:</label>
        <br />
        <input type="Fatpercentage" name="Fatpercentage" />
        <br />
        <label htmlFor="Bonepercentage">Bonepercentage:</label>
        <br />
        <input type="Bonepercentage" name="Bonepercentage" />
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
          <option value="AverageNutrition ">Average nutrition</option>
          <option value="LowNutrition">Low nutrition</option>
        </select>
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Information;
