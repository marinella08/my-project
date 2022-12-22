import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";


export default function WeatherInfo(props){
    return (
        <div>
            <div className="city">{props.data.city}</div>
         <FormattedDate date={props.data.date} />

      <div className="description">{props.data.description}</div>
      <div className="humidity">{props.data.humidity} %</div>
      <div className="feelsLike">{Math.round(props.data.feelsLike)} °C</div>
      <div className="wind">{Math.round(props.data.wind)} m/s</div>
      <div className="pressure">{props.data.pressure} hPa</div>
      <div>
      <div>
              <WeatherIcon code={props.data.icon} size={52} />
            </div>

      </div>
        </div>
        
    )
}