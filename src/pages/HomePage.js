import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { selectUser, LOGIN_SUCCESS } from "../redux/userSlice";
import ResponsiveAppBar from "../component/Appbar";
import Home from "../component/Home/Home";
import ModalLogin from "../component/Home/ModalLogin";

export function HomePage() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [open, setOpen] = React.useState(false);

  const pages = ["Login", "Register"];
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
          height: 612,
        }}
      >
        <ResponsiveAppBar
          ModalLogin={<ModalLogin open={open} handleClose={handleClose} />}
          handleOpen={handleOpen}
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
