import React from 'react';
import './style/Weather.css';

function Weather(props) {

    const d = new Date();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return (
        <div className="Conatiner">
            <div className="weather_container">
            <p>{days[d.getDay()]} {d.getDate()} {months[d.getMonth()]}</p>
            <div className="temp">
                <h2>{props.temp}&deg; C</h2>
                <p>{props.description}</p>
            </div>
           <div className="extra">
            <div className="ineer_extra">
                <h4>{props.wind_speed}</h4>
                <h3>Wind Speed (Km/hr)</h3>
                
            </div>
            <div className="ineer_extra">
                <h4>{props.Pressure}</h4>
                <h3>Pressure(milibar)</h3>
                
            </div>
            <div className="ineer_extra">
                <h4>{props.humidity}</h4>
                <h3>Humidity(%)</h3>
                
            </div>
           </div>
            
            </div>
            
        </div>

        
    )
}

export default Weather;
