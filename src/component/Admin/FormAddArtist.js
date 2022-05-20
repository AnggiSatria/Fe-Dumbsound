import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function FormAddArtist() {
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
