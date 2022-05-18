import React from "react";
import Typography from "@mui/material/Typography";
import Cards from "./Card";
export default function Home() {
  return (
    <div>
      <Typography
        style={{ marginTop: 20 }}
        variant="h5"
        align="center"
        color="#EE4622"
      >
        Dengarkan Dan Rasakan
      </Typography>
      ;
      <Cards />
    </div>
  );
}
