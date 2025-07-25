import React from "react"
import {
    AppBar, Toolbar, Box, Typography, IconButton, Avatar, Popover,
    MenuList, MenuItem, Divider, ListItemIcon
} from "@mui/material"
import {
    Menu as MenuIcon,
    AccountCircle as AccountCircleIcon,
    Settings as SettingsIcon,
    Logout as LogoutIcon
} from "@mui/icons-material"

export default function Appbar({
    drawerWidth, handleDrawerToggle, profileAnchorEl, setProfileAnchorEl,
    handleProfileMouseEnter, handleProfileMouseLeave
}) {
    const profileOpen = Boolean(profileAnchorEl)

    return (
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
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{ mr: 2, display: { lg: "none" } }}
                >
                    <MenuIcon />
                </IconButton>

                <Box sx={{ flexGrow: 1 }}>
                    <Typography variant="h5" fontWeight="bold">Dashboard</Typography>
                    <Typography variant="body2" color="text.secondary">Welcome back, Admin</Typography>
                </Box>

                <Box onMouseEnter={handleProfileMouseEnter} onMouseLeave={handleProfileMouseLeave}>
                    <Avatar sx={{ bgcolor: "primary.main", width: 40, height: 40 }}>AD</Avatar>
                </Box>

                <Popover
                    open={profileOpen}
                    anchorEl={profileAnchorEl}
                    onClose={handleProfileMouseLeave}
                    anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                    transformOrigin={{ vertical: "top", horizontal: "right" }}
                    sx={{ mt: 1, "& .MuiPopover-paper": { minWidth: 200, boxShadow: 3, borderRadius: 2 } }}
                    disableRestoreFocus
                    onMouseEnter={() => setProfileAnchorEl(profileAnchorEl)}
                    onMouseLeave={handleProfileMouseLeave}
                >
                    <Box sx={{ p: 2, borderBottom: 1, borderColor: "divider" }}>
                        <Typography variant="subtitle1" fontWeight="bold">Admin User</Typography>
                        <Typography variant="body2" color="text.secondary">admin@schoolms.com</Typography>
                    </Box>
                    <MenuList sx={{ py: 1 }}>
                        <MenuItem>
                            <ListItemIcon><AccountCircleIcon fontSize="small" /></ListItemIcon>
                            My Profile
                        </MenuItem>
                        <MenuItem>
                            <ListItemIcon><SettingsIcon fontSize="small" /></ListItemIcon>
                            Settings
                        </MenuItem>
                        <Divider />
                        <MenuItem sx={{ color: "error.main" }}>
                            <ListItemIcon><LogoutIcon fontSize="small" color="error" /></ListItemIcon>
                            Logout
                        </MenuItem>
                    </MenuList>
                </Popover>
            </Toolbar>
        </AppBar>
    )
}
