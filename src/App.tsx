import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import UnderDevelopment from './pages/UnderDevelopment'
import Testimonies from './pages/Testimonies'

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<UnderDevelopment title="Services & Programs" />} />
          <Route path="/testimonies" element={<Testimonies />} />
          <Route path="/books" element={<UnderDevelopment title="Books" />} />
          <Route path="/submit-testimony" element={<UnderDevelopment title="Submit Testimony" />} />
          <Route path="/prayer-request" element={<UnderDevelopment title="Prayer Point" />} />
          <Route path="/contact" element={<UnderDevelopment title="Contact Us" />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}