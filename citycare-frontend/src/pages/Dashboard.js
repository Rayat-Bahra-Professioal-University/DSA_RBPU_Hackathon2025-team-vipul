import React from "react";
import { Box, Grid } from "@mui/material";
import SummaryCard from "../components/SummaryCard";
import IssueTable from "../components/IssueTable";
import { issues } from "../data/issues";

const Dashboard = () => {
  const total = issues.length;
  const resolved = issues.filter(i => i.status === "Resolved").length;
  const pending = total - resolved;

  return (
    <Box sx={{ ml: 30, p: 3 }}>
      <Grid container spacing={2} sx={{ mb: 3 }}>
        <SummaryCard title="Total Issues" value={total} color="linear-gradient(45deg, #FF6B6B, #FFD93D)" />
        <SummaryCard title="Resolved" value={resolved} color="linear-gradient(45deg, #6BCB77, #4D96FF)" />
        <SummaryCard title="Pending" value={pending} color="linear-gradient(45deg, #FF6B6B, #FF9F1C)" />
      </Grid>
      <IssueTable data={issues} />
    </Box>
  );
};

export default Dashboard;
