import React from "react";
import AppbarUser from "../component/User/AppbarUser";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Contact from "../component/Complain/Contact";
import Chat from "../component/Complain/Chat";

export default function ComplainUser() {
  document.body.style.backgroundColor = "black";
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const pages = ["Pay", "Logout"];

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Box>
      <Box>
        <AppbarUser
          isPayment={true}
          pages={pages}
          anchorElNav={anchorElNav}
          handleOpenNavMenu={handleOpenNavMenu}
          handleCloseNavMenu={handleCloseNavMenu}
        />
        <Box>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={3} sx={{ mt: 2, borderRight: "1px solid white" }}>
                <Contact />
              </Grid>
              <Grid item xs={9} sx={{ mt: 2 }}>
                <Chat />
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
