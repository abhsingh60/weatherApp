import logo from './logo.svg';
import './App.css';
import Weather from './compoinents/Weather';
import { useEffect, useState } from 'react';
import Form from './compoinents/Form';

function App() {

  // State
  const [weather,setWeather] = useState([])
  const APIKEY = '68cbbcfd4f4006288245f3c27562c5b0';
  // let today = new Date(),
  //   date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
  async function fetchData(e) {
    const city = e.target.elements.city.value
    const country = e.target.elements.country.value
    e.preventDefault()
    const apiData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${APIKEY}`)
      .then( res => res.json())
      .then(data => data)
      if(city && country) {
        setWeather({
          data: apiData,
          date:apiData.timezone,
          city: apiData.name,
          humidity: apiData.main.humidity,
          sunrise: apiData.sys.sunrise,
          sunset: apiData.sys.sunset,
          description: apiData.weather[0].description,
          temperature: (Math.round(apiData.main.temp * 9/5 - 459.67) - 32) * 5 / 9,
          error:""
        }
        )} else {
          setWeather({
            data: '',
            city: '',
            country: '',
            description: '',
            temperature: '',
            error:"Please Type A City And Country"
        }
        )}
  }

  return (
    <div className="App">
      <ul>
        <h3>WEATHER APP</h3>
        <Form getWeather={fetchData} />
        <Weather
          date = {weather.date}
          city={weather.city}
          humidity={weather.humidity}
          sunrise={weather.sunrise}
          sunset={weather.sunset}
          description={weather.description}
          temperature={weather.temperature}
          error={weather.error}
        />
        {console.log(weather.data)}
      </ul>
    </div>
  );
}

export default App;
