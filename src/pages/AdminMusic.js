import React from "react";
import Box from "@mui/material/Box";
import AppbarAdmin from "../component/Admin/AppbarAdmin";
import TableMusicAdmin from "../component/Admin/TableMusicAdmin";
import { API } from "../config/axios";
import { useNavigate } from "react-router-dom";

export default function AdminMusic() {
  document.body.style.backgroundColor = "black";
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [music, setMusic] = React.useState(null);

  const pages = ["Add Music", "Add Artist", "Logout"];

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const columns = [
    { id: "no", label: "No", minWidth: 30, align: "left" },
    { id: "music", label: "Music", minWidth: 170, align: "left" },
    { id: "Action", label: "Action", minWidth: 170, align: "left" },
  ];

  const navigate = useNavigate();

  const EditMusic = (id) => {
    navigate("/admin/edit/music", {
      state: {
        id: id,
      },
    });
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

  return (
    <Box>
      <AppbarAdmin
        pages={pages}
        anchorElNav={anchorElNav}
        handleOpenNavMenu={handleOpenNavMenu}
        handleCloseNavMenu={handleCloseNavMenu}
      />
      <Box
        sx={{
          mr: { xs: 3, md: 20 },
          ml: { xs: 3, md: 20 },
          display: "flex",
          alignItems: "center",
          mt: 10,
        }}
      >
        <TableMusicAdmin
          music={music}
          EditMusic={EditMusic}
          columns={columns}
        />
      </Box>
    </Box>
  );
}
