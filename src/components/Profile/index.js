import React from "react";
import axios from "axios";
import "./style.css";
import { useNavigate } from "react-router";
import { useState, useEffect } from "react";
import Navbar from "../Navbar";
// lom
const BASE_URL = process.env.REACT_APP_BASE_URL;
const Profile = () => {
  const [logged, setLogged] = useState(false);
  const navigate = useNavigate();
  const [account, setAccount] = useState([]);
  const [local, setLocal] = useState([]);
  const [edit, setEdit] = useState("");
  const [editEmail, setEmail] = useState("");

  const getData = async () => {
    // console.log(local);
    if (local.result) {
      // const item = await axios.get(`${BASE_URL}/email/${local.result.email}`);
      const item = await axios.get(`${BASE_URL}/getInfo/${local.result._id}`);
      console.log(item.data.act);
      setAccount(item.data);
    } else {
      // navigate('/home')
    }
  };

  const getDataLS = () => {
    setLocal(JSON.parse(localStorage.getItem("user")));
  };

  useEffect(() => {
    getDataLS();
    getData();
  }, []);
  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, [local]);

  const editName = async (e) => {
    e.preventDefault();
    if (edit.length > 0) {
      const editFullName = await axios.put(
        `${BASE_URL}/edit/${local.result.email}`,

        {
          fullName: edit,
          // newEmail:editEmail,
          // phone:edit,
          // status1:edit,
        }
      );
      console.log(editFullName);
      document.getElementById("username");
      getData();
    } else {
      console.log("");
    }
  };
  const kick = () => {
    // eslint-disable-next-line
    localStorage.clear();
    navigate("/login");
  };

  return (
    <>
      <Navbar />
      <div className="fake-body">
        <div className="profile-background"></div>

        <section className="section-profile">
          <div className="profile-photo">
            <img src={require("../../imges/profile-img.jpg")} alt="" />
          </div>
          <div className="profile-container">
            <div className="profile-item">
              <div>
                <h1>Username:</h1>
                <p>{account.username}</p>
              </div>
              <div>
                <h1>Email:</h1>
                <p>{account.email}</p>
              </div>
            </div>
            <div className="profile-item">
              <div>
                <h1>Age:</h1>

                <p>{account.age}</p>
              </div>
              <div>
                <h1>Weight:</h1>
                <p>{account.weight}</p>
              </div>
            </div>
            <div className="profile-item">
              <div>
                <h1>Height:</h1>
                <p>{account.height}</p>
              </div>
              <div>
                <h1>Wrist:</h1>
                <p>{account.wrist}</p>
              </div>
            </div>
            <div className="profile-item">
              <div>
                <h1>Chest:</h1>

                <p>{account.chest}</p>
              </div>
              <div>
                <h1>Pelvis:</h1>

                <p>{account.pelvis}</p>
              </div>
            </div>
            <div className="profile-item">
              <div>
                <h1>Ankle:</h1>

                <p>{account.ankle}</p>
              </div>
              <div>
                <h1>Arm:</h1>

                <p>{account.armdiameter} ø</p>
              </div>
            </div>
            <div className="profile-item">
              <div>
                <h1>Muscle:</h1>

                <p>{account.musclediameter} ø</p>
              </div>
              <div>
                <h1>Fat:</h1>

                <p>{account.fatpercentage} %</p>
              </div>
            </div>
            <div className="profile-item">
              <div>
                <h1>Bone:</h1>

                <p>{account.bonepercentage} %</p>
              </div>
            </div>
            <div className="profile-item">
              <div>
                <h1>Active:</h1>
                {account.active == 1.5 ? <p>Active</p> : <></>}
                {account.active == 1.4 ? <p>Average active</p> : <></>}
                {account.active == 1.3 ? <p>Inactive</p> : <></>}
              </div>
            </div>
            <div className="profile-item">
              <div>
                <h1>Nutrition:</h1>

                {account.nutrition == "HighNutrition" ? (
                  <p>High Nutrition</p>
                ) : (
                  <></>
                )}

                {account.nutrition == "AverageNutrition" ? (
                  <p>Average Nutrition</p>
                ) : (
                  <></>
                )}

                {account.nutrition == "LowNutrition" ? (
                  <p>Low Nutrition</p>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Profile;
