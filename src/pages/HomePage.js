import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { selectUser } from "../redux/userSlice";
import AppbarHome from "../component/Home/AppbarHome";
import Home from "../component/Home/Home";
import ModalLogin from "../component/Home/ModalLogin";
import ModalRegister from "../component/Home/ModalRegister";

export default function HomePage() {
  const pages = ["Login", "Register"];
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const [openLogin, setOpenLogin] = React.useState(false);
  const handleOpenLogin = () => setOpenLogin(true);
  const handleCloseLogin = () => setOpenLogin(false);

  const [openRegister, setOpenRegister] = React.useState(false);
  const handleOpenRegister = () => setOpenRegister(true);
  const handleCloseRegister = () => setOpenRegister(false);

  const [gender, setGender] = React.useState("male");

  const handleSelect = (event) => {
    setGender(event.target.value);
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // const user = useSelector(selectUser);
  // console.log(user);

  return (
    <div style={{ backgroundColor: "black" }}>
      <div
        style={{
          backgroundImage: `url(${require("../assets/bgheader.png")})`,
          height: 612,
        }}
      >
        <AppbarHome
          ModalRegister={
            <ModalRegister
              openRegister={openRegister}
              handleSelect={handleSelect}
              gender={gender}
              handleCloseRegister={handleCloseRegister}
            />
          }
          ModalLogin={
            <ModalLogin
              openLogin={openLogin}
              handleCloseLogin={handleCloseLogin}
            />
          }
          handleOpenLogin={handleOpenLogin}
          handleOpenRegister={handleOpenRegister}
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
