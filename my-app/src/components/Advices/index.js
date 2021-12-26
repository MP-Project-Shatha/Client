import React, { useEffect, useState } from "react";
import axios from "axios";

const Advices = () => {
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const [userInfo, setuserInfo] = useState([]);
  const [status, setStatus] = useState("");

  const getPost = () => {
    try {
      axios
        .get(`${BASE_URL}/getInfo/${id}`)
        .then((result) => {
          console.log(result.data);
          setuserInfo(result.data);
          let s = result.data.weight / result.data.height^2;
          console.log(s);
          if (s > 16  && s < 18 ) setStatus("underweight");
          if (s > 19  && s < 25) setStatus("normal");
          if (s > 26 && s < 30) setStatus("overweight");
          if (s > 31 && s < 40) setStatus("obesity");
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
      Your calories: {userInfo.weight * 24 * userInfo.active}
      <br />
      Status: {status}
      <br />
      Your Water: {userInfo.weight * 30}
    </div>
  );
};

export default Advices;
