"use client"

import { useState } from "react"
import {
    Box,
    Card,
    CardContent,
    Typography,
    TextField,
    Button,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Drawer,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Chip,
    Grid,
    Container,
    Fab,
    IconButton,
    InputAdornment,
    DialogContentText,
} from "@mui/material"
import { Search, Add, Edit, Delete, Visibility, Clear, People, PersonAdd, PersonOff } from "@mui/icons-material"

// Sample student data
const initialStudents = [
    {
        id: 1,
        name: "Alice Johnson",
        rollNumber: "2024001",
        class: "10",
        section: "A",
        status: "Active",
        parentContact: "+1 (555) 123-4567",
        email: "alice.johnson@email.com",
        address: "123 Main St, City, State 12345",
        dateOfBirth: "2008-05-15",
        admissionDate: "2024-01-15",
    },
    {
        id: 2,
        name: "Bob Smith",
        rollNumber: "2024002",
        class: "10",
        section: "B",
        status: "Active",
        parentContact: "+1 (555) 234-5678",
        email: "bob.smith@email.com",
        address: "456 Oak Ave, City, State 12345",
        dateOfBirth: "2008-08-22",
        admissionDate: "2024-01-16",
    },
    {
        id: 3,
        name: "Carol Davis",
        rollNumber: "2024003",
        class: "9",
        section: "A",
        status: "Inactive",
        parentContact: "+1 (555) 345-6789",
        email: "carol.davis@email.com",
        address: "789 Pine Rd, City, State 12345",
        dateOfBirth: "2009-03-10",
        admissionDate: "2024-01-17",
    },
    {
        id: 4,
        name: "David Wilson",
        rollNumber: "2024004",
        class: "11",
        section: "A",
        status: "Active",
        parentContact: "+1 (555) 456-7890",
        email: "david.wilson@email.com",
        address: "321 Elm St, City, State 12345",
        dateOfBirth: "2007-11-28",
        admissionDate: "2024-01-18",
    },
    {
        id: 5,
        name: "Emma Brown",
        rollNumber: "2024005",
        class: "12",
        section: "B",
        status: "Active",
        parentContact: "+1 (555) 567-8901",
        email: "emma.brown@email.com",
        address: "654 Maple Dr, City, State 12345",
        dateOfBirth: "2006-07-03",
        admissionDate: "2024-01-19",
    },
]

export default function StudentManagement() {
    const [students, setStudents] = useState(initialStudents)
    const [searchTerm, setSearchTerm] = useState("")
    const [classFilter, setClassFilter] = useState("")
    const [sectionFilter, setSectionFilter] = useState("")
    const [statusFilter, setStatusFilter] = useState("")
    const [isAddModalOpen, setIsAddModalOpen] = useState(false)
    const [isEditModalOpen, setIsEditModalOpen] = useState(false)
    const [isViewDrawerOpen, setIsViewDrawerOpen] = useState(false)
    const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
    const [selectedStudent, setSelectedStudent] = useState(null)
    const [studentToDelete, setStudentToDelete] = useState(null)
    const [formData, setFormData] = useState({
        name: "",
        rollNumber: "",
        class: "",
        section: "",
        status: "Active",
        parentContact: "",
        email: "",
        address: "",
        dateOfBirth: "",
        admissionDate: "",
    })

    // Filter students based on search and filters
    const filteredStudents = students.filter((student) => {
        const matchesSearch =
            student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            student.rollNumber.toLowerCase().includes(searchTerm.toLowerCase())
        const matchesClass = !classFilter || student.class === classFilter
        const matchesSection = !sectionFilter || student.section === sectionFilter
        const matchesStatus = !statusFilter || student.status === statusFilter
        return matchesSearch && matchesClass && matchesSection && matchesStatus
    })

    // Calculate statistics
    const totalStudents = students.length
    const activeStudents = students.filter((s) => s.status === "Active").length
    const inactiveStudents = students.filter((s) => s.status === "Inactive").length

    const handleAddStudent = () => {
        // Basic validation
        if (!formData.name || !formData.rollNumber || !formData.class || !formData.section) {
            return // Don't submit if required fields are empty
        }

        const newStudent = {
            id: Math.max(...students.map((s) => s.id)) + 1,
            ...formData,
        }
        setStudents([...students, newStudent])
        setIsAddModalOpen(false)
        resetForm()
    }

    const handleEditStudent = () => {
        // Basic validation
        if (!formData.name || !formData.rollNumber || !formData.class || !formData.section) {
            return // Don't submit if required fields are empty
        }

        if (selectedStudent) {
            setStudents(students.map((s) => (s.id === selectedStudent.id ? { ...selectedStudent, ...formData } : s)))
            setIsEditModalOpen(false)
            resetForm()
            setSelectedStudent(null)
        }
    }

    const handleDeleteStudent = () => {
        if (studentToDelete) {
            setStudents(students.filter((s) => s.id !== studentToDelete.id))
            setIsDeleteDialogOpen(false)
            setStudentToDelete(null)
        }
    }

    const resetForm = () => {
        setFormData({
            name: "",
            rollNumber: "",
            class: "",
            section: "",
            status: "Active",
            parentContact: "",
            email: "",
            address: "",
            dateOfBirth: "",
            admissionDate: "",
        })
    }

    const openEditModal = (student) => {
        setSelectedStudent(student)
        setFormData({
            name: student.name,
            rollNumber: student.rollNumber,
            class: student.class,
            section: student.section,
            status: student.status,
            parentContact: student.parentContact,
            email: student.email,
            address: student.address,
            dateOfBirth: student.dateOfBirth,
            admissionDate: student.admissionDate,
        })
        setIsEditModalOpen(true)
    }

    const openViewDrawer = (student) => {
        setSelectedStudent(student)
        setIsViewDrawerOpen(true)
    }

    const openDeleteDialog = (student) => {
        setStudentToDelete(student)
        setIsDeleteDialogOpen(true)
    }

    const clearFilters = () => {
        setSearchTerm("")
        setClassFilter("")
        setSectionFilter("")
        setStatusFilter("")
    }

    const handleFormChange = (field, value) => {
        setFormData({ ...formData, [field]: value })
    }

    return (
        <Box sx={{ minHeight: "100vh", bgcolor: "grey.50", p: { xs: 2, md: 3 } }}>
            <Container maxWidth="xl">
                {/* Header */}
                <Box sx={{ mb: 4 }}>
                    <Typography variant="h3" component="h1" sx={{ color: "primary.main", fontWeight: "bold", mb: 1 }}>
                        Student Management
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        Manage student information and records
                    </Typography>
                </Box>

                {/* Summary Cards */}
                <Grid container spacing={3} sx={{ mb: 3 }}>
                    <Grid item xs={12} md={4}>
                        <Card sx={{ borderLeft: 4, borderColor: "primary.main" }}>
                            <CardContent>
                                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                                    <Box>
                                        <Typography variant="body2" color="text.secondary" sx={{ fontWeight: "medium" }}>
                                            Total Students
                                        </Typography>
                                        <Typography variant="h4" sx={{ color: "primary.main", fontWeight: "bold" }}>
                                            {totalStudents}
                                        </Typography>
                                    </Box>
                                    <People sx={{ fontSize: 32, color: "primary.main" }} />
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <Card sx={{ borderLeft: 4, borderColor: "success.main" }}>
                            <CardContent>
                                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                                    <Box>
                                        <Typography variant="body2" color="text.secondary" sx={{ fontWeight: "medium" }}>
                                            Active Students
                                        </Typography>
                                        <Typography variant="h4" sx={{ color: "success.main", fontWeight: "bold" }}>
                                            {activeStudents}
                                        </Typography>
                                    </Box>
                                    <PersonAdd sx={{ fontSize: 32, color: "success.main" }} />
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <Card sx={{ borderLeft: 4, borderColor: "grey.500" }}>
                            <CardContent>
                                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                                    <Box>
                                        <Typography variant="body2" color="text.secondary" sx={{ fontWeight: "medium" }}>
                                            Inactive Students
                                        </Typography>
                                        <Typography variant="h4" sx={{ color: "grey.700", fontWeight: "bold" }}>
                                            {inactiveStudents}
                                        </Typography>
                                    </Box>
                                    <PersonOff sx={{ fontSize: 32, color: "grey.500" }} />
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>

                {/* Search and Filters */}
                <Card sx={{ mb: 3 }}>
                    <CardContent>
                        <Grid container spacing={2} alignItems="center">
                            <Grid item xs={12} sm={8} md={6}>
                                <TextField
                                    fullWidth
                                    placeholder="Search by name or roll number..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <Search />
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </Grid>
                            <Grid item xs={6} sm={4} md={1.5}>
                                <FormControl fullWidth sx={{ minWidth: 100 }}>
                                    <InputLabel>Class</InputLabel>
                                    <Select
                                        value={classFilter}
                                        onChange={(e) => setClassFilter(e.target.value)}
                                        label="Class"
                                        displayEmpty
                                    >

                                        <MenuItem value="9">Class 9</MenuItem>
                                        <MenuItem value="10">Class 10</MenuItem>
                                        <MenuItem value="11">Class 11</MenuItem>
                                        <MenuItem value="12">Class 12</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={6} sm={4} md={1.5}>
                                <FormControl fullWidth sx={{ minWidth: 100 }}>
                                    <InputLabel>Section</InputLabel>
                                    <Select
                                        value={sectionFilter}
                                        onChange={(e) => setSectionFilter(e.target.value)}
                                        label="Section"
                                        displayEmpty
                                    >

                                        <MenuItem value="A">Section A</MenuItem>
                                        <MenuItem value="B">Section B</MenuItem>
                                        <MenuItem value="C">Section C</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={6} sm={4} md={1.5}>
                                <FormControl fullWidth sx={{ minWidth: 100 }}>
                                    <InputLabel>Status</InputLabel>
                                    <Select
                                        value={statusFilter}
                                        onChange={(e) => setStatusFilter(e.target.value)}
                                        label="Status"
                                        displayEmpty
                                    >
                                        <MenuItem value="Active">Active</MenuItem>
                                        <MenuItem value="Inactive">Inactive</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={6} sm={4} md={1.5}>
                                {(searchTerm || classFilter || sectionFilter || statusFilter) && (
                                    <Button
                                        variant="outlined"
                                        onClick={clearFilters}
                                        startIcon={<Clear />}
                                        size="small"
                                        sx={{ height: "56px", minWidth: 100 }}
                                    >
                                        Clear
                                    </Button>
                                )}
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>

                {/* Students Table */}
                <Card>
                    <CardContent>
                        <Typography variant="h6" sx={{ color: "primary.main", mb: 2 }}>
                            Students List ({filteredStudents.length} students)
                        </Typography>
                        <TableContainer component={Paper} elevation={0}>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell sx={{ fontWeight: "bold" }}>Student Name</TableCell>
                                        <TableCell sx={{ fontWeight: "bold" }}>Roll Number</TableCell>
                                        <TableCell sx={{ fontWeight: "bold" }}>Class</TableCell>
                                        <TableCell sx={{ fontWeight: "bold" }}>Section</TableCell>
                                        <TableCell sx={{ fontWeight: "bold" }}>Status</TableCell>
                                        <TableCell sx={{ fontWeight: "bold" }}>Actions</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {filteredStudents.map((student) => (
                                        <TableRow key={student.id} hover>
                                            <TableCell sx={{ fontWeight: "medium" }}>{student.name}</TableCell>
                                            <TableCell>{student.rollNumber}</TableCell>
                                            <TableCell>{student.class}</TableCell>
                                            <TableCell>{student.section}</TableCell>
                                            <TableCell>
                                                <Chip
                                                    label={student.status}
                                                    color={student.status === "Active" ? "success" : "default"}
                                                    size="small"
                                                    variant="outlined"
                                                />
                                            </TableCell>
                                            <TableCell>
                                                <Box sx={{ display: "flex", gap: 1 }}>
                                                    <IconButton size="small" onClick={() => openViewDrawer(student)} color="primary">
                                                        <Visibility />
                                                    </IconButton>
                                                    <IconButton size="small" onClick={() => openEditModal(student)} color="warning">
                                                        <Edit />
                                                    </IconButton>
                                                    <IconButton size="small" onClick={() => openDeleteDialog(student)} color="error">
                                                        <Delete />
                                                    </IconButton>
                                                </Box>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </CardContent>
                </Card>

                {/* Floating Add Button */}
                <Fab color="primary" sx={{ position: "fixed", bottom: 24, right: 24 }} onClick={() => setIsAddModalOpen(true)}>
                    <Add />
                </Fab>

                {/* Add Student Modal */}
                <Dialog open={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} maxWidth="md" fullWidth>
                    <DialogTitle>Add New Student</DialogTitle>
                    <DialogContent>
                        <Grid container spacing={2} sx={{ mt: 1 }}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="Name"
                                    value={formData.name}
                                    onChange={(e) => handleFormChange("name", e.target.value)}
                                    placeholder="Enter student name"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="Roll Number"
                                    value={formData.rollNumber}
                                    onChange={(e) => handleFormChange("rollNumber", e.target.value)}
                                    placeholder="Enter roll number"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <FormControl fullWidth required sx={{ minWidth: 100 }}>
                                    <InputLabel>Class *</InputLabel>
                                    <Select
                                        value={formData.class}
                                        onChange={(e) => handleFormChange("class", e.target.value)}
                                        label="Class *"
                                        error={!formData.class}
                                    >
                                        <MenuItem value="9">Class 9</MenuItem>
                                        <MenuItem value="10">Class 10</MenuItem>
                                        <MenuItem value="11">Class 11</MenuItem>
                                        <MenuItem value="12">Class 12</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <FormControl fullWidth required sx={{ minWidth: 100 }}>
                                    <InputLabel>Section *</InputLabel>
                                    <Select
                                        value={formData.section}
                                        onChange={(e) => handleFormChange("section", e.target.value)}
                                        label="Section *"
                                        error={!formData.section}
                                    >
                                        <MenuItem value="A">Section A</MenuItem>
                                        <MenuItem value="B">Section B</MenuItem>
                                        <MenuItem value="C">Section C</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="Email"
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) => handleFormChange("email", e.target.value)}
                                    placeholder="Enter email address"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="Parent Contact"
                                    value={formData.parentContact}
                                    onChange={(e) => handleFormChange("parentContact", e.target.value)}
                                    placeholder="Enter parent contact number"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="Date of Birth"
                                    type="date"
                                    value={formData.dateOfBirth}
                                    onChange={(e) => handleFormChange("dateOfBirth", e.target.value)}
                                    InputLabelProps={{ shrink: true }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="Admission Date"
                                    type="date"
                                    value={formData.admissionDate}
                                    onChange={(e) => handleFormChange("admissionDate", e.target.value)}
                                    InputLabelProps={{ shrink: true }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="Address"
                                    value={formData.address}
                                    onChange={(e) => handleFormChange("address", e.target.value)}
                                    placeholder="Enter full address"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <FormControl fullWidth required sx={{ minWidth: 100 }}>
                                    <InputLabel>Status *</InputLabel>
                                    <Select
                                        value={formData.status}
                                        onChange={(e) => handleFormChange("status", e.target.value)}
                                        label="Status *"
                                    >
                                        <MenuItem value="Active">Active</MenuItem>
                                        <MenuItem value="Inactive">Inactive</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => setIsAddModalOpen(false)}>Cancel</Button>
                        <Button onClick={handleAddStudent} variant="contained">
                            Add Student
                        </Button>
                    </DialogActions>
                </Dialog>

                {/* Edit Student Modal */}
                <Dialog open={isEditModalOpen} onClose={() => setIsEditModalOpen(false)} maxWidth="md" fullWidth>
                    <DialogTitle>Edit Student</DialogTitle>
                    <DialogContent>
                        <Grid container spacing={2} sx={{ mt: 1 }}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="Name"
                                    value={formData.name}
                                    onChange={(e) => handleFormChange("name", e.target.value)}
                                    placeholder="Enter student name"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="Roll Number"
                                    value={formData.rollNumber}
                                    onChange={(e) => handleFormChange("rollNumber", e.target.value)}
                                    placeholder="Enter roll number"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <FormControl fullWidth required sx={{ minWidth: 100 }}>
                                    <InputLabel>Class *</InputLabel>
                                    <Select
                                        value={formData.class}
                                        onChange={(e) => handleFormChange("class", e.target.value)}
                                        label="Class *"
                                        error={!formData.class}
                                    >
                                        <MenuItem value="9">Class 9</MenuItem>
                                        <MenuItem value="10">Class 10</MenuItem>
                                        <MenuItem value="11">Class 11</MenuItem>
                                        <MenuItem value="12">Class 12</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <FormControl fullWidth required sx={{ minWidth: 100 }}>
                                    <InputLabel>Section *</InputLabel>
                                    <Select
                                        value={formData.section}
                                        onChange={(e) => handleFormChange("section", e.target.value)}
                                        label="Section *"
                                        error={!formData.section}
                                    >
                                        <MenuItem value="A">Section A</MenuItem>
                                        <MenuItem value="B">Section B</MenuItem>
                                        <MenuItem value="C">Section C</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="Email"
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) => handleFormChange("email", e.target.value)}
                                    placeholder="Enter email address"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="Parent Contact"
                                    value={formData.parentContact}
                                    onChange={(e) => handleFormChange("parentContact", e.target.value)}
                                    placeholder="Enter parent contact number"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="Date of Birth"
                                    type="date"
                                    value={formData.dateOfBirth}
                                    onChange={(e) => handleFormChange("dateOfBirth", e.target.value)}
                                    InputLabelProps={{ shrink: true }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="Admission Date"
                                    type="date"
                                    value={formData.admissionDate}
                                    onChange={(e) => handleFormChange("admissionDate", e.target.value)}
                                    InputLabelProps={{ shrink: true }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="Address"
                                    value={formData.address}
                                    onChange={(e) => handleFormChange("address", e.target.value)}
                                    placeholder="Enter full address"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <FormControl fullWidth required sx={{ minWidth: 100 }}>
                                    <InputLabel>Status *</InputLabel>
                                    <Select
                                        value={formData.status}
                                        onChange={(e) => handleFormChange("status", e.target.value)}
                                        label="Status *"
                                    >
                                        <MenuItem value="Active">Active</MenuItem>
                                        <MenuItem value="Inactive">Inactive</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => setIsEditModalOpen(false)}>Cancel</Button>
                        <Button onClick={handleEditStudent} variant="contained">
                            Update Student
                        </Button>
                    </DialogActions>
                </Dialog>

                {/* View Student Drawer */}
                <Drawer anchor="right" open={isViewDrawerOpen} onClose={() => setIsViewDrawerOpen(false)}>
                    <Box sx={{ width: { xs: 300, sm: 400 }, p: 3 }}>
                        <Typography variant="h6" sx={{ mb: 3 }}>
                            Student Profile
                        </Typography>
                        {selectedStudent && (
                            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={6}>
                                        <Typography variant="body2" color="text.secondary" sx={{ fontWeight: "medium" }}>
                                            Name
                                        </Typography>
                                        <Typography variant="body2" sx={{ fontWeight: "medium" }}>
                                            {selectedStudent.name}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography variant="body2" color="text.secondary" sx={{ fontWeight: "medium" }}>
                                            Roll Number
                                        </Typography>
                                        <Typography variant="body2" sx={{ fontWeight: "medium" }}>
                                            {selectedStudent.rollNumber}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography variant="body2" color="text.secondary" sx={{ fontWeight: "medium" }}>
                                            Class
                                        </Typography>
                                        <Typography variant="body2" sx={{ fontWeight: "medium" }}>
                                            {selectedStudent.class}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography variant="body2" color="text.secondary" sx={{ fontWeight: "medium" }}>
                                            Section
                                        </Typography>
                                        <Typography variant="body2" sx={{ fontWeight: "medium" }}>
                                            {selectedStudent.section}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography variant="body2" color="text.secondary" sx={{ fontWeight: "medium" }}>
                                            Status
                                        </Typography>
                                        <Chip
                                            label={selectedStudent.status}
                                            color={selectedStudent.status === "Active" ? "success" : "default"}
                                            size="small"
                                            variant="outlined"
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography variant="body2" color="text.secondary" sx={{ fontWeight: "medium" }}>
                                            Date of Birth
                                        </Typography>
                                        <Typography variant="body2" sx={{ fontWeight: "medium" }}>
                                            {selectedStudent.dateOfBirth}
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Box>
                                    <Typography variant="body2" color="text.secondary" sx={{ fontWeight: "medium" }}>
                                        Email
                                    </Typography>
                                    <Typography variant="body2" sx={{ fontWeight: "medium" }}>
                                        {selectedStudent.email}
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography variant="body2" color="text.secondary" sx={{ fontWeight: "medium" }}>
                                        Parent Contact
                                    </Typography>
                                    <Typography variant="body2" sx={{ fontWeight: "medium" }}>
                                        {selectedStudent.parentContact}
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography variant="body2" color="text.secondary" sx={{ fontWeight: "medium" }}>
                                        Address
                                    </Typography>
                                    <Typography variant="body2" sx={{ fontWeight: "medium" }}>
                                        {selectedStudent.address}
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography variant="body2" color="text.secondary" sx={{ fontWeight: "medium" }}>
                                        Admission Date
                                    </Typography>
                                    <Typography variant="body2" sx={{ fontWeight: "medium" }}>
                                        {selectedStudent.admissionDate}
                                    </Typography>
                                </Box>
                            </Box>
                        )}
                    </Box>
                </Drawer>

                {/* Delete Confirmation Dialog */}
                <Dialog open={isDeleteDialogOpen} onClose={() => setIsDeleteDialogOpen(false)}>
                    <DialogTitle>Delete Student</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Are you sure you want to delete {studentToDelete?.name}? This action cannot be undone.
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => setIsDeleteDialogOpen(false)}>Cancel</Button>
                        <Button onClick={handleDeleteStudent} color="error" variant="contained">
                            Delete
                        </Button>
                    </DialogActions>
                </Dialog>
            </Container>
        </Box>
    )
}
