import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { selectUser, LOGIN_SUCCESS } from "../redux/userSlice";
import ResponsiveAppBar from "../component/Appbar";
import Home from "../component/Home/Home";

export function HomePage() {
  const pages = ["Login", "Register"];
  const [anchorElNav, setAnchorElNav] = React.useState(null);

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
          height: 512,
        }}
      >
        <ResponsiveAppBar
          pages={pages}
          anchorElNav={anchorElNav}
          setAnchorElNav={setAnchorElNav}
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
