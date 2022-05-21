import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AttachFileIcon from "@mui/icons-material/AttachFile";

export default function FormAddMusic({
  handleChangeThumbnail,
  handleChangeSong,
  HandleSubmit,
  Input,
}) {
  return (
    <Box>
      <form onSubmit={HandleSubmit}>
        <Box sx={{ display: "flex", flexDirection: "row", mb: 2 }}>
          <Box sx={{ width: 350, mr: 2 }}>
            <TextField
              fullWidth
              size="small"
              name="title"
              sx={{ bgcolor: "gray" }}
              label="Title"
            />
          </Box>
          <Box>
            <label htmlFor="contained-button-file">
              <Input
                accept="image/*"
                onChange={handleChangeThumbnail}
                id="contained-button-file"
                type="file"
              />
              <Button
                component="span"
                sx={{
                  borderColor: "black",
                  bgcolor: "gray",
                  paddingTop: 1,
                  paddingBotton: 1,
                }}
                variant="outlined"
                endIcon={<AttachFileIcon sx={{ color: "red" }} />}
              >
                <Typography variant="body1" color="white">
                  Attach Thumbnail
                </Typography>
              </Button>
            </label>
          </Box>
        </Box>
        <Box>
          <TextField
            size="small"
            fullWidth
            sx={{ bgcolor: "gray" }}
            label="Year"
            name="year"
          />
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <label htmlFor="contained-button-file1">
            <Input
              accept="image/*"
              onChange={handleChangeSong}
              id="contained-button-file1"
              type="file"
            />
            <Button
              component="span"
              sx={{
                borderColor: "black",
                bgcolor: "gray",
                paddingTop: 1,
                mt: 2,
              }}
              variant="outlined"
              endIcon={<AttachFileIcon sx={{ color: "red" }} />}
            >
              <Typography variant="body1" color="white">
                Attach
              </Typography>
            </Button>
          </label>
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
              Add Song
            </Typography>
          </Button>
        </Box>
      </form>
    </Box>
  );
}
