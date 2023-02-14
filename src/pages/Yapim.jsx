import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import Data from "../helper/Data2";
import { Box } from "@mui/system";

export default function MediaCard() {
  const navigate = useNavigate();
  return (
    <Box>
      <Box component="h1" sx={{
        marginTop:{
          xs:"4rem",
          md:"8rem"
        },
        textAlign:"center",
        backgroundColor:"gray",
        padding:"2rem"

      }}  >
        YAPIM AŞAMALARI

      </Box>
      <Card
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 5,
          justifyContent: "space-evenly",
          width: "70%",
          margin: "2rem auto ",
        }}
      >
        {Data.map((item) => {
          return (
            <div className="rounded-lg shadow-lg bg-gray max-w-sm flex-wrap items-center ">
              <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                <video className="w-full p-3" autoPlay loop muted>
                  <source src={item.image} type="video/mp4" />
                </video>
              </a>
              <div className="text-center p-3 ">
                <Button variant="contained">Contained</Button>
              </div>
            </div>
          );
        })}
      </Card>
    </Box>
  );
}
