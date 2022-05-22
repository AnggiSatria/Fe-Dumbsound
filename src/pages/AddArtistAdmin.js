import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AppbarAdmin from "../component/Admin/AppbarAdmin";
import FormAddArtist from "../component/Admin/FormAddArtist";
import { API } from "../config/axios";
import Alert from "@mui/material/Alert";

export default function AddArtistAdmin() {
  document.body.style.backgroundColor = "black";
  const pages = ["Add Music", "Add Artist", "Logout"];
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [loading, setLoading] = React.useState({
    button: false,
    alert: false,
  });
  const [type, setType] = React.useState("Rock");

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleSelect = (event) => {
    setType(event.target.value);
  };

  const HandleSubmit = async (e) => {
    e.preventDefault();
    setLoading({
      ...loading,
      button: true,
    });
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const data = {
        name: e.target.name.value,
        old: e.target.old.value,
        type: e.target.type.value,
        startcareer: e.target.startcareer.value,
      };
      const response = await API.post("artist/add", data, config);
      if (response.status === 201) {
        setLoading({
          alert: true,
          button: false,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box>
      <AppbarAdmin
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
          mt: 10,
        }}
      >
        <Typography sx={{ mb: 4, ml: -65 }} variant="h6" color="white">
          Add Artist
        </Typography>
        {loading.alert ? (
          <Box>
            <Alert severity="success" sx={{ mb: 2, pl: 5, pr: 5 }}>
              Data telah di tambahkan
            </Alert>
          </Box>
        ) : (
          ""
        )}
        <FormAddArtist
          handleSelect={handleSelect}
          loading={loading}
          type={type}
          HandleSubmit={HandleSubmit}
        />
      </Box>
    </Box>
  );
}
