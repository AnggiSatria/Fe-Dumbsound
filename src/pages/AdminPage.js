import React from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import AppbarAdmin from "../component/Admin/AppbarAdmin";
import TableAdmin from "../component/Admin/TableAdmin";

export default function AdminPage() {
  document.body.style.backgroundColor = "black";
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const pages = ["Add Music", "Add Artist", "Logout"];
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const columns = [
    { id: "no", label: "No", minWidth: 170, align: "left" },
    { id: "users", label: "Users", minWidth: 170, align: "left" },
    { id: "remaining", label: "Remaining Day", minWidth: 170, align: "left" },
    { id: "statususers", label: "Status Users", minWidth: 170, align: "left" },
    {
      id: "statuspayment",
      label: "Status Payment",
      minWidth: 170,
      align: "left",
    },
  ];

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
        <TableAdmin
          page={page}
          handleChangePage={handleChangePage}
          handleChangeRowsPerPage={handleChangeRowsPerPage}
          columns={columns}
        />
      </Box>
    </Box>
  );
}
