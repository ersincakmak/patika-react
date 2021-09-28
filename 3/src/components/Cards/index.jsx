import React from 'react'
import { useWeather } from '../../context/weatherContext'
import Card from "../Card"

const Cards = () => {

    const { data } = useWeather()

    console.log(data)


    return (
        <div className="cards" >
            {data?.daily?.map(item => (
                <Card content={item} />
            ))}
        </div>
    )
}

export default Cards
