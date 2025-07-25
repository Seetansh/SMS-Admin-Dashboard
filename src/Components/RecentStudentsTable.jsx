import React from "react"
import {
  Card, Box, Typography, Button, TableContainer, Table, TableHead,
  TableRow, TableCell, TableBody, Avatar, Chip
} from "@mui/material"

export default function RecentStudentsTable({ students }) {
  return (
    <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
      <Box sx={{ p: 3 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box>
            <Typography variant="h5" fontWeight="bold">Recent Students</Typography>
            <Typography variant="body2" color="text.secondary">
              Latest student registrations and updates
            </Typography>
          </Box>
          <Button variant="outlined" size="small">View All</Button>
        </Box>
      </Box>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Student</TableCell>
              <TableCell>Class</TableCell>
              <TableCell>Roll No.</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {students.map((student) => (
              <TableRow key={student.id}>
                <TableCell>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <Avatar>{student.name.charAt(0)}</Avatar>
                    <Box>
                      <Typography>{student.name}</Typography>
                      <Typography variant="caption">ID: {student.id.toString().padStart(3, "0")}</Typography>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell>{student.class}</TableCell>
                <TableCell>{student.rollNo}</TableCell>
                <TableCell>
                  <Chip
                    label={student.status}
                    color={student.status === "Active" ? "success" : "default"}
                    size="small"
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  )
}
