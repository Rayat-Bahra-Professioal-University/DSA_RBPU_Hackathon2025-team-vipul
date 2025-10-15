import React from "react";

function SummaryCard({ title, value, color }) {
  return (
    <div
      style={{
        background: color,
        padding: "20px",
        borderRadius: "10px",
        color: "#fff",
        flex: 1,
        textAlign: "center",
      }}
    >
      <h3>{title}</h3>
      <h2>{value}</h2>
    </div>
  );
}

export default SummaryCard;
