import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';

export default function SearchBox({ updateInfo }) {
    const [city, setCity] = useState("");
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "81e064657ef825b1880eed1b7c62f9df";

    const getWeatherInfo = async () => {
        try {
            let res = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonres = await res.json();

            if (res.ok) {
                let result = {
                    city: city,
                    temp: jsonres.main.temp,
                    minTemp: jsonres.main.temp_min,
                    maxTemp: jsonres.main.temp_max,
                    humidity: jsonres.main.humidity,
                    feelsLike: jsonres.main.feels_like,
                    weather: jsonres.weather[0].description
                };
                console.log(result);
                return result;
            } else {
                console.warn("Error from API:", jsonres.message);
                return null;
            }
        } catch (err) {
            console.error("Fetch error:", err);
            return null;
        }
    };

    const handelChange = (e) => {
        setCity(e.target.value);
    };

    const handelClick = async (e) => {
        e.preventDefault();
        console.log("Searching for:", city);
        const data = await getWeatherInfo();
        if (data) updateInfo(data);
        setCity("");
    };

    return (
        <div className='searchBox'>
            <form onSubmit={handelClick}>
                <TextField
                    id="city"
                    label="City Name"
                    variant="outlined"
                    value={city}
                    required
                    onChange={handelChange}
                />
                <br /><br />
                <Button variant="contained" type="submit">
                    Search
                </Button>
            </form>
        </div>
    );
}
