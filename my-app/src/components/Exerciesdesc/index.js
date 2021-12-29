import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "./style.css";

const Exerciesdesc = () => {
    const param =useParams()
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const navigate = useNavigate();
  const [medical, setMedical] = useState([]);
  console.log(JSON.parse(localStorage.getItem("user")).result._id);
  console.log(param.id);
  const getPosts = () => {
    try {
      axios.get(`${BASE_URL}/allExercises`).then((result) => {
        if (result.data) {
          console.log(result.data);
          setMedical(result.data.filter(i=>i._id==param.id));
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
    <div className="profile">
      {medical.map((item, i) => {
        return (
          <div>
            
           <video src={item.video} controls/>
            <tr>
              <td>desc</td>
              <td>:</td>
              <td>{item.desc}</td>
            </tr>
          </div>
        );
      })}
    </div>
  );
};
export default Exerciesdesc;
