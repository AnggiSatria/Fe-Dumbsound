import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function ModalLogin({ open, handleClose }) {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    bgcolor: "#161616",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    borderRadius: 2,
  };
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
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
              <Typography variant="h4" sx={{ ml: 12 }} color="white">
                Login
              </Typography>
              <TextField
                fullWidth
                sx={{ bgcolor: "#D2D2D2", mt: 2, ml: 12 }}
                label="Username"
                id="fullWidth"
              />
              <TextField
                fullWidth
                sx={{ bgcolor: "#D2D2D2", mt: 2, ml: 12 }}
                label="Password"
                id="fullWidth"
              />
              <Button
                sx={{ ml: 12, mt: 3, pl: 19, pr: 19 }}
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
