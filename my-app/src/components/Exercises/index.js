// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// const Exercises = () => {
//   const [text, setText] = useState([]);
//   const [news, SetNews] = useState([]);
//   useEffect(() => {
//     result();
//   }, []);
//   const BASE_URL = process.env.REACT_APP_BASE_URL;

//   const result = async () => {
//     try {
//       const data = await axios
//         .get(`https://wger.de/api/v2/exercise/?format=json&limit=20&offset=100`)
//         .then((result) => {
//           SetNews(result.data.results);
//           console.log(result);
//         });
//       // console.log(news);
//     } catch (error) {
//       // console.log(error);
//     }
//   };

//   return (
//     <>
//       <h1>Exercises </h1>
//       {news.map((e) => (
//         <div>
//           {" "}
//           <h1>{e.name}</h1>
//           <div dangerouslySetInnerHTML={{ __html: e.description }} />
//           <br />
//           <br />
//         </div>
//       ))}{" "}
//     </>
//   );
// };
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./style.css";

const Exercises = () => {
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const navigate = useNavigate();
  const [medical, setMedical] = useState([]);
  console.log(JSON.parse(localStorage.getItem("user")).result._id);
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
    <div className="profile">
      {medical.map((item, i) => {
        return (
          <div>
              <tr>
              <td>desc</td>
              <td>:</td>
              <td>{item.title}</td>
            </tr>
          <img
            src={item.img}
            alt=""
            path="images/"
            onClick={()=>{navigate(`/Exerciesdesc/${item._id}`)}}
          />
        </div>
        );
      })}
    </div>
  );
    };
export default Exercises;
