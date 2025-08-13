import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Resources from './pages/Resources'
import About from './pages/About'
import Partner from './pages/Partner'
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="main-content">
                           <Routes>
                   <Route path="/" element={<Home />} />
                   <Route path="/services" element={<Services />} />
                   <Route path="/contact" element={<Contact />} />
                   <Route path="/resources" element={<Resources />} />
                   <Route path="/about" element={<About />} />
                   <Route path="/partner" element={<Partner />} />
                 </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
