import React, { useEffect, useState } from "react";
import axios from "axios";
import IssueTable from "../components/IssueTable";

const AdminPanel = () => {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/issues")
      .then(res => setIssues(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Admin Panel - All Issues</h2>
      <IssueTable data={issues} />
    </div>
  );
};

export default AdminPanel;
