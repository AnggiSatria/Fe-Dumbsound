import React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

export default function Contact({ dataContact, clickContact, contact }) {
  return (
    <Box sx={{ height: "80vh" }}>
      {dataContact?.map((value) => {
        return (
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
            className={`contact justify-content-center mt-3 ${
              contact?.id === value?.id && "contact-active"
            }`}
            key={value.id}
            onClick={() => {
              clickContact(value);
            }}
          >
            <Avatar sx={{ alignContent: "center" }}>H</Avatar>
            <Box>
              <Typography
                sx={{ ml: 2, fontWeight: "bold" }}
                variant="h6"
                color="white"
              >
                {value.fullname}
              </Typography>
              <Typography sx={{ ml: 2, mt: 1 }} variant="p" color="white">
                {value.message}
              </Typography>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
}
