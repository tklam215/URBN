import React,{useState} from 'react'
import axios from 'axios'

function App() {

  //const url = 'https://api.openweathermap.org/data/2.5/weather?q=dallas&appid=add24a5088aed081dd1adb7368be93d2'


  return (
    <div className="app">
      <div className="container">
          <div className="top">
            <div className="location">
              <p>Philadelphia</p>
            </div>
            <div className="temp">
              <p>60</p>
            </div>
            <div className="description">
              <p>Cloudy</p>
            </div>
          </div>
          <div className="bottom">
            <div className="feel">
              <p>65 Degree</p>
            </div>
            <div className="humidity">
              <p>20%</p>
            </div>
            <div className="wind">
              <p>60MPH</p>
            </div>
          </div>
      </div>
    </div>
  );
}

export default App;
