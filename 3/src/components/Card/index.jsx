import { format } from 'fecha';
import React from 'react';
import { kelvinToCelsius } from 'temperature';

const Index = ({ content }) => {


    return (
        <div className="card" >
            <h5>{format(new Date(content?.dt * 1000), "ddd")}</h5>
            <img src={`https://openweathermap.org/img/wn/${content?.weather[0]?.icon}@2x.png`} alt="imageX" />

            <div className="temp" >
                <span>{kelvinToCelsius(content?.temp.max).toFixed()}°</span>
                {" "}
                <span>{Math.round(kelvinToCelsius(content?.temp.min))}°</span>

            </div>
        </div>
    )
}

export default Index
