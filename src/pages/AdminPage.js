import React from "react";
import Box from "@mui/material/Box";
import AppbarAdmin from "../component/Admin/AppbarAdmin";
import TableAdmin from "../component/Admin/TableAdmin";
import { API } from "../config/axios";

export default function AdminPage() {
  document.body.style.backgroundColor = "black";
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [transactions, setTransactions] = React.useState(null);
  const pages = ["Add Music", "Add Artist", "Logout"];

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  React.useEffect(() => {
    const getTransaction = async () => {
      try {
        const response = await API.get("/transactions");
        setTransactions(response.data.data.dataTransaction);
      } catch (error) {
        console.log(error);
      }
    };
    getTransaction();
  }, []);

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
        <TableAdmin transactions={transactions} columns={columns} />
      </Box>
    </Box>
  );
}
