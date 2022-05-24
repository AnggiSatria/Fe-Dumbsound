import React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";

export default function Chat({ contact, messages, sendMessage, user }) {
  return (
    <Box>
      <Box
        sx={{
          height: "80vh",
          px: 2,
          py: 2,
        }}
        className="overflow-auto"
      >
        {messages.map((value) => {
          return (
            <Box
              sx={{ display: "flex", mt: 2 }}
              className={`${
                value.idSender === user
                  ? "justify-content-end"
                  : "justify-content-start"
              }`}
            >
              <Avatar>H</Avatar>
              <Box className={`chat-other`} sx={{ ml: 3 }}>
                {value.message}
              </Box>
            </Box>
          );
        })}
      </Box>
      <Box style={{ height: "6vh" }}>
        <input
          placeholder="Send Message"
          className="input-message"
          onKeyPress={sendMessage}
        />
      </Box>
    </Box>
  );
}
