import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardPage from './Pages/DashboardPage'
import Dashboard from './Pages/Dashboard'
import WelcomePage from './Pages/Welcome page'
import Students from './Pages/Students'
import Attendance from './Pages/Attendance'
import Fees from './Pages/Fees'
import Documents from './Pages/Documents'
import TimeTable from './Pages/TimeTable'
import Assignment from './Pages/Assignment'
import Notice from './Pages/Notice'
import Results from './Pages/Results'
import AcademicCal from './Pages/AcademicCal'
import Settings from './Pages/Settings'


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Dashboard />}>
          <Route index element={<WelcomePage />} />
          <Route path='dashboard' element={<DashboardPage />} />
          <Route path="/students" element={<Students />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/fees" element={<Fees />} />
          <Route path="/assignments" element={<Assignment />} />
          <Route path="/documents" element={<Documents />} />
          <Route path="/time-table" element={<TimeTable />} />
          <Route path="/notice" element={<Notice />} />
          <Route path="/results" element={<Results />} />
          <Route path="/academic-calender" element={<AcademicCal />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
