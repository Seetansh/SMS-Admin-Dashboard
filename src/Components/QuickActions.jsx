import React from "react"
import { Box, Typography, Button } from "@mui/material"
import NotificationsIcon from "@mui/icons-material/Notifications"

export default function QuickActions() {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between", mb: 4 }}>
      <Box>
        <Typography variant="h5" fontWeight="bold">Quick Actions</Typography>
        <Typography variant="body2" color="text.secondary">Manage your school operations</Typography>
      </Box>
      <Button
        variant="contained"
        startIcon={<NotificationsIcon />}
        sx={{
          background: "linear-gradient(135deg, #1976d2 0%, #1565c0 100%)",
          borderRadius: 2
        }}
      >
        Send Notification
      </Button>
    </Box>
  )
}
