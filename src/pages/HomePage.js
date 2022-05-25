import Box from "@mui/material/Box";
import React from "react";
import { API } from "../config/axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { LOGIN_SUCCESS } from "../redux/userSlice";
import AppbarHome from "../component/Home/AppbarHome";
import Home from "../component/Home/Home";
import ModalLogin from "../component/Home/ModalLogin";
import ModalRegister from "../component/Home/ModalRegister";

export default function HomePage() {
  const navigate = useNavigate();
  const pages = ["Login", "Register", "Complain"];
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [music, setMusic] = React.useState(null);

  const [openLogin, setOpenLogin] = React.useState(false);
  const handleOpenLogin = () => setOpenLogin(true);
  const handleCloseLogin = () => setOpenLogin(false);

  const [openRegister, setOpenRegister] = React.useState(false);
  const handleOpenRegister = () => setOpenRegister(true);
  const handleCloseRegister = () => setOpenRegister(false);

  const [gender, setGender] = React.useState("male");
  const [alert, setAlert] = React.useState({
    alert: false,
    message: "",
  });

  const [compain, setComplain] = React.useState(false);
  const handleComplain = () => setComplain(true);

  const handleSelect = (event) => {
    setGender(event.target.value);
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const data = {
        fullname: e.target.fullname.value,
        email: e.target.email.value,
        password: e.target.password.value,
        status: "user",
        gender: e.target.gender.value,
        phone: String(e.target.phone.value),
        address: e.target.address.value,
      };
      const response = await API.post("register", data, config);
      if (response.status === 201) {
        localStorage.setItem("token", response.data.data.user.token);
        dispatch(LOGIN_SUCCESS(response.data.data.user));
        navigate("/user");
      }
    } catch (error) {
      setAlert({
        alert: true,
        message: error.response.data.message,
      });
    }
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const data = {
        email: e.target.email.value,
        password: e.target.password.value,
      };
      const response = await API.post("login", data, config);
      if (response.status === 201) {
        localStorage.setItem("token", response.data.data.user.token);
        dispatch(LOGIN_SUCCESS(response.data.data.user));
        if(response.data.data.user.status === "admin"){
          navigate("/admin")
        }else{
          navigate("/user");
        }
      }
    } catch (error) {
      setAlert({
        alert: true,
        message: error.response.data.message,
      });
    }
  };

  React.useEffect(() => {
    const getMusic = async () => {
      try {
        const response = await API.get("/musics");
        setMusic(response.data.data.musics);
      } catch (error) {
        console.log(error);
      }
    };
    getMusic();
  }, []);

  const dispatch = useDispatch();

  return (
    <Box style={{ backgroundColor: "black" }}>
      <Box
        style={{
          backgroundImage: `url(${require("../assets/img/bgheader.png")})`,
          height: 400,
        }}
      >
        <AppbarHome
          ModalRegister={
            <ModalRegister
              alert={alert}
              handleRegisterSubmit={handleRegisterSubmit}
              openRegister={openRegister}
              handleSelect={handleSelect}
              gender={gender}
              handleCloseRegister={handleCloseRegister}
            />
          }
          ModalLogin={
            <ModalLogin
              alert={alert}
              handleLoginSubmit={handleLoginSubmit}
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
      </Box>
      <Box>
        <Home music={music} setOpenLogin={setOpenLogin} />
      </Box>
    </Box>
  );
}
