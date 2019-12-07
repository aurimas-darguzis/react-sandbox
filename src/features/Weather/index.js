import React, { useState, useEffect } from "react";
import axios from "axios";
// import { Button } from "@material-ui/core";

export default function Weather() {
  const APIKEY = "3e63086947a52b6ff4ae8569298ce8e9";
  const dataUrl = `http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=${APIKEY}`;

  const [weatherData, setWeatherData] = useState();
  const [min, setMin] = useState();
  const [max, setMax] = useState();

  useEffect(() => {
    // effect
    axios
      .get(dataUrl)
      .then(res => {
        // console.log(res.data.list);
        setWeatherData(res.data.list);
      })
      .catch(err => console.log("erroras"));
    return () => {
      // cleanup
    };
  }, []);

  const setValue = value => {
    return value;
  };

  function getMin() {
    console.log("min");
    return min;
  }

  const getMax = () => {
    return;
  };

  const getMean = () => {
    return;
  };

  const getMode = () => {
    return;
  };

  return (
    <div>
      <button onClick={getMin}>Get min</button>
    </div>
  );
}
