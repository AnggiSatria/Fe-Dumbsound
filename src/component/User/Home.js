import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { API } from "../../config/axios";
import React from "react";
import Cards from "./Card";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";

export default function Home() {
  const [music, setMusic] = React.useState(null);
  const [status, setStatus] = React.useState(null);
  const [attache, setAttache] = React.useState({
    attache: "",
    title: "",
  });
  const [hideMusic, sethideMusic] = React.useState(false);

  const handleOpenMusic = async (id) => {
    try {
      sethideMusic(true);
      const response = await API.get("/music/" + id);
      setAttache({
        attache: response.data.data.musics.attache,
        title: response.data.data.musics.title,
      });
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    const getMusic = async () => {
      try {
        const response = await API.get("/musics");
        setMusic(response.data.data.musics);
      } catch (error) {
        console.log(error);
      }
    };
    getMusic();
    const getUserStatus = async () => {
      try {
        const response = await API.get("/transactions/user");
        setStatus(response.data.data.dataTransaction.status);
      } catch (error) {
        console.log(error);
      }
    };
    getUserStatus();
  }, []);

  return (
    <Box>
      <Typography
        style={{ marginTop: 20, marginBottom: 80 }}
        variant="h5"
        align="center"
        color="#EE4622"
      >
        Dengarkan Dan Rasakan
      </Typography>
      <Cards music={music} status={status} handleOpenMusic={handleOpenMusic} />
      <AppBar
        position="fixed"
        color="transparent"
        sx={{ top: "auto", bottom: 0 }}
      >
        <Toolbar>
          {hideMusic ? (
            <Box
              sx={{ width: "100%", display: "flex", flexDirection: "column" }}
            >
              <AudioPlayer
                header={attache.title}
                style={{ backgroundColor: "black", color: "white" }}
                src={attache.attache}
              />
            </Box>
          ) : null}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
