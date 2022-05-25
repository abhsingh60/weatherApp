import logo from './logo.svg';
import './App.css';
import Weather from './compoinents/Weather';
import { useEffect, useState } from 'react';
import Form from './compoinents/Form';

function App() {

  // State
  const [weather,setWeather] = useState([])
  const APIKEY = '68cbbcfd4f4006288245f3c27562c5b0';

  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let today = new Date(),
      date = days[today.getDay()] + ', ' + months[today.getMonth()] + ' ' + today.getDate() + ', ' + today.getFullYear() ;

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
          date:date,
          city: apiData.name,
          humidity: apiData.main.humidity,
          sunrise: apiData.sys.sunrise,
          sunset: apiData.sys.sunset,
          description: apiData.weather[0].description,
          temperature: Math.round((apiData.main.temp * 9/5 - 459.67) - 32) * 5 / 9,
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

  function sunriseSunset(timeStamp) {
    let formattedTime;
    let dates = new Date(timeStamp * 1000);
    let hours = dates.getHours();
    let minutes = '0' + dates.getMinutes();
    let seconds = '0' + dates.getSeconds();
    // Will display time in 10:30:23 format
    return formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
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
          sunrise={sunriseSunset(weather.sunrise)}
          sunset={sunriseSunset(weather.sunset)}
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
