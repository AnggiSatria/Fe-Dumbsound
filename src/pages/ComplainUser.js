import React from "react";
import AppbarUser from "../component/User/AppbarUser";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Contact from "../component/Complain/Contact";
import Chat from "../component/Complain/Chat";
import { io } from "socket.io-client";
import { useSelector } from "react-redux";
import { selectUser } from "../redux/userSlice";
let socket;

export default function ComplainUser() {
  document.body.style.backgroundColor = "black";
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const pages = ["Pay", "Logout"];
  const user = useSelector(selectUser);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const [contact, setContact] = React.useState(null);
  const [contacts, setContacts] = React.useState([]);
  const [messages, setMessages] = React.useState([]);

  React.useEffect(() => {
    socket = io("http://localhost:5000", {
      auth: {
        token: localStorage.getItem("token"),
      },
      query: {
        id: user.user?.id,
      },
    });

    socket.on("new message", (data) => {
      if (contact?.id === undefined) {
        socket.emit("load messages", data);
      } else {
        socket.emit("load messages", contact.id);
      }
    });

    loadContact();
    loadMessages();

    socket.on("connect_error", (err) => {
      console.error(err.message);
    });

    return () => {
      socket.disconnect();
    };
  }, [messages]); //  di isi contact agar setiap klik menjalankan useEffect

  const loadContact = () => {
    socket.emit("load admin contact");
    socket.on("admin contact", async (data) => {
      const dataContact = {
        ...data,
        message:
          messages.length > 0
            ? messages[messages.length - 1].message
            : "Click here to start message",
      };
      setContacts([dataContact]);
    });
  };

  const loadMessages = () => {
    socket.on("messages", async (data) => {
      if (data.length > 0) {
        const dataMessages = data.map((item) => ({
          idSender: item.sender.id,
          message: item.message,
        }));
        setMessages(dataMessages);
      }
      const chatMessages = document.getElementById("chat-messages");
      chatMessages.scrollTop = chatMessages?.scrollHeight;
    });
  };

  const onClickContact = (data) => {
    setContact(data);
    socket.emit("load messages", data.id);
  };

  const onSendMessage = (e) => {
    if (e.key === "Enter") {
      const data = {
        idRecipient: contact.id,
        message: e.target.value,
      };
      socket.emit("send messages", data);
      e.target.value = "";
    }
  };

  return (
    <Box>
      <Box>
        <AppbarUser
          isPayment={true}
          pages={pages}
          anchorElNav={anchorElNav}
          handleOpenNavMenu={handleOpenNavMenu}
          handleCloseNavMenu={handleCloseNavMenu}
        />
        <Box>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={4} sx={{ mt: 2, borderRight: "1px solid white" }}>
                <Contact
                  dataContact={contacts}
                  clickContact={onClickContact}
                  contact={contact}
                />
              </Grid>
              <Grid item xs={8} sx={{ mt: 2 }}>
                <Chat
                  user={user.user?.id}
                  contact={contact}
                  messages={messages}
                  sendMessage={onSendMessage}
                />
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
