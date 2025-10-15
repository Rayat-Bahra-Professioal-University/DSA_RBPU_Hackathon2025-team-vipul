import React, { useState } from "react";
import { TextField, Button, MenuItem, Box } from "@mui/material";

const categories = ["Road", "Electricity", "Water", "Garbage"];

const IssueForm = () => {
  const [form, setForm] = useState({ title: "", category: "", location: "", image: "" });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = e => {
    e.preventDefault();
    alert("Issue submitted! (Demo only)");
  };

  return (
    <Box component="form" sx={{ mt: 3, display: "flex", flexDirection: "column", gap: 2 }} onSubmit={handleSubmit}>
      <TextField label="Title" name="title" value={form.title} onChange={handleChange} required />
      <TextField select label="Category" name="category" value={form.category} onChange={handleChange} required>
        {categories.map(option => (
          <MenuItem key={option} value={option}>{option}</MenuItem>
        ))}
      </TextField>
      <TextField label="Location" name="location" value={form.location} onChange={handleChange} required />
      <TextField label="Image URL" name="image" value={form.image} onChange={handleChange} />
      <Button type="submit" variant="contained">Submit Issue</Button>
    </Box>
  );
};

export default IssueForm;
