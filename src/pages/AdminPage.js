import React from "react";
import Paper from "@mui/material/Paper";
import AppbarAdmin from "../component/Admin/AppbarAdmin";
export default function AdminPage() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const pages = ["Add Music", "Add Artist", "Logout"];

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Paper style={{ background: "black", height: "100vh" }}>
      <AppbarAdmin
        pages={pages}
        anchorElNav={anchorElNav}
        handleOpenNavMenu={handleOpenNavMenu}
        handleCloseNavMenu={handleCloseNavMenu}
      />
    </Paper>
  );
}
