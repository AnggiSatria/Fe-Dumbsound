import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";

export default function ModalLogin({
  openLogin,
  handleCloseLogin,
  handleLoginSubmit,
  alert,
}) {
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
            <form onSubmit={handleLoginSubmit}>
              <Typography
                variant="h4"
                sx={{ ml: { xs: 3, md: 6 } }}
                color="white"
              >
                Login
              </Typography>
              {alert.alert ? (
                <Alert
                  severity="error"
                  sx={{ ml: { xs: 3, md: 6 }, mt: 2, width: "100%" }}
                >
                  {alert.message}
                </Alert>
              ) : null}
              <TextField
                fullWidth
                sx={{
                  bgcolor: "#D2D2D2",
                  mt: 2,
                  ml: { xs: 3, md: 6 },
                  "& .Mui-focused": { color: "black" },
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
                label="Email"
                name="email"
                size="small"
              />
              <TextField
                fullWidth
                sx={{
                  bgcolor: "#D2D2D2",
                  mt: 2,
                  ml: { xs: 3, md: 6 },
                  "& .Mui-focused": { color: "black" },
                  "& .Mui-focused": { color: "black" },
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
                label="Password"
                name="password"
                size="small"
                type="password"
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
                type="submit"
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
