import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import './WeatherInfo.css';


export default function WeatherInfo(props){
    return (
        <div>

<div className="row pt-3 ps-5 pb-3 pe-5">
<div className="col-4 ">
<div className="data"><FormattedDate date={props.data.date} /></div>
    <div className="city">{props.data.city}</div>
    <div className="temperature">{Math.round(props.data.temperature)} °C</div>
</div>

<div className="col-4  d-flex justify-content-center">
    <ul>
        <li>   <WeatherIcon code={props.data.icon} size={200} /></li>
        <li>   <div className="description">{props.data.description}</div>
</li>
    </ul>



    

</div>

<div className="col-4  weatherInfo">
<div className="row mt-5">
    <div className="col-6 d-flex justify-content-end">
        <ul>
            <li>Feels like :</li>
            <li>Humidity :</li>
            <li>Pressure :</li>
            <li>Wind :</li>
        </ul>
    </div>

<div className="col-6 ">

<ul>
            <li>{Math.round(props.data.feelsLike)} °C</li>
            <li>{props.data.humidity} %</li>
            <li>{props.data.pressure} hPa</li>
            <li>{Math.round(props.data.wind)} m/s</li>
        </ul>

       
    </div>

      
</div>
    
</div>
</div>

            
         

   




        </div>
        
    )
}