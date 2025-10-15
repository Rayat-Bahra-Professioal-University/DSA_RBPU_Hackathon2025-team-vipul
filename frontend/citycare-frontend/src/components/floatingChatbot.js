import React, { useState } from "react";
import { Box, TextField, Button } from "@mui/material";

const FloatingChatbot = () => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  const handleSend = () => {
    if (!message.trim()) return;
    setChat([...chat, { sender: "user", text: message }]);
    setMessage("");
    // Later connect to AI backend here
  };

  return (
    <>
      {/* Floating button */}
      <Box
        onClick={() => setOpen(!open)}
        sx={{
          position: "fixed",
          bottom: 20,
          right: 20,
          width: 60,
          height: 60,
          borderRadius: "50%",
          bgcolor: "#1E3A8A",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          color: "white",
          fontWeight: "bold",
          zIndex: 1000,
        }}
      >
        💬
      </Box>

      {/* Chat popup */}
      {open && (
        <Box
          sx={{
            position: "fixed",
            bottom: 100,
            right: 20,
            width: 300,
            height: 400,
            bgcolor: "#F4F6F7",
            borderRadius: 2,
            boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
            p: 2,
            zIndex: 1000,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box sx={{ flex: 1, overflowY: "auto", mb: 1 }}>
            {chat.map((msg, i) => (
              <Box
                key={i}
                sx={{
                  textAlign: msg.sender === "user" ? "right" : "left",
                  mb: 1,
                }}
              >
                <Box
                  sx={{
                    display: "inline-block",
                    p: 1,
                    borderRadius: 1,
                    bgcolor: msg.sender === "user" ? "#E3F2FD" : "#BBDEFB",
                  }}
                >
                  {msg.text}
                </Box>
              </Box>
            ))}
          </Box>
          <Box sx={{ display: "flex" }}>
            <TextField
              fullWidth
              size="small"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <Button onClick={handleSend} sx={{ ml: 1 }} variant="contained">
              Send
            </Button>
          </Box>
        </Box>
      )}
    </>
  );
};

export default FloatingChatbot;
