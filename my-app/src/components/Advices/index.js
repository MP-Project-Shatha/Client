import React, { useEffect, useState } from "react";
import axios from "axios";

const Advices = () => {
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const [userInfo, setuserInfo] = useState([]);
  const [status, setStatus] = useState("");
  const [massig, setMassig] = useState("");
  const [data, setData] = useState([]);
  
  const getPost = () => {
    try {
      axios
        .get(`${BASE_URL}/getInfo/${userInfo.result._id}`)
        .then((result) => {
          console.log(result.data);
          setData(result.data);
          let s = result.data.weight / (result.data.height/100)**2;
          console.log(s);
          if (s < 18.5) setStatus("underweight") 
           if(s < 18.5) setMassig("NOT GOOD")           
          

          if (s > 18.5  && s <= 25) setStatus("normal");
          if(s > 18.5  && s <= 25) setMassig("Great")
          if (s > 25 && s <= 30) setStatus("overweight");
          if(s > 25 && s <= 30) setMassig("NOT GOOD")
          if (s > 30) setStatus("obesity");
          if(s > 30) setMassig("OMG")
        });
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    setuserInfo(JSON.parse(localStorage.getItem("user")));

  }, []);
useEffect(() => {
  
  if(userInfo.result){
    // setuserInfo(JSON.parse(localStorage.getItem("user")));
    getPost();

  }
  
}, [userInfo])
  return (
    <div>
      {console.log(userInfo.result)}
      Your calories: {userInfo?.result?.weight*24*userInfo?.result?.active}
      <br />
      Status: {status}

      <br />
      <br/>
      Advices :{massig}
      <br/>
      Your Water: {userInfo?.result?.weight * 30}
    </div>
  );
};

export default Advices;
