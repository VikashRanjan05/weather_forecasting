import React,{ useState } from 'react';
import './App.css';
import Weather from './Components/Weather';

function App() {
  
  const api_key1 = '6931dbf490ffe090825a3736b1e41b07'; // Weather stack api key
  const api_key = '9337a55ff893c9f7dbbaa956a24f80d1'; // openweather api key
  const [city, setCity] = useState(''); 
  const [Temp, setTemp] = useState('');
  const [Description, setDescription] = useState('');
  const [region , setRegion] = useState('');
  const [country, setCountry] = useState('');
  const [Humidity , setHumidity] = useState('');
  const [Pressure , setPressure] = useState("");
  const [wind , setWind] = useState('');


  const calTemp = (temp) => {
    return Math.floor(temp - 273.15);
  };

  

  // api call
  const getWeather = async (e) => {
    e.preventDefault();

    const value = e.target.elements.place.value;
    const place = value[0].toUpperCase() +  value.slice(1); 
    

    // sweather stack api

    const apiCall = await fetch(
      'http://api.weatherstack.com/current?access_key=' + api_key1 + '&query=' + place
    );
    const response = await apiCall.json();
    console.log(response);


      // openweather api

      // const apiCallopen = await fetch(
      //   'https://api.openweathermap.org/data/2.5/weather?q='+place +'&appid=' +api_key
      // )
      // const responseopen = await apiCallopen.json();
      
      // console.log(responseopen);
      



    if(place === response.location.name){
      setCity(response.location.name);
      setTemp(response.current.temperature);
      setDescription(response.current.weather_descriptions[0]);
      setCountry(response.location.country);
      setRegion(response.location.region);
      setHumidity(response.current.humidity);
      setWind(response.current.wind_speed);
      setPressure(response.current.pressure);
      //setday1(calTemp(responseopen.list[1].main.temp));
    }
    else{
      alert("Please enter a valid city name!");
    }
    
  
   
  };
  return (
    <div className="App">
      <div className="container">
        <h1>Global Weather</h1>
        <form onSubmit={getWeather}>
          <input type="text" placeholder="Enter City Name" name="place" required/>
          <input type="submit" value="Get Weather"/>
        </form>
        
        {city?
          <>
          <h5>{city}</h5>
          <p>{region} , {country}</p>
          <Weather 
          city={city}
          temp={Temp}
          description={Description}
          country={country}
          region={region}
          Pressure={Pressure}
          humidity={Humidity}
          wind_speed={wind}
        />
        </>:""}
      </div>
    </div>
  );
}

export default App;




