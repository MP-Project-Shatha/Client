import React from "react";
import axios from "axios";
import "./style.css";
import { useNavigate } from "react-router";
import { useState, useEffect } from "react";
import Navbar from "../Navbar";

const BASE_URL = process.env.REACT_APP_BASE_URL;
const Profile = () => {
  const navigate = useNavigate();
  const [account, setAccount] = useState([]);
  const [local, setLocal] = useState([]);
  const [edit, setEdit] = useState("");
  const [editEmail, setEmail] = useState("");

  const getData = async () => {
    console.log(local);
    if (local.result) {
      const item = await axios.get(`${BASE_URL}/email/${local.result.email}`);

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
    <div className="profile">
      {account.map((item, i) => {
        console.log(item.img);
        return (
          <div>




            <div className="main">
              <h2>PROFILE</h2>
              <div className="card">
              <div >
              <div className="profile">
                <img
                  src={item.img}
                  alt=""
                  width={100}
                  height={100}
                />
              </div>
              <div className="sidenav-url"></div>
            </div>
                <div className="card-body">
                  <i className="fa fa-pen fa-xs edit" />
                  <table>

                    <tbody>
                      <tr>
                        <td>UserName</td>
                        <td>:</td>
                        <td>{item.username}</td>
                      </tr>
                      <tr>
                        <td>Email</td>
                        <td>:</td>
                        <td>{item.email}</td>
                      </tr>
                      <tr>
                        <td>weight</td>
                        <td>:</td>
                        <td>{item.weight}</td>
                      </tr>
                      <tr>
                        <td>fatpercentage</td>
                        <td>:</td>
                        <td>{item.fatpercentage}</td>
                      </tr>
                      <tr>
                        <td>Age</td>
                        <td>:</td>
                        <td>{item.age}</td>
                      </tr>
                      <tr>
                        <td>weight</td>
                        <td>:</td>
                        <td>{item.weight}</td>
                      </tr>
                      <tr>
                        <td>height</td>
                        <td>:</td>
                        <td>{item.height}</td>
                      </tr>
                      <tr>
                        <td>wrist</td>
                        <td>:</td>
                        <td>{item.wrist}</td>
                      </tr>
                      <tr>
                        <td>chest</td>
                        <td>:</td>
                        <td>{item.chest}</td>
                      </tr>
                      <tr>
                        <td>pelvis</td>
                        <td>:</td>
                        <td>{item.pelvis}</td>
                      </tr>
                      <tr>
                        <td>ankle</td>
                        <td>:</td>
                        <td>{item.ankle}</td>
                      </tr>
                      <tr>
                        <td>armdiameter</td>
                        <td>:</td>
                        <td>{item.armdiameter}</td>
                      </tr>
                      <tr>
                        <td>musclediameter</td>
                        <td>:</td>
                        <td>{item.musclediameter}</td>
                      </tr>
                      <tr>
                        <td>fatpercentage</td>
                        <td>:</td>
                        <td>{item.fatpercentage}</td>
                      </tr>
                      <tr>
                        <td>bonepercentage</td>
                        <td>:</td>
                        <td>{item.bonepercentage}</td>
                      </tr>
                      <tr>
                        <td>active</td>
                        <td>:</td>
                        <td>{item.active==1.5?<p>active</p>:<></>}</td>
                        <td>{item.active==1.4?<p>Average</p>:<></>}</td>
                        <td>{item.active==1.3?<p>low</p>:<></>}</td>
                      </tr>
                      <tr>
                        <td>nutrition</td>
                        <td>:</td>
                        {console.log(item)}
                        <td>{item.nutrition=="HighNutrition"? <p>High Nutrition</p>:<></>}</td>
                        <td>{item.nutrition=="AverageNutrition"?<p>Average Nutritio</p>:<></>}</td>
                        <td>{item.nutrition=="LowNutrition"?<p>Low Nutritio</p>:<></>}</td>
                      </tr>
                     
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
    </>
  );
};

export default Profile;