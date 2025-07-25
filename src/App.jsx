import { Dashboard } from '@mui/icons-material';
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardPage from './Pages/Dashboard'

const App = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </Router>
  )
}

export default App
