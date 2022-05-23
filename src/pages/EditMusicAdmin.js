import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AppbarAdmin from "../component/Admin/AppbarAdmin";
import FormEditMusic from "../component/Admin/FormEditMusic";
import { styled } from "@mui/material/styles";
import { API } from "../config/axios";
import { useNavigate, useLocation } from "react-router-dom";

export default function EditMusicAdmin() {
  document.body.style.backgroundColor = "black";
  const { state } = useLocation();
  const navigate = useNavigate();
  const id = state.id;
  const pages = ["Add Music", "Add Artist", "Logout"];

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [preview, setPreview] = React.useState({
    image: "",
    url: "",
  });
  const [loading, setLoading] = React.useState({
    button: false,
    alert: false,
  });
  const [artist, setArtist] = React.useState([]);
  const [artistValue, setartistValue] = React.useState("");
  const [title, setTitle] = React.useState("");
  const [year, setYear] = React.useState("");

  const thumbnail = React.useRef(null);
  const song = React.useRef(null);
  const music = React.useRef(null);

  const Input = styled("input")({
    display: "none",
  });

  React.useEffect(() => {
    const getArtist = async () => {
      try {
        const response = await API.get("/artists");
        setArtist(response.data.data.artists);
        setartistValue(response.data.data.artists[0].id);
      } catch (error) {
        console.log(error);
      }
    };
    getArtist();
    const getDetailMusic = async () => {
      try {
        const response = await API.get("/music/" + id);
        setTitle(response.data.data.musics.title);
        setYear(response.data.data.musics.year);
        music.current = response.data.data.musics;
      } catch (error) {
        console.log(error);
      }
    };
    getDetailMusic();
  }, [id]);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleSelect = (event) => {
    setartistValue(event.target.value);
  };

  const handleChangeThumbnail = (e) => {
    if (e.target.type === "file") {
      thumbnail.current = e.target.files[0];
      let url = URL.createObjectURL(e.target.files[0]);
      setPreview({
        ...preview,
        image: url,
      });
    }
  };

  const handleChangeSong = (e) => {
    if (e.target.type === "file") {
      song.current = e.target.files[0];
      setPreview({
        ...preview,
        url: e.target.files[0].name,
      });
    }
  };

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleChangeYear = (e) => {
    setYear(e.target.value);
  };

  const HandleSubmit = async (e) => {
    e.preventDefault();
    setLoading({
      ...loading,
      button: true,
    });
    try {
      if (thumbnail.current === null || song.current === null) {
        const config = {
          headers: {
            "Content-type": "application/json",
          },
        };
        const data = {
          title: title,
          year: year,
          artistId: artistValue,
          thumbnail: music.current.thumbnail,
          attache: music.current.attache,
        };
        const response = await API.patch("music/" + id, data, config);
        if (response.status === 201) {
          navigate("/admin/music");
        }
      }
      // const config = {
      //   headers: {
      //     "Content-type": "multipart/form-data",
      //   },
      // };
      // const formData = new FormData();
      // formData.set("title", e.target.title.value);
      // formData.set("year", e.target.year.value);
      // formData.set("artistId", artistValue);
      // formData.set("thumbnail", thumbnail.current, thumbnail.current.name);
      // formData.set("song", song.current, song.current.name);
      // const response = await API.post("music/add", formData, config);
      // if (response.status === 201) {
      //   setLoading({
      //     alert: true,
      //     button: false,
      //   });
      // }
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
        <Typography sx={{ mb: 2, ml: -60 }} variant="h6" color="white">
          Add Music
        </Typography>
        <FormEditMusic
          title={title}
          year={year}
          handleChangeTitle={handleChangeTitle}
          handleChangeYear={handleChangeYear}
          handleSelect={handleSelect}
          artist={artist}
          artistValue={artistValue}
          preview={preview}
          loading={loading}
          handleChangeThumbnail={handleChangeThumbnail}
          handleChangeSong={handleChangeSong}
          HandleSubmit={HandleSubmit}
          Input={Input}
        />
      </Box>
    </Box>
  );
}
