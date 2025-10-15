import React, { useState } from "react";

function IssueForm({ onSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [photo, setPhoto] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description || !location) {
      alert("Please fill all fields");
      return;
    }
    onSubmit({ title, description, location, photo });
    setTitle("");
    setDescription("");
    setLocation("");
    setPhoto(null);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        maxWidth: "450px",
        margin: "0 auto",
        padding: "30px",
        background: "#f7f9fc",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      }}
    >
      <h2 style={{ textAlign: "center", color: "#2c3e50" }}>Report an Issue</h2>

      <input
        type="text"
        placeholder="Issue Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        style={{
          padding: "12px 15px",
          borderRadius: "8px",
          border: "1px solid #ccc",
          outline: "none",
          fontSize: "16px",
          transition: "0.3s",
        }}
        onFocus={(e) => (e.target.style.borderColor = "#0078ff")}
        onBlur={(e) => (e.target.style.borderColor = "#ccc")}
      />

      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
        rows={4}
        style={{
          padding: "12px 15px",
          borderRadius: "8px",
          border: "1px solid #ccc",
          outline: "none",
          fontSize: "16px",
          resize: "vertical",
          transition: "0.3s",
        }}
        onFocus={(e) => (e.target.style.borderColor = "#0078ff")}
        onBlur={(e) => (e.target.style.borderColor = "#ccc")}
      />

      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        required
        style={{
          padding: "12px 15px",
          borderRadius: "8px",
          border: "1px solid #ccc",
          outline: "none",
          fontSize: "16px",
          transition: "0.3s",
        }}
        onFocus={(e) => (e.target.style.borderColor = "#0078ff")}
        onBlur={(e) => (e.target.style.borderColor = "#ccc")}
      />

      <input
        type="file"
        accept="image/*"
        onChange={(e) => setPhoto(e.target.files[0])}
        style={{
          padding: "8px",
          borderRadius: "8px",
          border: "1px solid #ccc",
          cursor: "pointer",
          transition: "0.3s",
        }}
        onMouseOver={(e) => (e.target.style.borderColor = "#0078ff")}
        onMouseOut={(e) => (e.target.style.borderColor = "#ccc")}
      />

      <button
        type="submit"
        style={{
          padding: "12px",
          borderRadius: "8px",
          background: "#0078ff",
          color: "#fff",
          border: "none",
          fontSize: "16px",
          fontWeight: "bold",
          cursor: "pointer",
          transition: "0.3s",
        }}
        onMouseOver={(e) => (e.target.style.background = "#005ecb")}
        onMouseOut={(e) => (e.target.style.background = "#0078ff")}
      >
        Submit Issue
      </button>
    </form>
  );
}

export default IssueForm;
