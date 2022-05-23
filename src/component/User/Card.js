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
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import { red } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";

export default function Cards({ music, handleOpenMusic, status }) {
  const navigate = useNavigate();
  return (
    <div style={{ marginLeft: 10, marginRight: 10 }}>
      <Box
        sx={{ display: "flex", flexDirection: "row", justifyContent: "center" }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            {music?.map((value) => {
              return (
                <Grid key={value.id} item xs={6} md={3}>
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
                          {value.artists.name}
                        </Typography>
                      }
                      subheader={
                        <Typography variant="body1" color="white">
                          {value.artists.type}
                        </Typography>
                      }
                    />
                    <CardMedia
                      style={{ padding: 10, borderRadius: 20 }}
                      component="img"
                      height="194"
                      src={value.thumbnail}
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
                        {value.title.slice(0, 10) + " ..."}
                      </Typography>
                      <Typography
                        style={{ padding: 10 }}
                        variant="h6"
                        color="white"
                      >
                        {value.year}
                      </Typography>
                    </Box>
                    <CardActions disableSpacing sx={{ mb: 2 }}>
                      {status === "success" ? (
                        <IconButton
                          sx={{ color: "white" }}
                          aria-label="share"
                          onClick={() => handleOpenMusic(value.id)}
                        >
                          <PlayCircleOutlineIcon />
                          <Typography variant="h6" sx={{ ml: 1 }} color="white">
                            Play
                          </Typography>
                        </IconButton>
                      ) : (
                        <IconButton
                          sx={{ color: "white" }}
                          aria-label="share"
                          onClick={() => navigate("/user/payment")}
                        >
                          <PlayCircleOutlineIcon />
                          <Typography variant="h6" sx={{ ml: 1 }} color="white">
                            Play
                          </Typography>
                        </IconButton>
                      )}
                    </CardActions>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Box>
    </div>
  );
}
