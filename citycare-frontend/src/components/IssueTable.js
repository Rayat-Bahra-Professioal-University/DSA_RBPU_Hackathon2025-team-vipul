import React from "react";

function IssueTable({ data }) {
  return (
    <table style={{ width: "100%", marginTop: "20px", borderCollapse: "collapse" }}>
      <thead>
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Location</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {data.map((issue, i) => (
          <tr key={i} style={{ borderBottom: "1px solid #ccc" }}>
            <td>{issue.title}</td>
            <td>{issue.description}</td>
            <td>{issue.locationName || issue.location}</td>
            <td>{issue.status || "Pending"}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default IssueTable;
