"use client"
import { Box, Typography, Container, Paper, useTheme, useMediaQuery } from "@mui/material"
import SchoolIcon from "@mui/icons-material/School"

export default function WelcomePage() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#f8f9fa",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: { xs: 2, sm: 3, md: 4 },
      }}
    >
      <Container maxWidth="md">
        <Paper
          elevation={0}
          sx={{
            backgroundColor: "transparent",
            textAlign: "center",
            padding: { xs: 4, sm: 6, md: 8 },
          }}
        >
          {/* Large Icon */}
          <Box
            sx={{
              marginBottom: { xs: 3, sm: 4, md: 5 },
            }}
          >
            <SchoolIcon
              sx={{
                fontSize: { xs: 80, sm: 100, md: 120 },
                color: theme.palette.primary.main,
                filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.1))",
              }}
            />
          </Box>

          {/* Main Heading */}
          <Typography
            variant={isMobile ? "h4" : "h2"}
            component="h1"
            sx={{
              fontWeight: 700,
              color: theme.palette.text.primary,
              marginBottom: { xs: 2, sm: 3 },
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
            }}
          >
            Welcome to the School Management System
          </Typography>

          {/* Subtext */}
          <Typography
            variant={isMobile ? "body1" : "h6"}
            component="p"
            sx={{
              color: theme.palette.text.secondary,
              fontWeight: 400,
              maxWidth: "600px",
              margin: "0 auto",
              lineHeight: 1.6,
            }}
          >
            Click on 'Dashboard' in the sidebar to get started
          </Typography>

          {/* Optional decorative element */}
          <Box
            sx={{
              marginTop: { xs: 4, sm: 5, md: 6 },
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                width: { xs: 60, sm: 80, md: 100 },
                height: 4,
                backgroundColor: theme.palette.primary.main,
                borderRadius: 2,
                opacity: 0.3,
              }}
            />
          </Box>
        </Paper>
      </Container>
    </Box>
  )
}
