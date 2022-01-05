import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../Navbar";
import "./style.css";

const Exerciesdesc = () => {
  const param = useParams();
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const navigate = useNavigate();
  const [workout, setWorkout] = useState([]);
  const [search, setSearch] = useState("");
  console.log(param.id);
  const getPosts = () => {
    try {
      axios.get(`${BASE_URL}/allExercises`).then((result) => {
        if (result.data) {
          console.log(result.data.filter((i) => i.type == param.id));
          setWorkout(result.data.filter((i) => i.type == param.id));
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
    <Navbar />

    <div className="profile">
    <div>
          <input type="text" name="search" id="search" onChange={(e)=>setSearch(e.target.value)}/>
        </div>
      <div className="card-show">
      
      {workout.length && 
      
      workout.filter((ele)=>{
        if (search == "") {
          return ele
        } else if (ele.title.toLowerCase().includes(search.toLowerCase())) {
          return ele
        }
      }).map((item, i) => {
        return (
          <div key={i}>
            <tr>
              <td>{item.title}</td>
            </tr>
            <div>
            <video className="vWorkout" src={item.video} controls />
            </div>
            <tr>
              <td>{item.desc}</td>
            </tr>
          </div>
        );
      })}
      </div>
    </div>
    </>
  );
};

export default Exerciesdesc;
