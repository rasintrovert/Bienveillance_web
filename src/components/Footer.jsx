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
            Accompagnement psychosocial professionnel et bienveillant pour tous. 
            Nous sommes là pour vous accompagner dans votre parcours de bien-être.
          </p>
          <div className="social-links">
            <a href="#" className="social-link" aria-label="Facebook">
              <Facebook size={20} />
            </a>
            <a href="#" className="social-link" aria-label="Twitter">
              <Twitter size={20} />
            </a>
            <a href="#" className="social-link" aria-label="Instagram">
              <Instagram size={20} />
            </a>
            <a href="#" className="social-link" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Services</h3>
          <ul className="footer-links">
            <li><Link to="/services">Accompagnement individuel</Link></li>
            <li><Link to="/services">Soutien familial</Link></li>
            <li><Link to="/services">Groupes de parole</Link></li>
            <li><Link to="/services">Médiation familiale</Link></li>
            <li><Link to="/partner">Devenir partenaire</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Ressources</h3>
          <ul className="footer-links">
            <li><Link to="/resources">Articles et guides</Link></li>
            <li><Link to="/resources">Bibliothèque</Link></li>
            <li><Link to="/resources">Groupes de soutien</Link></li>
            <li><Link to="/resources">Guides pratiques</Link></li>
            <li><Link to="/about">Notre équipe</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Contact</h3>
          <div className="contact-info">
            <div className="contact-item">
              <Phone className="contact-icon" />
              <div className="contact-details">
                <span className="contact-label">Urgences</span>
                <span className="contact-value">24h/24</span>
              </div>
            </div>
            <div className="contact-item">
              <Mail className="contact-icon" />
              <div className="contact-details">
                <span className="contact-label">Email</span>
                <span className="contact-value">contact@bienveillance.org</span>
              </div>
            </div>
            <div className="contact-item">
              <Clock className="contact-icon" />
              <div className="contact-details">
                <span className="contact-label">Horaires</span>
                <span className="contact-value">Lun-Ven : 9h-18h</span>
              </div>
            </div>
            <div className="contact-item">
              <MapPin className="contact-icon" />
              <div className="contact-details">
                <span className="contact-label">Adresse</span>
                <span className="contact-value">123 Rue de la Bienveillance, 75000 Paris</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-newsletter">
        <div className="newsletter-content">
          <div className="newsletter-text">
            <h4>Restez informé</h4>
            <p>Recevez nos conseils et actualités pour votre bien-être</p>
          </div>
          <div className="newsletter-form">
            <input 
              type="email" 
              placeholder="Votre email" 
              className="newsletter-input"
            />
            <button className="newsletter-btn">
              S'abonner
              <ArrowRight size={16} />
            </button>
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