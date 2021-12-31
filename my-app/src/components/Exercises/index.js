import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./style.css";

const Exercises = () => {
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const navigate = useNavigate();
  const [medical, setMedical] = useState([]);

  // exercises befor login

  // console.log(JSON.parse(localStorage.getItem("user")).result._id);
  const getPosts = () => {
    try {
      
      axios
        .get(`${BASE_URL}/allExercises`)
        .then((result) => {
          if (result.data) {
            console.log(result.data);
            setMedical(result.data);
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
    <div className="wrapper">

      {medical.map((item, i) => {
        return (
          <div >
           
      
            <div className="cardss">
           
              <p> {item.type}</p>
              <div className="card" > <img
              src={item.img}
              alt=""
              path="images/"
              onClick={()=>{navigate(`/Exerciesdesc/${item._id}`)}}
              /> </div>
            
            </div>
            <div />
          </div>
        
        
        );
      })}
    </div>
  );
    };
export default Exercises;

