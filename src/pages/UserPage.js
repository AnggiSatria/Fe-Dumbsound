import Box from "@mui/material/Box";
import React from "react";
import AppbarUser from "../component/User/AppbarUser";
import Home from "../component/User/Home";

export default function UserPage() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const pages = ["Pay", "Logout"];

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Box style={{ backgroundColor: "black" }}>
      <Box
        style={{
          backgroundImage: `url(${require("../assets/img/bgheader.png")})`,
          height: 400,
        }}
      >
        <AppbarUser
          isPayment={false}
          pages={pages}
          anchorElNav={anchorElNav}
          handleOpenNavMenu={handleOpenNavMenu}
          handleCloseNavMenu={handleCloseNavMenu}
        />
      </Box>
      <Box>
        <Home />
      </Box>
    </Box>
  );
}
