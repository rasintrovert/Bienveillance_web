import { Link } from 'react-router-dom'
import { Heart, Users, Shield, Phone, ArrowRight, CheckCircle } from 'lucide-react'
import './Services.css'

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Accompagnement psychosocial personnalisé",
      description: "Un soutien personnalisé pour traverser les difficultés de la vie quotidienne.",
      icon: Heart,
      features: [
        "Espace sûr et confidentiel pour exprimer ses difficultés.",
        "Soutien adapté aux besoins individuels.",
        "Appui à la gestion des défis psychosociaux."
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
        "Coaching parental"
      ]
    },
    {
      id: 3,
      title: "Groupes de soutien thématiques",
      description: "Partagez vos expériences dans un cadre sécurisé et bienveillant.",
      icon: Shield,
      features: [
        "Rencontres collectives",
        "Animation de groupes de parole",
        "Partage d’expériences",
        "Soutien sur des thématiques psychosociales."
      ]
    },
    {
      id: 4,
      title: "Ateliers de sensibilisation et prévention",
      description: "Partagez vos expériences dans un cadre sécurisé et bienveillant.",
      icon: Shield,
      features: [
        "Activités éducatives sur la santé mentale.",
        "Session de formation et de sensibilisation psychosociale.",
        "Activités récréatives et de bien-être psychosociales.",
      ]
    },
    {
      id: 5,
      title: "Renforcement professionnel et orientation vers l’emploi",
      description: "Partagez vos expériences dans un cadre sécurisé et bienveillant.",
      icon: Shield,
      features: [
        "Soutien au développement de compétences professionnelles",
        "Préparation de CV",
        "Recherche d’emploi et l’accès à des formations adaptées."
      ]
    },
    {
      id: 6,
      title: "Orientation vers d’autres ressources et services",
      description: "Partagez vos expériences dans un cadre sécurisé et bienveillant.",
      icon: Shield,
      features: [
        "Accompagnement vers des services complémentaires.",
        "Répondre aux questions spécifiques des bénéficiaires."
      ]
    }
  ]

  return (
    <div className="services-page">
      <div className="services-hero">
        <div className="container">
          <h1>Nos services de soutien et d’accompagnement
          </h1>
          <p>
            À Bienveillance, nous mettons à votre disposition des services d’accompagnement psychosocial personnalisés, adaptés à vos réalités et à vos besoins.
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