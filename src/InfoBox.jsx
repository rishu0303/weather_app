import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./InfoBox.css"
export default function InfoBox({data}){
    const INIT_URL = "https://cloudfront-eu-central-1.images.arcpublishing.com/thenational/QB6JJZJTHNFVRJGGBOGUUMVHPE.jpg"
    return(
        <div className="cardContainer">
            <div className="infoBox">
            <Card sx={{ minWidth:380}}>
            <CardMedia
                sx={{ height: 140 }}
                image= {INIT_URL}
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {data.city}
                </Typography>
                <Typography variant="body2" color='text.secondary' component={"span"}>
                <p>Temperature: {data.temp}&deg;C</p>
                <p>Humidity: {data.humidity}</p>
                <p>Min. Temperature: {data.minTemp}&deg;C</p>
                <p>Max. Temperature: {data.maxTemp}&deg;C</p>
                <p>Weather Feels Like : {data.feelsLike}&deg;C</p>
                </Typography>
            </CardContent>
            </Card>
        </div>
        </div>
    )
}