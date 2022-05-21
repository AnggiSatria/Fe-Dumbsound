import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AppbarAdmin from "../component/Admin/AppbarAdmin";
import FormAddArtist from "../component/Admin/FormAddArtist";
import { API } from "../config/axios";

export default function AddArtistAdmin() {
  document.body.style.backgroundColor = "black";
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const pages = ["Add Music", "Add Artist", "Logout"];

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const HandleSubmit = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const data = {
        name: e.target.name.value,
        old: e.target.old.value,
        type: e.target.type.value,
        startcareer: e.target.startcareer.value,
      };
      const response = await API.post("artist/add", data, config);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box>
      <AppbarAdmin
        isPayment={true}
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
        <Typography sx={{ mb: 4, ml: -65 }} variant="h6" color="white">
          Add Artist
        </Typography>
        <FormAddArtist HandleSubmit={HandleSubmit} />
      </Box>
    </Box>
  );
}
