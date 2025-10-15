import React from "react";
import { Table, TableBody, TableCell, TableHead, TableRow, Paper, Button } from "@mui/material";

const IssueTable = ({ data }) => (
  <Paper sx={{ width: "100%", overflowX: "auto", mt: 2 }}>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>ID</TableCell>
          <TableCell>Title</TableCell>
          <TableCell>Category</TableCell>
          <TableCell>Location</TableCell>
          <TableCell>Status</TableCell>
          <TableCell>Assigned To</TableCell>
          <TableCell>Action</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map(issue => (
          <TableRow key={issue.id}>
            <TableCell>{issue.id}</TableCell>
            <TableCell>{issue.title}</TableCell>
            <TableCell>{issue.category}</TableCell>
            <TableCell>{issue.location}</TableCell>
            <TableCell>{issue.status}</TableCell>
            <TableCell>{issue.assignedTo}</TableCell>
            <TableCell>
              <Button variant="contained" size="small">Resolve</Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Paper>
);

export default IssueTable;
