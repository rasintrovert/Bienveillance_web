import { Link } from 'react-router-dom'
import { Heart, Phone, Mail, Clock, MapPin, Users, BookOpen, ArrowRight, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <div className="footer-logo">
            <Heart className="footer-logo-icon" />
            <span className="footer-logo-text">Bienveillance</span>
          </div>
          <p className="footer-description">
            Un accompagnement psychosocial professionnel et bienveillant, pour vous soutenir pas à pas sur le chemin du bien-être.
          </p>
          <div className="social-links">
            <a
              href="https://www.facebook.com/Psybienveillance/"
              className="social-link"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook size={20} />
            </a>
            {/* <a href="#" className="social-link" aria-label="Twitter">
              <Twitter size={20} />
            </a>
            <a href="#" className="social-link" aria-label="Instagram">
              <Instagram size={20} />
            </a> */}
            <a
              href="https://www.linkedin.com/groups/13317068/"
              className="social-link"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Services</h3>
          <ul className="footer-links">
            <li><Link to="/services">Accompagnement psychosocial</Link></li>
            <li><Link to="/services">Soutien familial</Link></li>
            <li><Link to="/services">Groupes de soutien</Link></li>
            <li><Link to="/services">Ateliers de sensibilisation</Link></li>
            <li><Link to="/services">Renforcement professionnel</Link></li>
            <li><Link to="/services">Référencement</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Ressources</h3>
          <ul className="footer-links">
            <li><Link to="/resources">Rapport d’activités Bienveillance</Link></li>
            <li><Link to="/resources">Livre électronique en libre accès</Link></li>
            <li><Link to="/resources">Articles et guides</Link></li>
            <li><Link to="/about">Publication</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Contact</h3>
          <div className="contact-info">
            <div className="contact-item">
              <Phone className="contact-icon" />
              <div className="contact-details">
                <span className="contact-label">Urgences : </span>
                <span className="contact-value">Contacter  le 911</span>
              </div>
            </div>
            <div className="contact-item">
              <Phone className="contact-icon" />
              <div className="contact-details">
                <span className="contact-label">Tel : </span>
                <span className="contact-value">+1 778-557-6458</span>
              </div>
            </div>
            <div className="contact-item">
              <Mail className="contact-icon" />
              <div className="contact-details">
                <span className="contact-label">Courriel : </span>
                <span className="contact-value"><a href="mailto:administration@groupebienveillance.org">administration@groupebienveillance.org</a></span>
              </div>
            </div>
            <div className="contact-item">
              <Clock className="contact-icon" />
              <div className="contact-details">
                <span className="contact-label">Horaires</span>
                <span className="contact-value">Lun-Ven : 9h-18h</span>
              </div>
            </div>
          </div>
        </div>
      </div>



      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>&copy; 2024 Bienveillance. Tous droits réservés.</p>
          <div className="footer-legal">
            <Link to="/privacy">Confidentialité</Link>
            <Link to="/terms">Conditions d'utilisation</Link>
            <Link to="/cookies">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer