import { Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import About from './pages/About'
import VehicleSourcing from './pages/VehicleSourcing'
import AutomotiveExperiences from './pages/AutomotiveExperiences'
import Contact from './pages/Contact'

function App() {
  return (
    <AnimatePresence mode="wait">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vehicle-sourcing" element={<VehicleSourcing />} />
          <Route path="automotive-experiences" element={<AutomotiveExperiences />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </AnimatePresence>
  )
}

export default App
