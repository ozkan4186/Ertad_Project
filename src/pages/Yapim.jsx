import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import Data from "../helper/Data2";

export default function MediaCard() {
  const navigate=useNavigate()
  return (
    <Card sx={{
     display:"flex",flexWrap:"wrap",gap:5,justifyContent:"space-evenly" }}>
  

       
        {Data.map((item) => {
          return (
            <div className="rounded-lg shadow-lg bg-gray max-w-sm flex-wrap items-center ">
              <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                <video className="w-full" autoPlay loop muted>
                  <source src={item.image} type="video/mp4" />
                </video>
              </a>
              <div className="p-2">
                <button
                  onClick={() => navigate("/cake")}
                  type="button"
                  className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight 
                uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg
             focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 
             ease-in-out items-center "
                >
                  DETAYI GÖRMEK İÇİN TIKLAYINIZ
                </button>
              </div>
            </div>
          );
        })}
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
  
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
