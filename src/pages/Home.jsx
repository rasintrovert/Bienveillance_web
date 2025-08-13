import { Link } from 'react-router-dom'
import { Heart, Users, Shield, Phone, ArrowRight, CheckCircle } from 'lucide-react'
import './Home.css'

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              Accompagnement psychosocial <span className="highlight">bienveillant</span>
            </h1>
            <p className="hero-subtitle">
              Vous n'êtes pas seul. Notre équipe de professionnels est là pour vous écouter, 
              vous soutenir et vous accompagner dans vos difficultés.
            </p>
            <div className="hero-buttons">
              <Link to="/contact" className="btn btn-primary">
                <Phone size={20} />
                Nous contacter
              </Link>
              <Link to="/services" className="btn btn-secondary">
                Découvrir nos services
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-illustration">
              <Heart className="hero-heart" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2 className="section-title">Pourquoi nous choisir ?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <Heart />
              </div>
              <h3>Approche bienveillante</h3>
              <p>Un accompagnement chaleureux et sans jugement, centré sur vos besoins.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <Shield />
              </div>
              <h3>Confidentialité garantie</h3>
              <p>Votre vie privée est protégée. Tous nos échanges restent strictement confidentiels.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <Users />
              </div>
              <h3>Équipe professionnelle</h3>
              <p>Des intervenants qualifiés et expérimentés dans l'accompagnement psychosocial.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="services-preview">
        <div className="container">
          <h2 className="section-title">Nos services d'accompagnement</h2>
          <div className="services-grid">
            <div className="service-card">
              <h3>Accompagnement individuel</h3>
              <p>Soutien personnalisé pour traverser les difficultés de la vie quotidienne.</p>
              <ul>
                <li><CheckCircle size={16} /> Gestion du stress et de l'anxiété</li>
                <li><CheckCircle size={16} /> Soutien dans les moments difficiles</li>
                <li><CheckCircle size={16} /> Développement de la résilience</li>
              </ul>
            </div>
            <div className="service-card">
              <h3>Soutien familial</h3>
              <p>Accompagnement pour améliorer les relations et la communication familiale.</p>
              <ul>
                <li><CheckCircle size={16} /> Médiation familiale</li>
                <li><CheckCircle size={16} /> Gestion des conflits</li>
                <li><CheckCircle size={16} /> Soutien parental</li>
              </ul>
            </div>
            <div className="service-card">
              <h3>Groupes de parole</h3>
              <p>Partagez vos expériences dans un cadre sécurisé et bienveillant.</p>
              <ul>
                <li><CheckCircle size={16} /> Soutien par les pairs</li>
                <li><CheckCircle size={16} /> Échanges constructifs</li>
                <li><CheckCircle size={16} /> Développement de liens sociaux</li>
              </ul>
            </div>
          </div>
          <div className="services-cta">
            <Link to="/services" className="btn btn-primary">
              Voir tous nos services
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Besoin d'aide ?</h2>
            <p>N'hésitez pas à nous contacter. Notre équipe est disponible pour vous écouter et vous accompagner.</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">
                <Phone size={20} />
                Contactez-nous
              </Link>
              <Link to="/resources" className="btn btn-outline">
                Ressources utiles
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home 