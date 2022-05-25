import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Css from "../../assets/css/main.css";

export default function AppbarHome({
  pages,
  anchorElNav,
  handleOpenNavMenu,
  handleCloseNavMenu,
  handleOpenLogin,
  ModalLogin,
  ModalRegister,
  handleOpenRegister,
}) {
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar style={{ background: "transparent", boxShadow: "none" }}>
        <Toolbar>
          {/* md */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Box sx={{ flexGrow: 1, mt: 1 }}>
              <img
                style={{ marginRight: 10 }}
                src={require("../../assets/img/logo.png")}
                alt="..."
              />
              <img
                style={{ marginBottom: 5 }}
                src={require("../../assets/img/text.png")}
                alt="..."
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Button
                size="small"
                sx={{ pl: 3, pr: 3, mr: 3 }}
                color="inherit"
                variant="outlined"
                onClick={handleOpenLogin}
              >
                Login
              </Button>
              <Button
                size="small"
                onClick={handleOpenRegister}
                variant="contained"
                color="error"
              >
                Register
              </Button>
            </Box>
          </Box>

          {/* xs */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, mt: 1, display: { xs: "flex", md: "none" } }}>
            <img
              style={{ marginRight: 10 }}
              src={require("../../assets/img/logo.png")}
              alt="..."
            />
            <img
              style={{ marginBottom: 5 }}
              src={require("../../assets/img/text.png")}
              alt="..."
            />
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Container>
        <Typography
          variant="h4"
          style={{ marginTop: 110, fontFamily : "Tahoma, Verdana, sans-serif" }}
          component="h4"
          align="center"
          color="white"
        >
          Connect on DumbSound
        </Typography>
        <Typography
          variant="h6"
          style={{ marginTop: 30, fontFamily: "Lucida Console, Courier New, monospace" }}
          component="h6"
          align="center"
          color="white"
          className={Css.allFont}
        >
          Discovery, Stream, and share a constantly 
        </Typography>
        <Typography
        variant="h6"
        style={{ marginTop: 30, fontFamily: "Lucida Console, Courier New, monospace" }}
        component="h6"
        align="center"
        color="white"
        className={Css.allFont}>
        expanding mix of music from
        emerging and major artists around the world
        </Typography>
        {ModalLogin}
        {ModalRegister}
      </Container>
    </React.Fragment>
  );
}
