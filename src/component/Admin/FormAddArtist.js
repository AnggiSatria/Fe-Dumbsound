import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import LoadingButton from "@mui/lab/LoadingButton";
import SaveIcon from "@mui/icons-material/Save";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

export default function FormAddArtist({
  HandleSubmit,
  loading,
  type,
  handleSelect,
}) {
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
        <Select
          fullWidth
          size="small"
          sx={{
            mb: 2,
            bgcolor: "#D2D2D2",
            "& .Mui-focused": { color: "white" },
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
          value={type}
          label="Gender"
          name="type"
          onChange={handleSelect}
        >
          <MenuItem value={"Solo"}>Solo</MenuItem>
          <MenuItem value={"Rock"}>Rock</MenuItem>
          <MenuItem value={"Slow Rock"}>Slow Rock</MenuItem>
          <MenuItem value={"Pop"}>Pop</MenuItem>
          <MenuItem value={"Hip Hop"}>Hip Hop</MenuItem>
          <MenuItem value={"Reggae"}>Reggae</MenuItem>
          <MenuItem value={"Pop Punk"}>Pop Punk</MenuItem>
        </Select>
        <TextField
          size="small"
          fullWidth
          sx={{ bgcolor: "gray" }}
          label="Start Career"
          name="startcareer"
        />
        {loading.button ? (
          <LoadingButton
            sx={{
              borderColor: "black",
              bgcolor: "#F58033",
              paddingTop: 1,
              ml: 25,
              mr: 25,
              mt: 2,
            }}
            loading
            loadingPosition="start"
            startIcon={<SaveIcon />}
            variant="outlined"
          >
            <Typography variant="body1" color="white">
              Add Artist
            </Typography>
          </LoadingButton>
        ) : (
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
        )}
      </form>
    </Box>
  );
}
