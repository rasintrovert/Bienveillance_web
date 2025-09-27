import { Link } from 'react-router-dom'
import {
  Users,
  Heart,
  HandHeart,
  Calendar,
  MapPin,
  Mail,
  Phone,
  ArrowRight,
  Star,
  Award
} from 'lucide-react'
import './Partner.css'

const Partner = () => {
  const volunteerRoles = [
    {
      title: 'Accompagnateur psychosocial',
      description: 'Offrir un soutien direct aux personnes en difficulté',
      icon: Heart,
      requirements: ['Formation en psychologie ou travail social', 'Empathie et écoute active', 'Disponibilité 2h/semaine minimum'],
      commitment: '6 mois minimum'
    },
    {
      title: 'Coordinateur de bénévoles',
      description: 'Organiser et coordonner les activités des bénévoles',
      icon: Users,
      requirements: ['Organisation et communication', 'Maîtrise des outils numériques', 'Disponibilité 8h/semaine'],
      commitment: '6 mois minimum'
    },
    {
      title: 'Intervenant en ligne',
      description: 'Répondre aux demandes d\'aide via notre plateforme',
      icon: HandHeart,
      requirements: ['Maîtrise des outils numériques', ' Communication', 'Maîtrise des outils numériques', 'Disponibilité 2h/semaine'],
      commitment: '3 mois minimum'
    }
  ]

  const partnershipTypes = [
    {
      title: 'Partenariat financier',
      description: 'Soutenez nos programmes par un don ou un mécénat',
      icon: Award,
      benefits: ['Reçu fiscal', 'Visibilité sur nos supports', 'Rapports d\'impact réguliers'],
      contact: 'partenariats@bienveillance.org'
    },
    {
      title: 'Partenariat opérationnel',
      description: 'Collaborons sur des projets spécifiques',
      icon: Star,
      benefits: ['Expertise partagée', 'Réseau élargi', 'Impact communautaire'],
      contact: 'collaboration@bienveillance.org'
    },
    // {
    //   title: 'Partenariat de compétences',
    //   description: 'Partagez vos compétences professionnelles',
    //   icon: Users,
    //   benefits: ['Développement professionnel', 'Sens du service', 'Réseau solidaire'],
    //   contact: 'competences@bienveillance.org'
    // }
  ]

  return (
    <div className="partner-page">
      {/* Hero Section */}
      <section className="partner-hero">
        <div className="container">
          <h1>Devenir Partenaire ou Bénévole</h1>
          <p>
            Rejoignez-nous et devenez acteur du changement. Ensemble, apportons espoir et soutien aux personnes en difficulté.
          </p>
        </div>
      </section>

      {/* Volunteer Section */}
      <section className="volunteer-section">
        <div className="container">
          <h2>Devenir Bénévole</h2>
          <p className="section-intro">
            Nos bénévoles sont au cœur de notre mission. Ils apportent leur temps, leurs compétences et leur bienveillance pour soutenir les personnes en difficulté.
          </p>

          <div className="volunteer-grid">
            {volunteerRoles.map((role, index) => (
              <div key={index} className="volunteer-card">
                <div className="role-header">
                  <role.icon className="role-icon" />
                  <h3>{role.title}</h3>
                  <p>{role.description}</p>
                </div>

                <div className="role-details">
                  <h4>Profil recherché :</h4>
                  <ul>
                    {role.requirements.map((req, reqIndex) => (
                      <li key={reqIndex}>{req}</li>
                    ))}
                  </ul>

                  <div className="commitment">
                    <Calendar size={16} />
                    <span>Engagement : {role.commitment}</span>
                  </div>
                </div>

                <Link to="/contact" className="btn btn-primary">
                  Postuler
                  <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="partnership-section">
        <div className="container">
          <h2>Devenir Partenaire</h2>
          <p className="section-intro">
            Nous collaborons avec des organisations, entreprises et institutions
            pour étendre notre impact et améliorer nos services.
          </p>

          <div className="partnership-grid">
            {partnershipTypes.map((partnership, index) => (
              <div key={index} className="partnership-card">
                <div className="partnership-header">
                  <partnership.icon className="partnership-icon" />
                  <h3>{partnership.title}</h3>
                  <p>{partnership.description}</p>
                </div>

                <div className="partnership-benefits">
                  <h4>Avantages :</h4>
                  <ul>
                    {partnership.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex}>{benefit}</li>
                    ))}
                  </ul>
                </div>

                <div className="partnership-contact">
                  <Mail size={16} />
                  <span>{partnership.contact}</span>
                </div>

                <Link to="/contact" className="btn btn-secondary">
                  Nous contacter
                  <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="partner-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Prêt(e) à contribuer et à inspirer ?</h2>
            <p>
              Que vous souhaitiez devenir bénévole ou partenaire, nous vous accompagnons à chaque étape de votre engagement.
            </p>

            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">
                <Phone size={16} />
                Nous contacter
              </Link>
              <Link to="/about" className="btn btn-outline">
                En savoir plus
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Partner 