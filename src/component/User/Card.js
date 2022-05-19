import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { red } from "@mui/material/colors";

export default function Cards() {
  return (
    <div style={{ marginLeft: 10, marginRight: 10 }}>
      <Box
        sx={{ display: "flex", flexDirection: "row", justifyContent: "center" }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={6} md={3}>
              <Card
                sx={{
                  maxWidth: 345,
                  backgroundColor: "#3A3A3A",
                  marginBottom: 10,
                }}
              >
                <CardHeader
                  avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                      A
                    </Avatar>
                  }
                  title={
                    <Typography variant="body1" color="white">
                      Airsupply
                    </Typography>
                  }
                  subheader={
                    <Typography variant="body1" color="white">
                      Airsupply
                    </Typography>
                  }
                />
                <CardMedia
                  style={{ padding: 10, borderRadius: 20 }}
                  component="img"
                  height="194"
                  image={require("../../assets/img/bgheader.png")}
                  alt="Paella dish"
                />
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography
                    style={{ padding: 10 }}
                    variant="h6"
                    color="white"
                  >
                    Circles
                  </Typography>
                  <Typography
                    style={{ padding: 10 }}
                    variant="h6"
                    color="white"
                  >
                    2019
                  </Typography>
                </Box>
                <CardActions disableSpacing sx={{ mb: 2 }}>
                  <IconButton
                    sx={{ color: "red" }}
                    aria-label="add to favorites"
                  >
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton sx={{ color: "white" }} aria-label="share">
                    <ShareIcon />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  );
}
