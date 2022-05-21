import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AppbarAdmin from "../component/Admin/AppbarAdmin";
import FormAddMusic from "../component/Admin/FormAddMusic";
import { styled } from "@mui/material/styles";
import { API } from "../config/axios";

export default function AddMusicAdmin() {
  document.body.style.backgroundColor = "black";
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const pages = ["Add Music", "Add Artist", "Logout"];
  const [preview, setPreview] = React.useState(null);
  const thumbnail = React.useRef(null);
  const song = React.useRef(null);

  const Input = styled("input")({
    display: "none",
  });

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleChangeThumbnail = (e) => {
    if (e.target.type === "file") {
      thumbnail.current = e.target.files[0];
      let url = URL.createObjectURL(e.target.files[0]);
      setPreview(url);
    }
  };

  const handleChangeSong = (e) => {
    if (e.target.type === "file") {
      song.current = e.target.files[0];
    }
  };

  const HandleSubmit = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          "Content-type": "multipart/form-data",
        },
      };
      const formData = new FormData();
      formData.set("title", e.target.title.value);
      formData.set("year", e.target.year.value);
      formData.set("artistId", 2);
      formData.set("thumbnail", thumbnail.current, thumbnail.current.name);
      formData.set("song", song.current, song.current.name);
      const response = await API.post("music/add", formData, config);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box>
      <AppbarAdmin
        pages={pages}
        anchorElNav={anchorElNav}
        handleOpenNavMenu={handleOpenNavMenu}
        handleCloseNavMenu={handleCloseNavMenu}
      />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          mt: 10,
        }}
      >
        <Typography sx={{ mb: 4, ml: -60 }} variant="h6" color="white">
          Add Music
        </Typography>
        <FormAddMusic
          handleChangeThumbnail={handleChangeThumbnail}
          handleChangeSong={handleChangeSong}
          HandleSubmit={HandleSubmit}
          Input={Input}
        />
      </Box>
    </Box>
  );
}
