// "use client"
import React from "react"

import { useState } from "react"
import {
    AppBar,
    Toolbar,
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
    Grid,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Avatar,
    Chip,
    Button,
    IconButton,
    Container,
    useTheme,
    useMediaQuery,
    Popover,
    MenuList,
    MenuItem,
    Divider,
} from "@mui/material"
import {
    Dashboard as DashboardIcon,
    People as PeopleIcon,
    School as SchoolIcon,
    Class as ClassIcon,
    Notifications as NotificationsIcon,
    Menu as MenuIcon,
    TrendingUp as TrendingUpIcon,
    Close as CloseIcon,
    AccountCircle as AccountCircleIcon,
    Settings as SettingsIcon,
    Logout as LogoutIcon,
} from "@mui/icons-material"

const drawerWidth = 280

// Sample data
const summaryData = [
    {
        title: "Total Students",
        value: "1,234",
        icon: PeopleIcon,
        color: "#1976d2",
        bgColor: "#e3f2fd",
        change: "+12%",
    },
    {
        title: "Total Teachers",
        value: "89",
        icon: SchoolIcon,
        color: "#2e7d32",
        bgColor: "#e8f5e8",
        change: "+3%",
    },
    {
        title: "Total Classes",
        value: "45",
        icon: ClassIcon,
        color: "#7b1fa2",
        bgColor: "#f3e5f5",
        change: "+8%",
    },
    {
        title: "Active Sessions",
        value: "28",
        icon: DashboardIcon,
        color: "#f57c00",
        bgColor: "#fff3e0",
        change: "+15%",
    },
]

const recentStudents = [
    { id: 1, name: "Alice Johnson", class: "10-A", rollNo: "001", status: "Active" },
    { id: 2, name: "Bob Smith", class: "9-B", rollNo: "045", status: "Active" },
    { id: 3, name: "Carol Davis", class: "11-C", rollNo: "023", status: "Inactive" },
    { id: 4, name: "David Wilson", class: "8-A", rollNo: "067", status: "Active" },
    { id: 5, name: "Eva Brown", class: "10-B", rollNo: "089", status: "Active" },
    { id: 6, name: "Frank Miller", class: "9-A", rollNo: "034", status: "Active" },
]

const navigationItems = [
    { name: "Dashboard", icon: DashboardIcon, href: "#", active: true },
    { name: "Students", icon: PeopleIcon, href: "#", active: false },
    { name: "Teachers", icon: SchoolIcon, href: "#", active: false },
    { name: "Classes", icon: ClassIcon, href: "#", active: false },
]

export default function SchoolDashboard() {
    const [mobileOpen, setMobileOpen] = useState(false)
    const [profileAnchorEl, setProfileAnchorEl] = useState(null)
    const profileOpen = Boolean(profileAnchorEl)

    const handleProfileMouseEnter = (event) => {
        setProfileAnchorEl(event.currentTarget)
    }

    const handleProfileMouseLeave = () => {
        setProfileAnchorEl(null)
    }
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down("lg"))

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen)
    }

    const drawer = (
        <Box sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
            {/* Logo Section */}
            <Box
                sx={{
                    p: 2,
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

            {/* Navigation */}
            <Box sx={{ flexGrow: 1, p: 2 }}>
                <List>
                    {navigationItems.map((item) => (
                        <ListItem key={item.name} disablePadding sx={{ mb: 1 }}>
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
                                <ListItemText
                                    primary={item.name}
                                    primaryTypographyProps={{
                                        fontWeight: item.active ? 600 : 400,
                                    }}
                                />
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

    return (
        <Box sx={{ display: "flex", minHeight: "100vh", bgcolor: "grey.50" }}>
            {/* App Bar */}
            <AppBar
                position="fixed"
                sx={{
                    width: { lg: `calc(100% - ${drawerWidth}px)` },
                    ml: { lg: `${drawerWidth}px` },
                    bgcolor: "white",
                    color: "text.primary",
                    boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                    borderBottom: "1px solid",
                    borderColor: "divider",
                    p: 0.6
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { lg: "none" } }}
                    >
                        <MenuIcon />
                    </IconButton>

                    <Box sx={{ flexGrow: 1 }}>
                        <Typography variant="h5" fontWeight="bold" color="text.primary">
                            Dashboard
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Welcome back, Admin
                        </Typography>
                    </Box>

                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Box
                            onMouseEnter={handleProfileMouseEnter}
                            onMouseLeave={handleProfileMouseLeave}
                            sx={{ cursor: "pointer" }}
                        >
                            <Avatar
                                sx={{
                                    bgcolor: "primary.main",
                                    width: 40,
                                    height: 40,
                                    transition: "all 0.2s ease-in-out",
                                    "&:hover": {
                                        transform: "scale(1.05)",
                                        boxShadow: 2,
                                    },
                                }}
                            >
                                AD
                            </Avatar>
                        </Box>

                        <Popover
                            open={profileOpen}
                            anchorEl={profileAnchorEl}
                            onClose={handleProfileMouseLeave}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "right",
                            }}
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "right",
                            }}
                            sx={{
                                mt: 1,
                                "& .MuiPopover-paper": {
                                    minWidth: 200,
                                    boxShadow: 3,
                                    borderRadius: 2,
                                },
                            }}
                            disableRestoreFocus
                            onMouseEnter={() => setProfileAnchorEl(profileAnchorEl)}
                            onMouseLeave={handleProfileMouseLeave}
                        >
                            <Box sx={{ p: 2, borderBottom: 1, borderColor: "divider" }}>
                                <Typography variant="subtitle1" fontWeight="bold">
                                    Admin User
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    admin@schoolms.com
                                </Typography>
                            </Box>
                            <MenuList sx={{ py: 1 }}>
                                <MenuItem sx={{ py: 1.5 }}>
                                    <ListItemIcon>
                                        <AccountCircleIcon fontSize="small" />
                                    </ListItemIcon>
                                    <Typography variant="body2">My Profile</Typography>
                                </MenuItem>
                                <MenuItem sx={{ py: 1.5 }}>
                                    <ListItemIcon>
                                        <SettingsIcon fontSize="small" />
                                    </ListItemIcon>
                                    <Typography variant="body2">Settings</Typography>
                                </MenuItem>
                                <Divider />
                                <MenuItem sx={{ py: 1.5, color: "error.main" }}>
                                    <ListItemIcon>
                                        <LogoutIcon fontSize="small" color="error" />
                                    </ListItemIcon>
                                    <Typography variant="body2">Logout</Typography>
                                </MenuItem>
                            </MenuList>
                        </Popover>
                    </Box>
                </Toolbar>
            </AppBar>

            {/* Drawer */}
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

            {/* Main Content */}
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    width: { lg: `calc(100% - ${drawerWidth}px)` },
                }}
            >
                <Toolbar />
                <Container maxWidth="xl" sx={{ py: 4 }}>
                    {/* Summary Cards */}
                    <Grid container spacing={3} sx={{ mb: 4 }}>
                        {summaryData.map((item, index) => (
                            <Grid item xs={12} sm={6} lg={3} key={index}>
                                <Card
                                    sx={{
                                        height: "100%",
                                        transition: "all 0.3s ease-in-out",
                                        "&:hover": {
                                            transform: "translateY(-4px)",
                                            boxShadow: 4,
                                        },
                                        background: `linear-gradient(135deg, ${item.bgColor} 0%, white 100%)`,
                                        border: "1px solid",
                                        borderColor: "divider",
                                    }}
                                >
                                    <CardContent sx={{ p: 3 }}>
                                        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                                            <Box sx={{ flexGrow: 1 }}>
                                                <Typography variant="body2" color="text.secondary" fontWeight="medium" gutterBottom>
                                                    {item.title}
                                                </Typography>
                                                <Typography variant="h3" fontWeight="bold" color="text.primary" gutterBottom>
                                                    {item.value}
                                                </Typography>
                                                <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                                                    <TrendingUpIcon sx={{ fontSize: 16, color: "success.main" }} />
                                                    <Typography variant="body2" color="success.main" fontWeight="medium">
                                                        {item.change}
                                                    </Typography>
                                                    <Typography variant="caption" color="text.secondary">
                                                        vs last month
                                                    </Typography>
                                                </Box>
                                            </Box>
                                            <Avatar
                                                sx={{
                                                    bgcolor: item.color,
                                                    width: 56,
                                                    height: 56,
                                                }}
                                            >
                                                <item.icon sx={{ fontSize: 28 }} />
                                            </Avatar>
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>

                    {/* Quick Actions */}
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 4 }}>
                        <Box>
                            <Typography variant="h5" fontWeight="bold" gutterBottom>
                                Quick Actions
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Manage your school operations
                            </Typography>
                        </Box>
                        <Button
                            variant="contained"
                            size="large"
                            startIcon={<NotificationsIcon />}
                            sx={{
                                background: "linear-gradient(135deg, #1976d2 0%, #1565c0 100%)",
                                boxShadow: 3,
                                "&:hover": {
                                    boxShadow: 6,
                                    transform: "translateY(-2px)",
                                },
                                transition: "all 0.2s ease-in-out",
                                borderRadius: 2,
                                px: 3,
                                py: 1.5,
                            }}
                        >
                            Send Notification
                        </Button>
                    </Box>

                    {/* Recent Students Table */}
                    <Card
                        sx={{
                            boxShadow: 3,
                            borderRadius: 2,
                            overflow: "hidden",
                        }}
                    >
                        <Box sx={{ p: 3, borderBottom: 1, borderColor: "divider" }}>
                            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                <Box>
                                    <Typography variant="h5" fontWeight="bold" gutterBottom>
                                        Recent Students
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Latest student registrations and updates
                                    </Typography>
                                </Box>
                                <Button variant="outlined" size="small">
                                    View All
                                </Button>
                            </Box>
                        </Box>
                        <TableContainer>
                            <Table>
                                <TableHead>
                                    <TableRow sx={{ bgcolor: "grey.50" }}>
                                        <TableCell sx={{ fontWeight: "bold", py: 2 }}>Student</TableCell>
                                        <TableCell sx={{ fontWeight: "bold" }}>Class</TableCell>
                                        <TableCell sx={{ fontWeight: "bold" }}>Roll No.</TableCell>
                                        <TableCell sx={{ fontWeight: "bold" }}>Status</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {recentStudents.map((student) => (
                                        <TableRow
                                            key={student.id}
                                            sx={{
                                                "&:hover": {
                                                    bgcolor: "action.hover",
                                                },
                                                transition: "background-color 0.2s ease-in-out",
                                            }}
                                        >
                                            <TableCell sx={{ py: 2 }}>
                                                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                                                    <Avatar
                                                        sx={{
                                                            bgcolor: "primary.light",
                                                            color: "primary.contrastText",
                                                            width: 40,
                                                            height: 40,
                                                        }}
                                                    >
                                                        {student.name.charAt(0)}
                                                    </Avatar>
                                                    <Box>
                                                        <Typography variant="body1" fontWeight="medium">
                                                            {student.name}
                                                        </Typography>
                                                        <Typography variant="caption" color="text.secondary">
                                                            Student ID: {student.id.toString().padStart(3, "0")}
                                                        </Typography>
                                                    </Box>
                                                </Box>
                                            </TableCell>
                                            <TableCell>
                                                <Typography variant="body2" fontWeight="medium">
                                                    {student.class}
                                                </Typography>
                                            </TableCell>
                                            <TableCell>
                                                <Typography variant="body2" sx={{ fontFamily: "monospace" }}>
                                                    {student.rollNo}
                                                </Typography>
                                            </TableCell>
                                            <TableCell>
                                                <Chip
                                                    label={student.status}
                                                    color={student.status === "Active" ? "success" : "default"}
                                                    size="small"
                                                    sx={{
                                                        fontWeight: "medium",
                                                        borderRadius: 2,
                                                    }}
                                                />
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Card>
                </Container>
            </Box>
        </Box>
    )
}
