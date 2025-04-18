import { useState } from "react"
import InfoBox from "./InfoBox"
import SearchBox from "./SearchBox"

export default function WeatherApp(){
    let [data,setData] = useState({
        city:"Delhi",
        feelsLike : 26.36,
        temp : 24.04,
        maxTemp:29.32,
        minTemp : 22.01,
        humidity:47,
        weather:"Hazy"
    })

    let updateInfo = (newData) =>{
        setData(newData);
    }

    return(
        <div style={{textAlign:"center"}}>
            <h2>Weather App</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox data={data}/>
        </div>
    )
}