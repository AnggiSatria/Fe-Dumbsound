import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

export default function ModalRegister({
  openRegister,
  handleCloseRegister,
  handleSelect,
  gender,
}) {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: { xs: 300, md: 600 },
    height: "100%",
    bgcolor: "#161616",
    border: "2px solid #000",
    boxShadow: 24,
    overflowY: "scroll",
    scrollbarWidth: "none",
    p: 4,
    display: "block",
    borderRadius: 2,
  };

  return (
    <div>
      <Modal
        open={openRegister}
        onClose={handleCloseRegister}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box
            sx={{
              width: 350,
              maxWidth: "100%",
            }}
          >
            <form>
              <Typography
                variant="h4"
                sx={{ ml: { xs: 3, md: 12 } }}
                color="white"
              >
                Register
              </Typography>
              <TextField
                fullWidth
                size="small"
                sx={{ bgcolor: "#D2D2D2", mt: 2, ml: { xs: 3, md: 12 } }}
                label="Email"
                name="email"
              />
              <TextField
                fullWidth
                size="small"
                sx={{ bgcolor: "#D2D2D2", mt: 2, ml: { xs: 3, md: 12 } }}
                label="Password"
                type="password"
                name="password"
              />
              <TextField
                fullWidth
                size="small"
                sx={{ bgcolor: "#D2D2D2", mt: 2, ml: { xs: 3, md: 12 } }}
                label="Fullname"
                name="fullname"
              />
              <Select
                fullWidth
                size="small"
                sx={{ bgcolor: "#D2D2D2", mt: 2, ml: { xs: 3, md: 12 } }}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={gender}
                label="Age"
                onChange={handleSelect}
              >
                <MenuItem value={"male"}>Male</MenuItem>
                <MenuItem value={"female"}>Female</MenuItem>
              </Select>
              <TextField
                fullWidth
                sx={{ bgcolor: "#D2D2D2", mt: 2, ml: { xs: 3, md: 12 } }}
                label="Phone"
                size="small"
                type="number"
                id="fullWidth"
              />
              <TextField
                fullWidth
                sx={{ bgcolor: "#D2D2D2", mt: 2, ml: { xs: 3, md: 12 } }}
                label="Address"
                id="fullWidth"
              />
              <Button
                sx={{
                  ml: { xs: 3, md: 12 },
                  mt: 3,
                  mb: 5,
                  pl: { xs: 10, md: 19 },
                  pr: { xs: 10, md: 19 },
                }}
                variant="contained"
                color="error"
              >
                Login
              </Button>
            </form>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
