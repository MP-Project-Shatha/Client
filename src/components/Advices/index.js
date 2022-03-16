import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./style.css";
import Navbar from "../Navbar";
import { AiOutlinePrinter } from "react-icons/ai";

const Advices = () => {
  const navigate = useNavigate();
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const [userInfo, setuserInfo] = useState([]);
  const [status, setStatus] = useState("");
  const [massig, setMassig] = useState("");
  const [data, setData] = useState([]);

  const getPost = () => {
    try {
      axios.post(`${BASE_URL}/getInfoAdvices/${userInfo.result._id}`).then((result) => {
        // console.log(result.data);
        getPost();
        setData(result.data);
        
        let s = result.data.weight / (result.data.height / 100) ** 2;
        // console.log(s);
        
        if (s < 18.5) setStatus("Underweight");
        if (s < 18.5)
          setMassig(
            " Your weight range isn't healthy. Unhealthy weight doesn't necessarily mean being overweight. It includes any body that's not on the right track of a healthy daily lifestyle by which someone can transform into a better version of themselves. You should get hydrated more often by having a minimum number of water cups that you shouldn't go below so you can keep this habit in mind everyday. You also need to have a healthy food system that is rich with protein, carbohydrates and fibres, and doesn't contain unhealthy foods. You should practice in a daily basis and try to build some muscles to take the healthy lifestyle path regularly. Then, at the end of the day, sleeping well is essential. Get not less than 8 hours of sleep everyday. With these you can jump into a better health level."
          );

        if (s > 18.5 && s <= 25) setStatus("Normal");
        if (s > 18.5 && s <= 25)
          setMassig(
            "Your weight range is average. It's considered healthy somehow. But you still have challenges to do. You have to maintain your level of everything that contributes to having a normal, healthy weight. You should maintain and necessarily increase your hydration. Most importantly is you don't get below your hydration level. Your food system seems to be healthy as well. The challenge is to maintain it since it's most difficult part in the process. For your daily practice, keep your level up and be energetic since sticking up to such a lifestyle rquires great determination. Then, at the end of the day, sleeping well is essential. You definitely get around 8 hours of sleep everyday, which you should arrange properly and maintain. With these you can be always healthy as you are."
          );
        if (s > 25 && s <= 30) setStatus("Overweight");
        if (s > 25 && s <= 30)
          setMassig(
            "Your weight range is above the average. You're near to the red zone area. It might be dangerous if you don't control your system. You have challenges to do but they're not difficult for someone like you! You will have to start arranging your daily routine starting from your food system, water, practicing and sleeping. Arranging these pivot factors will have a direct impact on your body. You should increase and maintain your hydration level by having a number of cups that are per the healthy recommendations. Water will make your life easier, more than you expect. Most importantly is you don't get below your hydration level. Your food system is surely unhealthy and you need to fix it starting from adding protein and measured carbohydrates and fibres. Decrease your calories according to the range recommended above. And try to reduce the fast foods especially. With these, you need to insert some practices to your day, even if starting with walking only. Then, step by step, you will lose weight and start having a healthy body and lifestyle in general which will make you excited and open for any challenges ahead. For your daily practice, keep your level up and be energetic since sticking up to such a lifestyle rquires great determination. Then, at the end of the day, sleeping well is essential. Get not more nor less than 8 hours per day. With these you can always be healthy."
          );
        if (s > 30) setStatus("Obesity");
        if (s > 30)
          setMassig(
            "Your  weight range is above the average. You're in the red zone area. It might be dangerous for someone to reach the obesity rate without being careful to the lifestyle system. You have challenges to do but they're not difficult for someone like you! You will have to start arranging your daily routine starting from your food system, water, practicing and sleeping. Arranging these pivot factors will have a direct impact on your body. You should increase and maintain your hydration level by having a number of cups that are per the healthy recommendations. Water will make your life easier, more than you expect. Most importantly is you don't get below your hydration level. Your food system is surely unhealthy and you need to fix it starting from adding protein and measured carbohydrates and fibres. Decrease your calories according to the range recommended above. And try to reduce the fast foods especially. With these, you need to insert some practices to your day, even if starting with walking only. Then, step by step, you will lose weight and start having a healthy body and lifestyle in general. For your daily practice, keep your level up and be energetic since sticking up to such a lifestyle rquires great determination. Then, at the end of the day, sleeping well is essential. Get not more nor less than 8 hours per day. With these you can always be healthy."
          );
      });
    } catch (error) {
      console.log(error);
    }
  };

  // const navigateee =()=>{

  //   navigate("/home")
  // }
  useEffect(() => {
    setuserInfo(JSON.parse(localStorage.getItem("user")));
  }, []);
  useEffect(() => {
    if (userInfo.result) {
      getPost();
    }
  }, [userInfo]);
  return (
    <>
      <Navbar />

      <div className="frame">
        {!data?.weight?   (
          
          <button
            className={"info__button"}
            onClick={() => {
              navigate("/Information");
            }}
          >
            Go to page information
          </button>
          
        ) : (
          <div className="list">
            <div className={"print-btn"}>
              <button onClick={window.print}>
                <AiOutlinePrinter />{" "}
              </button>
            </div>
            <ul>
              <li>
                <label htmlFor="item-2" className="text">
                  Your calories:{" "}
                </label>
                <p>
                  {userInfo?.result?.weight * 24 * userInfo?.result?.active}{" "}
                  Kcal:
                </p>
              </li>
              <li>
                <label htmlFor="item-3" className="text">
                  Status:
                </label>
                <p>{status}</p>
              </li>
              <li>
                <label htmlFor="item-4" className="text">
                  Advices:
                </label>
                <h5>{massig}</h5>
              </li>
              <li>
                <label htmlFor="item-4" className="text">
                  Your Water:
                </label>
                <p>{userInfo?.result?.weight * 30} ml.</p>
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};
export default Advices;