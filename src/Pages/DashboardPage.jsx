// dashboard content

import React, { useState } from "react"
import { Box, Container, Toolbar, useTheme, useMediaQuery, requirePropFactory } from "@mui/material"
import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Sidebar"
import AppHeader from "../Components/Appbar"
import SummaryCards from "../Components/SummaryCards"
import QuickActions from "../Components/QuickActions"
import RecentStudentsTable from "../Components/RecentStudentsTable"
import Classes from './Classes'
import Students from './Students'
import Teachers from './Teachers'

import {
    Dashboard as DashboardIcon,
    People as PeopleIcon,
    School as SchoolIcon,
    Class as ClassIcon,
} from "@mui/icons-material"

const summaryData = [
    { title: "Total Students", value: "1,234", icon: PeopleIcon, color: "#1976d2", bgColor: "#e3f2fd", change: "+12%" },
    { title: "Total Teachers", value: "89", icon: SchoolIcon, color: "#2e7d32", bgColor: "#e8f5e8", change: "+3%" },
    { title: "Total Classes", value: "45", icon: ClassIcon, color: "#7b1fa2", bgColor: "#f3e5f5", change: "+8%" },
    { title: "Active Sessions", value: "28", icon: DashboardIcon, color: "#f57c00", bgColor: "#fff3e0", change: "+15%" }
]

const recentStudents = [
    { id: 1, name: "Alice Johnson", class: "10-A", rollNo: "001", status: "Active" },
    { id: 2, name: "Bob Smith", class: "9-B", rollNo: "045", status: "Active" },
    { id: 3, name: "Carol Davis", class: "11-C", rollNo: "023", status: "Inactive" },
    { id: 4, name: "David Wilson", class: "8-A", rollNo: "067", status: "Active" },
    { id: 5, name: "Eva Brown", class: "10-B", rollNo: "089", status: "Active" },
    { id: 6, name: "Frank Miller", class: "9-A", rollNo: "034", status: "Active" }
]


export default function Dashboard() {
    return (
        <Container maxWidth="xl" sx={{ py: 4 }}>
            <SummaryCards summaryData={summaryData} />
            <QuickActions />
            <RecentStudentsTable students={recentStudents} />
        </Container>
    )
}