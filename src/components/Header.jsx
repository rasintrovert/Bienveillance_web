import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Heart } from 'lucide-react'
import './Header.css'
import Logo from '../assets/Bienveillance_logo.png'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { path: '/', label: 'Accueil' },
    { path: '/services', label: 'Nos Services' },
    { path: '/resources', label: 'Ressources' },
    // { path: '/about', label: 'À Propos' },
    { path: '/partner', label: 'Impliquez-vous' },
    { path: '/contact', label: 'Contact' }
  ]

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <img src={Logo} alt="Logo" height="60 px" />
          <span className="logo-text">Bienveillance</span>
        </Link>

        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item.path} className="nav-item">
                <Link
                  to={item.path}
                  className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button className="mobile-menu-btn" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  )
}

export default Header 