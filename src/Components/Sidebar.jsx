import React from "react"
import { Link } from "react-router-dom"

import {
    Drawer,
    Box,
    Typography,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Card,
    CardContent,
    Avatar,
    IconButton,
} from "@mui/material";

import {
    Dashboard as DashboardIcon,
    People as PeopleIcon,
    School as SchoolIcon,
    Class as ClassIcon,
    Close as CloseIcon,
    Settings as SettingsIcon
} from "@mui/icons-material"

const navigationItems = [
    { id: 1, label: "Dashboard", icon: DashboardIcon, to: "/dashboard" },
    { id: 2, label: "Students", icon: PeopleIcon, to: "/students" },
    { id: 3, label: "Teachers", icon: SchoolIcon, to: "/teachers" },
    { id: 4, label: "Classes", icon: ClassIcon, to: "/classes" },
    { id: 5, label: "Settings", icon: SettingsIcon, to: "/settings" }
]

const drawer = (
    <Box sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
        {/* Logo Section */}
        <Box
            sx={{
                p: 3,
                borderBottom: 1,
                borderColor: "divider",
                background: "linear-gradient(135deg, #1976d2 0%, #1565c0 100%)",
                color: "white",
            }}
        >
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Avatar
                    sx={{
                        bgcolor: "rgba(255,255,255,0.2)",
                        width: 40,
                        height: 40,
                    }}
                >
                    <SchoolIcon />
                </Avatar>
                <Typography variant="h5" fontWeight="bold">
                    SchoolMS
                </Typography>
            </Box>
        </Box>

        {/* `Nav`igation */}
        <Box sx={{ flexGrow: 1, p: 2 }}>
            <List>
                {navigationItems.map((item) => (
                    <ListItem key={item.id} disablePadding sx={{ mb: 1 }}>
                        <ListItemButton
                            sx={{
                                borderRadius: 2,
                                backgroundColor: item.active ? "primary.main" : "transparent",
                                color: item.active ? "white" : "text.primary",
                                "&:hover": {
                                    backgroundColor: item.active ? "primary.dark" : "action.hover",
                                },
                                transition: "all 0.2s ease-in-out",
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    color: item.active ? "white" : "text.secondary",
                                    minWidth: 40,
                                }}
                            >
                                <item.icon />
                            </ListItemIcon>
                            <Link to={item.to}>
                                <ListItemText
                                    primary={item.label}
                                    primaryTypographyProps={{
                                        fontWeight: item.active ? 600 : 400,
                                    }}
                                    sx={{ color: '#000' }}
                                />
                            </Link>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>

        {/* Help Section */}
        <Box sx={{ p: 2 }}>
            <Card
                sx={{
                    background: "linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)",
                    border: "1px solid #90caf9",
                }}
            >
                <CardContent sx={{ p: 2, "&:last-child": { pb: 2 } }}>
                    <Typography variant="subtitle2" fontWeight="bold" color="primary">
                        Need Help?
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                        Contact support team
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    </Box>
)

export default function Sidebar({ drawerWidth, mobileOpen, handleDrawerToggle }) {
    return (
        <Box component="nav" sx={{ width: { lg: drawerWidth }, flexShrink: { lg: 0 } }}>
            <Drawer
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true,
                }}
                sx={{
                    display: { xs: "block", lg: "none" },
                    "& .MuiDrawer-paper": {
                        boxSizing: "border-box",
                        width: drawerWidth,
                    },
                }}
            >
                <Box sx={{ display: "flex", justifyContent: "flex-end", p: 1 }}>
                    <IconButton onClick={handleDrawerToggle}>
                        <CloseIcon />
                    </IconButton>
                </Box>
                {drawer}
            </Drawer>
            <Drawer
                variant="permanent"
                sx={{
                    display: { xs: "none", lg: "block" },
                    "& .MuiDrawer-paper": {
                        boxSizing: "border-box",
                        width: drawerWidth,
                        borderRight: "1px solid",
                        borderColor: "divider",
                    },
                }}
                open
            >
                {drawer}
            </Drawer>
        </Box>

    )
}
