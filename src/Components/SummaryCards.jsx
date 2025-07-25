import React from "react"
import { Card, CardContent, Typography, Avatar, Grid, Box } from "@mui/material"
import TrendingUpIcon from "@mui/icons-material/TrendingUp"

export default function SummaryCards({ summaryData }) {
  return (
    <Grid container spacing={3} sx={{ mb: 4 }}>
      {summaryData.map((item, index) => (
        <Grid item xs={12} sm={6} lg={3} key={index}>
          <Card sx={{
            height: "100%",
            transition: "0.3s",
            background: `linear-gradient(135deg, ${item.bgColor} 0%, white 100%)`,
            border: "1px solid",
            borderColor: "divider"
          }}>
            <CardContent sx={{ p: 3 }}>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Box>
                  <Typography variant="body2" color="text.secondary">{item.title}</Typography>
                  <Typography variant="h3">{item.value}</Typography>
                  <Box sx={{ display: "flex", gap: 1 }}>
                    <TrendingUpIcon fontSize="small" color="success" />
                    <Typography variant="body2" color="success.main">{item.change}</Typography>
                    <Typography variant="caption" color="text.secondary">vs last month</Typography>
                  </Box>
                </Box>
                <Avatar sx={{ bgcolor: item.color, width: 56, height: 56 }}>
                  <item.icon fontSize="medium" />
                </Avatar>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}
