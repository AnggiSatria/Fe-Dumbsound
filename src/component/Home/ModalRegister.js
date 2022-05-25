import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Alert from "@mui/material/Alert";

export default function ModalRegister({
  openRegister,
  handleCloseRegister,
  handleSelect,
  gender,
  handleRegisterSubmit,
  alert,
}) {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: { xs: 300, md: 600 },
    height: "90%",
    bgcolor: "#161616",
    border: "2px solid #000",
    boxShadow: 24,
    overflowY: "scroll",
    p: 4,
    display: "block",
    borderRadius: 2,
    "&::-webkit-scrollbar": {
      width: "0 !important",
    },
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
            <form onSubmit={handleRegisterSubmit}>
              <Typography
                variant="h4"
                sx={{ ml: { xs: 3, md: 12 } }}
                color="white"
              >
                Register
              </Typography>
              {alert.alert ? (
                <Alert
                  severity="error"
                  sx={{ ml: { md: 12 }, mt: 2, width: "100%" }}
                >
                  {alert.message}
                </Alert>
              ) : null}
              <TextField
                fullWidth
                size="small"
                sx={{
                  bgcolor: "#D2D2D2",
                  mt: 2,
                  ml: { md: 12 },
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
              />
              <TextField
                fullWidth
                size="small"
                sx={{
                  bgcolor: "#D2D2D2",
                  mt: 2,
                  ml: { md: 12 },
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
                type="password"
                name="password"
              />
              <TextField
                fullWidth
                size="small"
                sx={{
                  bgcolor: "#D2D2D2",
                  mt: 2,
                  ml: { md: 12 },
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
                label="Fullname"
                name="fullname"
              />
              <Select
                fullWidth
                size="small"
                sx={{
                  bgcolor: "#D2D2D2",
                  mt: 2,
                  ml: { md: 12 },
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
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={gender}
                name="gender"
                label="Gender"
                onChange={handleSelect}
              >
                <MenuItem selected disabled>Gender</MenuItem>
                <MenuItem value={"male"}>Male</MenuItem>
                <MenuItem value={"female"}>Female</MenuItem>
              </Select>
              <TextField
                fullWidth
                sx={{
                  bgcolor: "#D2D2D2",
                  mt: 2,
                  ml: { md: 12 },
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
                label="Phone"
                name="phone"
                size="small"
                type="number"
              />
              <TextField
                fullWidth
                sx={{
                  bgcolor: "#D2D2D2",
                  mt: 2,
                  ml: { md: 12 },
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
                name="address"
                label="Address"
              />
              <Button
                type="submit"
                sx={{
                  ml: { md: 12 },
                  mt: 3,
                  mb: 5,
                  pl: { xs: 10, md: 17.5 },
                  pr: { xs: 10, md: 17.5 },
                }}
                variant="contained"
                color="error"
              >
                Register
              </Button>
            </form>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
