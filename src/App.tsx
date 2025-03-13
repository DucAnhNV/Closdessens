import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home"
import HomeDetail from "./pages/home-detail"
import './App.css'
import BookingTable from "./pages/booking.table";
import LeCortil from "./pages/sections/le-cortil";
import Episode from "./pages/sections/episode";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomeDetail />} />
        <Route path="/booking" element={<BookingTable />} />
        <Route path="/le-cortil" element={<LeCortil />} />
        <Route path="/episodes" element={<Episode />} />
      </Routes>
    </Router>
  )
}

export default App
