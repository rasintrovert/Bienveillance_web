import { Link } from 'react-router-dom'
import { Heart, Users, Shield, Phone, ArrowRight, CheckCircle } from 'lucide-react'
import './Services.css'

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Accompagnement individuel",
      description: "Un soutien personnalisé pour traverser les difficultés de la vie quotidienne.",
      icon: Heart,
      features: [
        "Gestion du stress et de l'anxiété",
        "Soutien dans les moments difficiles",
        "Développement de la résilience"
      ]
    },
    {
      id: 2,
      title: "Soutien familial",
      description: "Accompagnement pour améliorer les relations et la communication familiale.",
      icon: Users,
      features: [
        "Médiation familiale",
        "Gestion des conflits",
        "Soutien parental"
      ]
    },
    {
      id: 3,
      title: "Groupes de parole",
      description: "Partagez vos expériences dans un cadre sécurisé et bienveillant.",
      icon: Shield,
      features: [
        "Soutien par les pairs",
        "Échanges constructifs",
        "Développement de liens sociaux"
      ]
    }
  ]

  return (
    <div className="services-page">
      <div className="services-hero">
        <div className="container">
          <h1>Nos Services d'Accompagnement</h1>
          <p>
            Nous proposons une gamme complète de services d'accompagnement psychosocial 
            adaptés à vos besoins spécifiques.
          </p>
        </div>
      </div>

      <div className="services-content">
        <div className="container">
          <div className="services-grid">
            {services.map((service) => (
              <div key={service.id} className="service-card-detailed">
                <div className="service-header">
                  <div className="service-icon">
                    <service.icon />
                  </div>
                  <h2>{service.title}</h2>
                  <p>{service.description}</p>
                </div>
                
                <div className="service-features">
                  <ul>
                    {service.features.map((feature, index) => (
                      <li key={index}>
                        <CheckCircle size={16} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="services-cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Prêt à commencer ?</h2>
            <p>Prenez contact avec nous pour discuter de vos besoins.</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">
                <Phone size={20} />
                Prendre rendez-vous
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services 