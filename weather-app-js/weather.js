import axios from "axios";

export function getweather(lat, long, timezone){
    return axios.get("https://api.open-meteo.com/v1/forecast?current=temperature_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m&hourly=temperature_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,apparent_temperature_max,apparent_temperature_min&wind_speed_unit=mph&precipitation_unit=inch&timeformat=unixtime", {
        params: {
            latitude:lat,
            longitude:long,
            timezone,
        },
    })
}

//https://api.open-meteo.com/v1/forecast?latitude=25.2837888&longitude=55.4172416&current=temperature_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m&hourly=temperature_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,apparent_temperature_max,apparent_temperature_min&wind_speed_unit=mph&precipitation_unit=inch&timeformat=unixtime&timezone=Africa%2FCairo