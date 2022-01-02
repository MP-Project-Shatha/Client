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
      <div className="profile">
        <div>
          <div className="main">
            <div className="card">
              <div>
                <div className="profile">
                  {/* <img
                    clssName="userImg"
                    src={account.img}
                    alt=""
                    width={200}
                    height={200}
                  /> */}
                </div>
                <div className="sidenav-url">
                  {" "}
                  <div>
                    <img
                      src="https://images.pexels.com/photos/7031705/pexels-photo-7031705.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                      id="video1"
                    />
                  </div>
                </div>
              </div>
              <div className="card-body">
                <i className="fa fa-pen fa-xs edit" />
                <table className="listprofile">
                  <tbody>
                    <tr>
                      <td>UserName:</td>
                      <td>{account.username}</td>
                    </tr>
                    <tr>
                      <td>Email:</td>

                      <td>{account.email}</td>
                    </tr>
                    <tr>
                      <td>Weight:</td>

                      <td>{account.weight}</td>
                    </tr>
                    <tr>
                      <td>Age:</td>

                      <td>{account.age}</td>
                    </tr>
                    <tr>
                      <td>Height:</td>

                      <td>{account.height}</td>
                    </tr>
                    <tr>
                      <td>Wrist:</td>

                      <td>{account.wrist}</td>
                    </tr>
                    <tr>
                      <td>Chest:</td>

                      <td>{account.chest}</td>
                    </tr>
                    <tr>
                      <td>Pelvis:</td>

                      <td>{account.pelvis}</td>
                    </tr>
                    <tr>
                      <td>Ankle:</td>

                      <td>{account.ankle}</td>
                    </tr>
                    <tr>
                      <td>Armdiameter:</td>

                      <td>{account.armdiameter}</td>
                    </tr>
                    <tr>
                      <td>Musclediameter:</td>

                      <td>{account.musclediameter}</td>
                    </tr>
                    <tr>
                      <td>Fatpercentage:</td>

                      <td>{account.fatpercentage}</td>
                    </tr>
                    <tr>
                      <td>Bonepercentage:</td>

                      <td>{account.bonepercentage}</td>
                    </tr>
                    <tr>
                      <td>Active:</td>

                      <td>{account.active == 1.5 ? <p>Active</p> : <></>}</td>
                      <td>{account.active == 1.4 ? <p>Average active</p> : <></>}</td>
                      <td>{account.active == 1.3 ? <p>Inactive</p> : <></>}</td>
                    </tr>
                    <tr>
                      <td>Nutrition:</td>

                      <td>
                        {account.nutrition == "HighNutrition" ? (
                          <p>High Nutrition</p>
                        ) : (
                          <></>
                        )}
                      </td>
                      <td>
                        {account.nutrition == "AverageNutrition" ? (
                          <p>Average Nutritio</p>
                        ) : (
                          <></>
                        )}
                      </td>
                      <td>
                        {account.nutrition == "LowNutrition" ? (
                          <p>Low Nutritio</p>
                        ) : (
                          <></>
                        )}
                      </td>
                    </tr>
                 </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
