// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home"
import HomeDetail from "./pages/home-detail"
import './App.css'
import BookingTable from "./pages/booking.table";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomeDetail />} />
        <Route path="/booking" element={<BookingTable />} />
      </Routes>
    </Router>
  )
}

export default App
