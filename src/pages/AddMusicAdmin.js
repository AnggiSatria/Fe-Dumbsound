import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AppbarAdmin from "../component/Admin/AppbarAdmin";
import FormAddMusic from "../component/Admin/FormAddMusic";

export default function AddMusicAdmin() {
  document.body.style.backgroundColor = "black";
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const pages = ["Add Music", "Add Artist", "Logout"];

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
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
        <FormAddMusic />
      </Box>
    </Box>
  );
}
