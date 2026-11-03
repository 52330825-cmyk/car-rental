import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import CarDetails from './pages/CarDetails'

function App() {
  return (
    
    <div className="flex min-h-screen flex-col bg-slate-50">
      <Navbar />

      
      <main className="flex-1 pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cars/:id" element={<CarDetails />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App