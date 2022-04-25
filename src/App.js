import React,{useState,useEffect} from 'react'
import axios from 'axios'

function App() {
  const [data,setData] = useState({})
  const [location, setLocation] = useState('')

  useEffect(()=>{
    async function getWeather(event){
      searchLocation(event)
    }
  })
  
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=add24a5088aed081dd1adb7368be93d2`

  const searchLocation = async (event) =>{
    if(event.key === 'Enter'){
      try{
          await axios.get(url).then((response) => {
          setData (response.data)
          //console.log(response.data)
          })
          setLocation('')
      }catch(error){
          console.log(error)
          alert("Invaild Location")
      }
    }
  }

  return (
    <div className="app">
      <div className="search">
        <input 
        value={location}
        onChange={event => setLocation(event.target.value)}
        onKeyPress={searchLocation}
        placeholder='Enter Location'
        type="text"/>
      </div>
      <div className="container">
          <div className="top">
            <div className="location">
              <p>{data.name}</p>
            </div>
            <div className="temp">
             { data.main ?<h1>{data.main.temp.toFixed()}°F</h1>:null} 
            </div>
            <div className="description">
              {data.weather ? <p>{data.weather[0].main}</p>:null}
            </div>
          </div>
          {data.name !== undefined && 
            <div className="bottom">
              <div className="feels">
                {data.main? <p className='bold'>{data.main.feels_like.toFixed()}°F</p> :null}
                <p>Feels Like</p>
              </div>
              <div className="humidity">
              {data.main? <p className='bold'>{data.main.humidity}°F</p> :null}
                <p>Humidity</p>
              </div>
              <div className="wind">
                {data.main? <p className='bold'>{data.wind.speed.toFixed()}MPH</p> :null}
                <p>Wind Speed</p>
              </div>
            </div>
          }
      </div>
    </div>
  );
}

export default App;
