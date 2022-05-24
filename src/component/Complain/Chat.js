import React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";

export default function Chat() {
  return (
    <Box>
      <Box sx={{ height: "80vh", px: 2, py: 2 }} className="overflow-auto">
        <Box
          sx={{ display: "flex", mt: 2 }}
          className={`justify-content-start`}
        >
          <Avatar>H</Avatar>
          <Box className={`chat-other`} sx={{ ml: 3 }}>
            Cek
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
