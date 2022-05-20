import Box from "@mui/material/Box";
import React from "react";
import AppbarUser from "../component/User/AppbarUser";
import Typography from "@mui/material/Typography";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

export default function UserPayment() {
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
      <AppbarUser
        isPayment={true}
        pages={pages}
        anchorElNav={anchorElNav}
        handleOpenNavMenu={handleOpenNavMenu}
        handleCloseNavMenu={handleCloseNavMenu}
      />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          mt: 2,
        }}
      >
        <Typography variant="h3" sx={{ fontWeight: "bold" }} color="white">
          Premium
        </Typography>
        <Typography
          variant="h6"
          color="white"
          sx={{ mt: 1, color: "red", mb: 2 }}
        >
          Nikmati Layanan kami tanpa terbatas
        </Typography>
        <form>
          <FormGroup>
            <FormControlLabel
              sx={{ color: "white" }}
              control={<Checkbox sx={{ color: "white" }} defaultChecked />}
              label="Langganan bulanan mulai Rp 65.0000"
            />
            <FormControlLabel
              sx={{ color: "white" }}
              control={<Checkbox sx={{ color: "white" }} />}
              label="Langganan 6 bulanan mulai Rp 300.0000"
            />
            <FormControlLabel
              sx={{ color: "white" }}
              control={<Checkbox sx={{ color: "white" }} />}
              label="Langganan 1 Tahun mulai Rp 600.0000"
            />
          </FormGroup>
        </form>
      </Box>
    </Box>
  );
}
