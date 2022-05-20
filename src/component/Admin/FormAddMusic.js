import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import AttachFileIcon from "@mui/icons-material/AttachFile";

export default function FormAddMusic() {
  const Input = styled("input")({
    display: "none",
  });
  return (
    <Box>
      <form>
        <Box sx={{ display: "flex", flexDirection: "row", mb: 2 }}>
          <Box sx={{ width: 350, mr: 2 }}>
            <TextField
              fullWidth
              size="small"
              sx={{ bgcolor: "gray" }}
              label="Title"
            />
          </Box>
          <label htmlFor="contained-button-file">
            <Input
              accept="image/*"
              id="contained-button-file"
              multiple
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
        <TextField
          size="small"
          fullWidth
          sx={{ bgcolor: "gray" }}
          label="Year"
        />
        <label htmlFor="contained-button-file">
          <Input
            accept="image/*"
            id="contained-button-file"
            multiple
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
      </form>
    </Box>
  );
}
