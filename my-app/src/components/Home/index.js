import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const [userInfo, setuserInfo] = useState([]);
  const [status, setStatus] = useState("");

  const getPost = () => {
    try {
      axios
        .get(`${BASE_URL}/getInfo/61c37b42ff433fb0f9c1ef92`)
        .then((result) => {
          console.log(result.data);
          setuserInfo(result.data);
          let s = result.data.height / result.data.weight;
          console.log(s);
          if (s > 5 && s < 7) setStatus("normal");
          if (s > 1 && s < 3) setStatus("underweight");
          if (s > 5 && s < 10) setStatus("overweight");
          if (s > 3 && s < 5) setStatus("obesity");
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
    <div>
      home
      <br />
      <br />
      <br />
      Your calories: {userInfo.weight * 24 * userInfo.active}
      <br />
      Status: {status}
      <br />
      Your Water: {userInfo.weight * 30}
    </div>
  );
};

export default Home;
