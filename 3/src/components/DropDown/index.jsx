import React, { useEffect, useState } from 'react'
import cities from "../../cities-tr"
import axios from "axios"
import { apiKey, baseURL } from '../../consts/api'
import { useWeather } from "../../context/weatherContext"

const DropDown = () => {

    const { setdata } = useWeather()

    const [selected, setselected] = useState(cities[33])


    const fetchData = async () => {
        const { data: apiData } = await axios.request({
            url: baseURL,
            params: {
                lat: selected.latitude,
                lon: selected.longitude,
                appid: apiKey
            }
        })

        setdata(apiData)
    }

    useEffect(() => {
        fetchData()
    }, [selected])

    return (
        <div className="dropDownContainer">
            <div className="dropDown">
                <select name="cities" id="cities" defaultValue={cities[33].id} onChange={e => setselected(cities[Number(e.target.value) - 1])}>
                    {cities.map(item => (
                        <option value={item.id}>{item.name}</option>
                    ))}
                </select>
            </div>
        </div>
    )
}

export default DropDown
