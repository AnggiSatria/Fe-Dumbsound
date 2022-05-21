import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function FormAddArtist({ HandleSubmit }) {
  return (
    <Box sx={{ width: 600 }}>
      <form onSubmit={HandleSubmit}>
        <TextField
          size="small"
          fullWidth
          sx={{ bgcolor: "gray", mb: 2 }}
          label="Name"
          name="name"
        />
        <TextField
          size="small"
          fullWidth
          sx={{ bgcolor: "gray", mb: 2 }}
          label="Old"
          name="old"
        />
        <TextField
          size="small"
          fullWidth
          sx={{ bgcolor: "gray", mb: 2 }}
          label="Solo"
          name="type"
        />
        <TextField
          size="small"
          fullWidth
          sx={{ bgcolor: "gray" }}
          label="Start Career"
          name="startcareer"
        />
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
            Add Artist
          </Typography>
        </Button>
      </form>
    </Box>
  );
}
