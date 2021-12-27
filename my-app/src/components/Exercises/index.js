import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
const Exercises = () => {
  const [text, setText] = useState([]);
  const [news, SetNews] = useState([]);
  useEffect(() => {
    result();
  }, []);

  const result = async () => {
    try {
      const data = await axios.get(`https://wger.de/api/v2/exercise/?format=json&limit=20&offset=100`)
        .then(result => {
          SetNews(result.data.results);
          console.log(result);
        });
      // console.log(news);
    } catch (error) {
      // console.log(error);
    }
  };



  return (
    
     <>
        <h1 >Exercises </h1>
      
          {news.map(e => (
            <div>
              {' '}
              
                <h1>{e.name}</h1>
                <p>{e.description}</p>
                
                <br />
                <br />
                
              
            </div>
          ))}{' '}
       
      </>
    
  );
};

export default Exercises
