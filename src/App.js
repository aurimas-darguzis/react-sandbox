import React, { useState, useEffect } from "react";
import axios from "axios";
import logo from "./logo.svg";
import "./App.css";
import { Notification, showNotification } from "./features/Notification/";
import { Button, makeStyles } from "@material-ui/core";
import Spinner from "./features/Spinner";
import Weather from "./features/Weather";

const useStyles = makeStyles(() => ({
  divider: {
    marginTop: "50px"
  }
}));

function App() {
  const APIKEY = "3e63086947a52b6ff4ae8569298ce8e9";
  const dataUrl = `http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=${APIKEY}`;

  const classes = useStyles();
  const [weatherData, setWeatherData] = useState();

  useEffect(() => {
    axios
      .get(dataUrl)
      .then(res => {
        setWeatherData(res.data.list);
      })
      .catch(err => console.log("erroras"));
    return () => {
      // cleanup
    };
  }, []);

  const openSnackbar = (msg, variant) => {
    showNotification({ message: msg, variant: variant });
    // showNotification({ message: 'water', variant: 'success' });
    // showNotification({ message: 'water', variant: 'info' });
    // showNotification({ message: 'banana', variant: 'warning' });
    // showNotification({ message: 'tomato', variant: 'error' });
  };

  const getMin = () => {
    console.log(weatherData);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Weather /> */}
        <Button variant="contained" color="secondary" onClick={() => getMin()}>
          MIN
        </Button>
        <Notification />
        <div className={classes.divider}></div>
        <Spinner />
      </header>
    </div>
  );
}

export default App;
