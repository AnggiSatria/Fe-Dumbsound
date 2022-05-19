import React from "react";
import AppbarUser from "../component/User/AppbarUser";
import Cards from "../component/User/Card";
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
    <div style={{ backgroundColor: "black" }}>
      <div
        style={{
          backgroundImage: `url(${require("../assets/bgheader.png")})`,
          height: 630,
        }}
      >
        <AppbarUser
          pages={pages}
          anchorElNav={anchorElNav}
          handleOpenNavMenu={handleOpenNavMenu}
          handleCloseNavMenu={handleCloseNavMenu}
        />
      </div>
      <div>
        <Home />
      </div>
    </div>
  );
}
