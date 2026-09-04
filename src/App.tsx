import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Testimonies from './pages/Testimonies'
import Books from './pages/Books'
import PrayerRequest from './pages/PrayerRequest'
import SubmitTestimony from './pages/SubmitTestimony'
import Contact from './pages/Contact'

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/testimonies" element={<Testimonies />} />
          <Route path="/books" element={<Books />} />
          <Route path="/submit-testimony" element={<SubmitTestimony />} />
          <Route path="/prayer-request" element={<PrayerRequest />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}