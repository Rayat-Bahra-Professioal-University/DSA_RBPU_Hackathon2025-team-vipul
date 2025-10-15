import React, { useState } from "react";
import { Box, TextField, Button, Typography, Stack } from "@mui/material";

const SubmitIssue = () => {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleImageChange = (e) => setImage(e.target.files[0]);

  const handleSubmit = () => {
    if (!title || !description) {
      alert("Please fill title and description");
      return;
    }
    console.log({ title, description, image });
    alert("Issue submitted! (frontend only)");
  };

  return (
    <Box sx={{ p: 4, maxWidth: 600, mx: "auto" }}>
      <Typography variant="h4" sx={{ mb: 3, color: "#1E3A8A" }}>
        Report a Civic Issue
      </Typography>

      <TextField
        label="Issue Title"
        fullWidth
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        sx={{ mb: 2 }}
      />

      <TextField
        label="Description"
        fullWidth
        multiline
        rows={4}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        sx={{ mb: 2 }}
      />

      {/* Stack Upload and Submit buttons with spacing */}
      <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
        <Button variant="contained" component="label">
          Upload Image
          <input type="file" hidden onChange={handleImageChange} />
        </Button>

        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Submit Issue
        </Button>
      </Stack>

      {/* Show image preview */}
      {image && (
        <Box sx={{ mb: 2 }}>
          <Typography>📷 {image.name}</Typography>
          <img
            src={URL.createObjectURL(image)}
            alt="preview"
            style={{ maxWidth: "100%", borderRadius: 8 }}
          />
        </Box>
      )}
    </Box>
  );
};

export default SubmitIssue;
