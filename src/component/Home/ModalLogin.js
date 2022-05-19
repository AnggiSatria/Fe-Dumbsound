import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function ModalLogin({ openLogin, handleCloseLogin }) {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: { xs: 350, md: 510 },
    bgcolor: "#161616",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    borderRadius: 2,
  };
  return (
    <div>
      <Modal
        open={openLogin}
        onClose={handleCloseLogin}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box
            sx={{
              width: { xs: 250, md: 350 },
              maxWidth: "100%",
            }}
          >
            <form>
              <Typography
                variant="h4"
                sx={{ ml: { xs: 3, md: 6 } }}
                color="white"
              >
                Login
              </Typography>
              <TextField
                fullWidth
                sx={{ bgcolor: "#D2D2D2", mt: 2, ml: { xs: 3, md: 6 } }}
                label="Username"
                name="username"
                size="small"
              />
              <TextField
                fullWidth
                sx={{ bgcolor: "#D2D2D2", mt: 2, ml: { xs: 3, md: 6 } }}
                label="Password"
                name="password"
                size="small"
              />
              <Button
                sx={{
                  ml: { xs: 3, md: 6 },
                  mt: 3,
                  mb: 5,
                  pl: { xs: 13, md: 19 },
                  pr: { xs: 13, md: 19 },
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
