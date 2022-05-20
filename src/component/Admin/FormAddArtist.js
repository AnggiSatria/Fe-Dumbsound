import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import AttachFileIcon from "@mui/icons-material/AttachFile";

export default function FormAddArtist() {
  const Input = styled("input")({
    display: "none",
  });
  return (
    <Box sx={{ width: 600 }}>
      <form>
        <TextField
          size="small"
          fullWidth
          sx={{ bgcolor: "gray", mb: 2 }}
          label="Name"
        />
        <TextField
          size="small"
          fullWidth
          sx={{ bgcolor: "gray", mb: 2 }}
          label="Old"
        />
        <TextField
          size="small"
          fullWidth
          sx={{ bgcolor: "gray", mb: 2 }}
          label="Solo"
        />
        <TextField
          size="small"
          fullWidth
          sx={{ bgcolor: "gray" }}
          label="Start Career"
        />
      </form>
    </Box>
  );
}
