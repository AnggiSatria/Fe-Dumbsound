import React from "react";
import AppbarUser from "../component/User/AppbarUser";
import Typography from "@mui/material/Typography";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { API } from "../config/axios";

export default function UserPayment() {
  document.body.style.backgroundColor = "black";
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [payment, setPayment] = React.useState(50000);
  const pages = ["Pay", "Logout"];

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleSelect = (event) => {
    setPayment(event.target.value);
  };

  React.useEffect(() => {
    const midtransScriptUrl = "https://app.sandbox.midtrans.com/snap/snap.js";
    const myMidtransClientKey = "Mid-server-zI3gLYVu6v9Y-3eoCVfSFEmq";

    let scriptTag = document.createElement("script");
    scriptTag.src = midtransScriptUrl;
    scriptTag.setAttribute("data-client-key", myMidtransClientKey);

    document.body.appendChild(scriptTag);
    return () => {
      document.body.removeChild(scriptTag);
    };
  }, []);

  const HandleSubmit = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      let data = {
        idSeller: 1,
        price: e.target.payment.value,
      };
      const response = await API.post("/transaction", data, config);
      const token = response.data.data.transaction.payment.token;
      window.snap.pay(token, {
        onSuccess: async (result) => {
          try {
            console.log(result);
          } catch (error) {
            console.log(error);
          }
        },
        onPending: (result) => {
          console.log(result);
        },
        onError: (result) => {
          console.log(result);
        },
        onClose: () => {
          alert("you closed the popup without finishing the payment");
        },
      });
    } catch (error) {
      console.log(error);
    }
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
          mt: 12,
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
        <form onSubmit={HandleSubmit}>
          <Box sx={{ width: 550 }}>
            <Typography variant="body1" color="white">
              Pilih Paket
            </Typography>
            <Select
              fullWidth
              size="small"
              sx={{
                bgcolor: "#D2D2D2",
                mt: 2,
                "& .Mui-focused": { color: "white" },
                "& .MuiInput-underline:after": {
                  borderBottomColor: "black",
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "black",
                  },
                  "&:hover fieldset": {
                    borderColor: "black",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "black",
                  },
                },
              }}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={payment}
              name="payment"
              label="payment"
              onChange={handleSelect}
            >
              <MenuItem value={50000}>Paket 1 Bulan Rp. 50.000</MenuItem>
              <MenuItem value={250000}>Paket 6 Bulan Rp. 250.000</MenuItem>
              <MenuItem value={500000}>Paket 1 Tahun Rp. 500.000</MenuItem>
            </Select>
          </Box>
          <Button
            type="submit"
            sx={{
              borderColor: "black",
              bgcolor: "#F58033",
              paddingTop: 1,
              ml: 25,
              mr: 25,
              mt: 2,
            }}
            variant="contained"
          >
            <Typography variant="body1" color="white">
              Bayar Sekarang
            </Typography>
          </Button>
        </form>
      </Box>
    </Box>
  );
}
