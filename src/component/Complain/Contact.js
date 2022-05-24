import React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

export default function Contact() {
  return (
    <Box sx={{ height: "80vh" }}>
      <Box
        sx={{
          ml: 2,
          mr: 2,
          mt: 2,
          padding: 1,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
        className={`contact`}
      >
        <Avatar>H</Avatar>
        <Box>
          <Typography
            sx={{ ml: 2, fontWeight: "bold" }}
            variant="h6"
            color="white"
          >
            Cek
          </Typography>
          <Typography sx={{ ml: 2, mt: 1 }} variant="p" color="white">
            Cek
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
