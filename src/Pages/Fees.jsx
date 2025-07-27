import { useState } from "react"
import {
  Box,
  Card,
  CardContent,
  TextField,
  Typography,
  Avatar,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  InputAdornment,
  Chip,
} from "@mui/material"
import { Search, Download, AccountBalance, Payment, MonetizationOn, School, Person } from "@mui/icons-material"

// Mock data
const studentData = {
  name: "Sarah Johnson",
  enrollmentNumber: "ENR2024001",
  class: "Grade 10-A",
  academicYear: "2024-25",
  profilePhoto: "/placeholder.svg?height=80&width=80",
}

const feesData = {
  totalFees: 45000,
  paidFees: 30000,
  remainingFees: 15000,
}

const receiptsData = [
  {
    receiptId: "RCP001",
    paymentDate: "2024-01-15",
    amountPaid: 15000,
    modeOfPayment: "Online",
  },
  {
    receiptId: "RCP002",
    paymentDate: "2024-02-15",
    amountPaid: 15000,
    modeOfPayment: "Cash",
  },
  {
    receiptId: "RCP003",
    paymentDate: "2024-03-15",
    amountPaid: 0,
    modeOfPayment: "Pending",
  },
]

const totalCollection = 2850000

export default function FeesManagementPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const handleDownload = (receiptId) => {
    console.log(`Downloading receipt: ${receiptId}`)
  }

  return (
    <Box
      sx={{
        padding: 4,
        backgroundColor: "#f8fafc",
        minHeight: "100vh",
        fontFamily: "Roboto, sans-serif",
      }}
    >
      {/* Header */}
      <Typography
        variant="h4"
        sx={{
          marginBottom: 3,
          color: "#1565c0",
          fontWeight: 600,
          display: "flex",
          alignItems: "center",
          gap: 1,
        }}
      >
        <School sx={{ fontSize: 32 }} />
        Fees Management
      </Typography>

      {/* Search Bar */}
      <Card sx={{ marginBottom: 3, boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
        <CardContent>
          <TextField
            fullWidth
            placeholder="Search student by Enrollment Number"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search sx={{ color: "#1565c0" }} />
                </InputAdornment>
              ),
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#e3f2fd",
                },
                "&:hover fieldset": {
                  borderColor: "#1565c0",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#1565c0",
                },
              },
            }}
          />
        </CardContent>
      </Card>

      {/* Student Details Card */}
      <Card sx={{ marginBottom: 3, boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
        <CardContent sx={{ padding: 4 }}>
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 4 }}>
            {/* Left side - Avatar */}
            <Avatar
              src={studentData.profilePhoto}
              sx={{
                width: 100,
                height: 100,
                border: "3px solid #1565c0",
                flexShrink: 0,
              }}
            >
              <Person sx={{ fontSize: 50 }} />
            </Avatar>

            {/* Right side - Student Details in 2x2 Flexbox Layout */}
            <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 3 }}>
              {/* First Row */}
              <Box sx={{ display: "flex", gap: 4 }}>
                <Box sx={{ flex: 1 }}>
                  <Typography variant="subtitle2" sx={{ color: "#666", fontWeight: 500, marginBottom: 0.5 }}>
                    Student Name
                  </Typography>
                  <Typography variant="h6" sx={{ color: "#1565c0", fontWeight: 600 }}>
                    {studentData.name}
                  </Typography>
                </Box>

                <Box sx={{ flex: 1 }}>
                  <Typography variant="subtitle2" sx={{ color: "#666", fontWeight: 500, marginBottom: 0.5 }}>
                    Enrollment Number
                  </Typography>
                  <Typography variant="h6" sx={{ color: "#1565c0", fontWeight: 600 }}>
                    {studentData.enrollmentNumber}
                  </Typography>
                </Box>
              </Box>

              {/* Second Row */}
              <Box sx={{ display: "flex", gap: 4 }}>
                <Box sx={{ flex: 1 }}>
                  <Typography variant="subtitle2" sx={{ color: "#666", fontWeight: 500, marginBottom: 0.5 }}>
                    Class
                  </Typography>
                  <Typography variant="h6" sx={{ color: "#1565c0", fontWeight: 600 }}>
                    {studentData.class}
                  </Typography>
                </Box>

                <Box sx={{ flex: 1 }}>
                  <Typography variant="subtitle2" sx={{ color: "#666", fontWeight: 500, marginBottom: 0.5 }}>
                    Academic Year
                  </Typography>
                  <Typography variant="h6" sx={{ color: "#1565c0", fontWeight: 600 }}>
                    {studentData.academicYear}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </CardContent>
      </Card>

      {/* Summary Cards */}
      <Box sx={{ display: "flex", gap: 3, marginBottom: 3 }}>
        <Box sx={{ flex: 1 }}>
          <Card
            sx={{
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              background: "linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)",
            }}
          >
            <CardContent sx={{ textAlign: "center" }}>
              <AccountBalance sx={{ fontSize: 40, color: "#1565c0", marginBottom: 1 }} />
              <Typography variant="h6" sx={{ color: "#1565c0", fontWeight: 600 }}>
                Total Fees
              </Typography>
              <Typography variant="h4" sx={{ color: "#0d47a1", fontWeight: 700 }}>
                ₹{feesData.totalFees.toLocaleString()}
              </Typography>
            </CardContent>
          </Card>
        </Box>
        <Box sx={{ flex: 1 }}>
          <Card
            sx={{
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              background: "linear-gradient(135deg, #e8f5e8 0%, #c8e6c9 100%)",
            }}
          >
            <CardContent sx={{ textAlign: "center" }}>
              <Payment sx={{ fontSize: 40, color: "#2e7d32", marginBottom: 1 }} />
              <Typography variant="h6" sx={{ color: "#2e7d32", fontWeight: 600 }}>
                Paid Fees
              </Typography>
              <Typography variant="h4" sx={{ color: "#1b5e20", fontWeight: 700 }}>
                ₹{feesData.paidFees.toLocaleString()}
              </Typography>
            </CardContent>
          </Card>
        </Box>
        <Box sx={{ flex: 1 }}>
          <Card
            sx={{
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              background: "linear-gradient(135deg, #fff3e0 0%, #ffcc02 100%)",
            }}
          >
            <CardContent sx={{ textAlign: "center" }}>
              <MonetizationOn sx={{ fontSize: 40, color: "#f57c00", marginBottom: 1 }} />
              <Typography variant="h6" sx={{ color: "#f57c00", fontWeight: 600 }}>
                Remaining Fees
              </Typography>
              <Typography variant="h4" sx={{ color: "#e65100", fontWeight: 700 }}>
                ₹{feesData.remainingFees.toLocaleString()}
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Box>

      {/* Fees Receipt Table */}
      <Card sx={{ marginBottom: 3, boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
        <CardContent>
          <Typography variant="h6" sx={{ marginBottom: 2, color: "#1565c0", fontWeight: 600 }}>
            Fees Receipt History
          </Typography>
          <TableContainer component={Paper} sx={{ boxShadow: "none" }}>
            <Table>
              <TableHead>
                <TableRow sx={{ backgroundColor: "#e3f2fd" }}>
                  <TableCell sx={{ fontWeight: 600, color: "#1565c0" }}>Receipt ID</TableCell>
                  <TableCell sx={{ fontWeight: 600, color: "#1565c0" }}>Payment Date</TableCell>
                  <TableCell sx={{ fontWeight: 600, color: "#1565c0" }}>Amount Paid</TableCell>
                  <TableCell sx={{ fontWeight: 600, color: "#1565c0" }}>Mode of Payment</TableCell>
                  <TableCell sx={{ fontWeight: 600, color: "#1565c0" }}>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {receiptsData.map((receipt) => (
                  <TableRow key={receipt.receiptId} sx={{ "&:hover": { backgroundColor: "#f5f5f5" } }}>
                    <TableCell sx={{ fontWeight: 500 }}>{receipt.receiptId}</TableCell>
                    <TableCell>{receipt.paymentDate}</TableCell>
                    <TableCell sx={{ fontWeight: 600, color: receipt.amountPaid > 0 ? "#2e7d32" : "#f57c00" }}>
                      {receipt.amountPaid > 0 ? `₹${receipt.amountPaid.toLocaleString()}` : "Pending"}
                    </TableCell>
                    <TableCell>
                      <Chip
                        label={receipt.modeOfPayment}
                        color={
                          receipt.modeOfPayment === "Online"
                            ? "primary"
                            : receipt.modeOfPayment === "Cash"
                              ? "success"
                              : "warning"
                        }
                        size="small"
                      />
                    </TableCell>
                    <TableCell>
                      <IconButton
                        onClick={() => handleDownload(receipt.receiptId)}
                        disabled={receipt.amountPaid === 0}
                        sx={{
                          color: receipt.amountPaid > 0 ? "#1565c0" : "#ccc",
                          "&:hover": { backgroundColor: "#e3f2fd" },
                        }}
                      >
                        <Download />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>

      {/* Total Collection Card */}
      <Card
        sx={{
          boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
          background: "linear-gradient(135deg, #1565c0 0%, #0d47a1 100%)",
          color: "white",
        }}
      >
        <CardContent sx={{ textAlign: "center", padding: 4 }}>
          <MonetizationOn sx={{ fontSize: 50, marginBottom: 2 }} />
          <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: 1 }}>
            Total Collection of All Students
          </Typography>
          <Typography variant="h3" sx={{ fontWeight: 700 }}>
            ₹{totalCollection.toLocaleString()}
          </Typography>
          <Typography variant="body1" sx={{ marginTop: 1, opacity: 0.9 }}>
            Academic Year 2024-25
          </Typography>
        </CardContent>
      </Card>
    </Box>
  )
}
