import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Avatar from "@mui/material/Avatar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

export default function AppbarUser({
  handleOpenNavMenu,
  handleCloseNavMenu,
  pages,
  anchorElNav,
  isPayment,
}) {
  const navigate = useNavigate();

  const Logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

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
              <Button id="demo-positioned-button" onClick={handleOpenNavMenu}>
                <Avatar>H</Avatar>
              </Button>
            </Box>
          </Box>
          {/* Menu */}
          <Menu
            sx={{
              "& .MuiPaper-root": {
                backgroundColor: "#3A3A3A",
              },
              "& .MuiTypography-root": {
                color: "white",
              },
              color: "white",
            }}
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
          >
            {pages.map((page) => (
              <MenuItem
                key={page}
                onClick={handleCloseNavMenu}
                style={{ width: 220 }}
              >
                <Box sx={{ display: "flex", flexDirection: "row" }}>
                  {page === "Pay" ? (
                    <Box
                      sx={{ display: "flex", flexDirection: "row" }}
                      onClick={() => navigate("/user/payment")}
                    >
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_4_355)">
                          <path
                            d="M22.9871 4.90145C23.0001 4.90239 23.0132 4.90332 23.0265 4.90332C23.049 4.90332 23.0716 4.90145 23.0936 4.89841C23.6843 4.91034 24.1571 5.38512 24.1578 5.96725C24.1578 6.23177 24.3754 6.44624 24.6439 6.44624C24.9123 6.44624 25.1299 6.23177 25.1299 5.96725C25.1287 5.01512 24.4561 4.19139 23.5125 3.98651V3.52623C23.5125 3.26171 23.2949 3.04724 23.0265 3.04724C22.7581 3.04724 22.5404 3.26171 22.5404 3.52623V4.00826C21.5427 4.27114 20.8972 5.22234 21.0317 6.23154C21.1663 7.24074 22.0392 7.99524 23.072 7.99524C23.6718 7.99524 24.1578 8.47446 24.1578 9.06548C24.1578 9.65627 23.6718 10.1355 23.072 10.1355C22.4723 10.1355 21.9863 9.65627 21.9863 9.06548C21.9863 8.80096 21.7686 8.58649 21.5002 8.58649C21.2318 8.58649 21.0142 8.80096 21.0142 9.06548C21.0154 9.98323 21.641 10.7861 22.5404 11.0245V11.5493C22.5404 11.8138 22.7581 12.0283 23.0265 12.0283C23.2949 12.0283 23.5125 11.8138 23.5125 11.5493V11.0465C24.539 10.825 25.2312 9.87682 25.118 8.84727C25.0051 7.81772 24.1229 7.03749 23.072 7.03773C22.4889 7.03796 22.0098 6.58423 21.9867 6.01005C21.964 5.43587 22.4056 4.94636 22.9871 4.90169V4.90145Z"
                            fill="#EE4622"
                          />
                          <path
                            d="M23.0998 0.705322C20.1097 0.705322 17.558 2.62806 16.602 5.20263H4.53841C4.27118 5.20263 4.05427 5.44002 4.05237 5.70314L3.9375 22.5061H0.498863C0.230445 22.5061 0 22.6977 0 22.9627V25.095C0.00617049 27.1024 1.6105 28.7515 3.64535 28.8422V28.8527H18.652V28.8387C18.7736 28.8431 18.8236 28.8527 18.9005 28.8527H18.911C21.017 28.8495 22.7227 27.166 22.7227 25.0905V14.3095C22.8442 14.3161 22.9728 14.3196 23.0986 14.3196C26.9037 14.3196 30.0001 11.2623 30.0001 7.51221C30.0001 3.76239 26.9051 0.705322 23.0998 0.705322V0.705322ZM3.83023 27.8948H3.82714C2.25485 27.8927 0.979213 26.6397 0.972094 25.09V23.4641H15.0675V25.0833C15.0682 26.0829 15.4733 27.0411 16.1929 27.7458C16.2439 27.7961 16.3073 27.8349 16.3606 27.8948H3.83023ZM21.7506 25.09C21.7508 26.6369 20.4799 27.8917 18.9105 27.8948H18.9012C17.3254 27.8919 16.0474 26.6365 16.0395 25.0837V22.9627C16.0436 22.8401 15.9961 22.7215 15.9081 22.635C15.82 22.5485 15.6997 22.5019 15.5756 22.5061H4.9096L5.02114 6.16061H16.3322C16.246 6.59914 16.2014 7.04445 16.199 7.49093C16.1981 8.43511 16.3979 9.36876 16.7857 10.232H12.1948C11.9262 10.232 11.7088 10.4465 11.7088 10.711C11.7088 10.9755 11.9262 11.19 12.1948 11.19H17.313C18.3158 12.7439 19.9187 13.8272 21.7506 14.1898V25.09ZM23.0998 13.3618C19.8256 13.3618 17.1711 10.7461 17.1714 7.51923C17.1714 4.29236 19.8256 1.67663 23.1 1.67663C26.3742 1.67663 29.0285 4.2926 29.0285 7.51923C29.0249 10.7445 26.3728 13.3583 23.0998 13.3618Z"
                            fill="#EE4622"
                          />
                          <path
                            d="M9.07497 13.4198C8.21703 13.4198 7.51929 14.0857 7.51929 14.9043C7.51929 15.7228 8.21703 16.3887 9.07497 16.3887C9.93291 16.3887 10.6309 15.7228 10.6309 14.9043C10.6309 14.0857 9.93291 13.4198 9.07497 13.4198ZM9.07497 15.4307C8.75292 15.4307 8.49138 15.1945 8.49138 14.9043C8.49138 14.6138 8.75315 14.3778 9.07497 14.3778C9.39679 14.3778 9.6588 14.614 9.6588 14.9043C9.6588 15.1945 9.39679 15.4307 9.07497 15.4307Z"
                            fill="#EE4622"
                          />
                          <path
                            d="M11.7088 14.9022C11.7088 15.1667 11.9262 15.3812 12.1948 15.3812H18.6748C18.9433 15.3812 19.1609 15.1667 19.1609 14.9022C19.1609 14.6377 18.9433 14.4232 18.6748 14.4232H12.1948C11.9262 14.4232 11.7088 14.6377 11.7088 14.9022Z"
                            fill="#EE4622"
                          />
                          <path
                            d="M9.07497 9.2561C8.21703 9.2561 7.51929 9.9222 7.51929 10.7408C7.51929 11.5594 8.21703 12.2252 9.07497 12.2252C9.93291 12.2252 10.6309 11.5594 10.6309 10.7408C10.6309 9.9222 9.93291 9.2561 9.07497 9.2561ZM9.07497 11.2673C8.75292 11.2673 8.49138 11.031 8.49138 10.7408C8.49138 10.4505 8.75315 10.2141 9.07497 10.2141C9.39679 10.2141 9.6588 10.4503 9.6588 10.7408C9.6588 11.031 9.39679 11.2675 9.07497 11.2675V11.2673Z"
                            fill="#EE4622"
                          />
                          <path
                            d="M9.07497 17.5831C8.21703 17.5831 7.51929 18.249 7.51929 19.0676C7.51929 19.8862 8.21703 20.552 9.07497 20.552C9.93291 20.552 10.6309 19.8862 10.6309 19.0676C10.6309 18.249 9.93291 17.5831 9.07497 17.5831ZM9.07497 19.594C8.75292 19.594 8.49138 19.358 8.49138 19.0676C8.49138 18.7773 8.75315 18.5411 9.07497 18.5411C9.39679 18.5411 9.6588 18.7773 9.6588 19.0676C9.6588 19.3578 9.39679 19.594 9.07497 19.594Z"
                            fill="#EE4622"
                          />
                          <path
                            d="M18.6748 18.6144H12.1948C11.9262 18.6144 11.7088 18.8288 11.7088 19.0934C11.7088 19.3579 11.9262 19.5724 12.1948 19.5724H18.6748C18.9433 19.5724 19.1609 19.3579 19.1609 19.0934C19.1609 18.8288 18.9433 18.6144 18.6748 18.6144Z"
                            fill="#EE4622"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_4_355">
                            <rect width="30" height="29.5644" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <Typography sx={{ ml: 1 }} textAlign="center">
                        {page}
                      </Typography>
                    </Box>
                  ) : (
                    
                    <Box
                      sx={{ display: "flex", flexDirection: "row" }}
                      onClick={Logout}
                    >
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_4_369)">
                          <path
                            d="M29.0617 13.8588H17.187C16.6695 13.8588 16.2495 13.4449 16.2495 12.935C16.2495 12.425 16.6695 12.0111 17.187 12.0111H29.0617C29.5792 12.0111 29.9992 12.425 29.9992 12.935C29.9992 13.4449 29.5792 13.8588 29.0617 13.8588Z"
                            fill="#EE4622"
                          />
                          <path
                            d="M24.3742 18.478C24.1341 18.478 23.8942 18.3881 23.7116 18.2072C23.3454 17.846 23.3454 17.261 23.7116 16.9001L27.7366 12.9338L23.7116 8.9672C23.3454 8.60632 23.3454 8.02124 23.7116 7.66036C24.078 7.29925 24.6717 7.29925 25.0379 7.66036L29.7253 12.2797C30.0915 12.6405 30.0915 13.2256 29.7253 13.5865L25.0379 18.2058C24.8541 18.3881 24.6143 18.478 24.3742 18.478Z"
                            fill="#EE4622"
                          />
                          <path
                            d="M9.99976 29.5647C9.73221 29.5647 9.47839 29.5277 9.22479 29.4501L1.70237 26.9803C0.678842 26.628 0 25.6882 0 24.6375V2.46492C0 1.1062 1.12126 0.0012207 2.5 0.0012207C2.76732 0.0012207 3.02115 0.0382112 3.27497 0.115801L10.7972 2.58559C11.8209 2.9379 12.4995 3.87777 12.4995 4.92839V27.101C12.4995 28.4597 11.3785 29.5647 9.99976 29.5647ZM2.5 1.84894C2.15623 1.84894 1.87494 2.12614 1.87494 2.46492V24.6375C1.87494 24.8999 2.05369 25.1437 2.30866 25.2312L9.79584 27.6899C9.84962 27.7071 9.91966 27.717 9.99976 27.717C10.3435 27.717 10.6246 27.4398 10.6246 27.101V4.92839C10.6246 4.66608 10.4458 4.42226 10.1909 4.33474L2.7037 1.87601C2.64991 1.85886 2.57988 1.84894 2.5 1.84894Z"
                            fill="#EE4622"
                          />
                          <path
                            d="M19.0617 9.85555C18.5443 9.85555 18.1243 9.44166 18.1243 8.93169V3.38854C18.1243 2.53978 17.4232 1.84869 16.562 1.84869H2.49991C1.98242 1.84869 1.56244 1.43481 1.56244 0.924836C1.56244 0.414864 1.98242 0.000976562 2.49991 0.000976562H16.562C18.4582 0.000976562 19.9992 1.51984 19.9992 3.38854V8.93169C19.9992 9.44166 19.5792 9.85555 19.0617 9.85555Z"
                            fill="#EE4622"
                          />
                          <path
                            d="M16.562 25.869H11.562C11.0446 25.869 10.6246 25.4551 10.6246 24.9451C10.6246 24.4351 11.0446 24.0212 11.562 24.0212H16.562C17.4233 24.0212 18.1243 23.3302 18.1243 22.4814V16.9383C18.1243 16.4283 18.5443 16.0144 19.0618 16.0144C19.5793 16.0144 19.9993 16.4283 19.9993 16.9383V22.4814C19.9993 24.3501 18.4583 25.869 16.562 25.869Z"
                            fill="#EE4622"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_4_369">
                            <rect width="30" height="29.5644" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <Typography sx={{ ml: 1 }} textAlign="center">
                        {page}
                      </Typography>
                    </Box>
                  )}
                </Box>
              </MenuItem>
            ))}
          </Menu>
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
      {isPayment ? (
        ""
      ) : (
        <Container>
          <Typography
            variant="h4"
            style={{ marginTop: 110 }}
            component="h4"
            align="center"
            color="white"
          >
            Connect on DumbSound
          </Typography>
          <Typography
            variant="h6"
            style={{ marginTop: 30, fontFamily: "Lucida Console, Courier New, monospace"}}
            component="h6"
            align="center"
            color="white"
          >
            Discovery, Stream, and share a constantly 
          </Typography>
          <Typography
          variant="h6"
          style={{ marginTop: 30, fontFamily: "Lucida Console, Courier New, monospace"}}
          component="h6"
          align="center"
          color="white"
          >
            expanding mix of music from
            emerging and major artists around the world
          </Typography>
        </Container>
      )}
    </React.Fragment>
  );
}
