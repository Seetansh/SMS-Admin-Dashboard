import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardPage from './Pages/DashboardPage'
import Dashboard from './Pages/Dashboard'
import WelcomePage from './Pages/Welcome page'
import Classes from './Pages/Classes'
import Students from './Pages/Students'
import Teachers from './Pages/Teachers'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Dashboard />}>
          <Route index element={<WelcomePage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/students" element={<Students />} />
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/classes" element={<Classes />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
