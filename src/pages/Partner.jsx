import { useState } from 'react'
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
import PartnerForm from './PartnerForm'

const Partner = () => {
  const [showForm, setShowForm] = useState(false)
  const [formType, setFormType] = useState('volunteer')

  const openForm = (type) => {
    setFormType(type)
    setShowForm(true)
  }

  const closeForm = () => {
    setShowForm(false)
  }
  const volunteerRoles = [
    {
      title: 'Écoute et soutien psychosocial',
      description: 'Intervenant psychosocial',
      icon: Heart,
      requirements: ['Formation en psychologie ou travail social', 'Empathie et écoute active', 'Disponibilité 2h/semaine minimum'],
      commitment: '6 mois minimum'
    },
    {
      title: 'Soutien administratif et organisationnel',
      description: 'Agent administratif',
      icon: Users,
      requirements: ['Organisation et communication', 'Maîtrise des outils numériques', 'Disponibilité 3h/semaine'],
      commitment: '6 mois minimum'
    },
    {
      title: 'Animation et accompagnement d\'atelier',
      description: 'Animateur',
      icon: HandHeart,
      requirements: ['Maîtrise des outils numériques', ' Communication', 'Disponibilité 2h/semaine'],
      commitment: '3 mois minimum'
    }
  ]

  const partnershipTypes = [
    {
      title: 'Partenariat financier',
      description: 'Contribuez à nos programmes en faisant un don ou en devenant mécène',
      icon: Award,
      benefits: ['Un avantage fiscal : recevez un reçu officiel pour vos contributions.', 'Une visibilité valorisante : votre engagement mis en avant sur nos supports (site web, réseaux sociaux, événements).', 'Une transparence totale : des rapports d’impact réguliers qui démontrent concrètement l’effet de votre soutien dans la communauté.'],
      contact: 'administration@groupebienveillance.org'
    },
    {
      title: 'Partenariat opérationnel et de compétence',
      description: 'Apportez vos compétences et participez à la réalisation de projets concrets et porteurs de sens.',
      icon: Star,
      benefits: ['Partage d’expertise : mettez vos compétences au service de projets concrets.', 'Réseau solidaire : collaborez et échangez avec des professionnels engagés.', 'Impact communautaire : contribuez à des initiatives qui font une réelle différence dans la communauté.'],
      contact: 'administration@groupebienveillance.org'
    },
    // {
    //   title: 'Partenariat de compétences',
    //   description: 'Partagez vos compétences professionnelles',
    //   icon: Users,
    //   benefits: ['Développement professionnel', 'Sens du service', 'Réseau solidaire'],
    //   contact:'administration@groupebienveillance.org'
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

                <button onClick={() => openForm('volunteer')} className="btn btn-primary">
                  Postuler
                  <ArrowRight size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="partnership-section">
        <div className="container">
          <h2>Collaboration et Partenariats</h2>
          <p className="section-intro">
            Grâce à nos partenariats avec des organisations, des entreprises et des institutions, nous élargissons notre action et optimisons nos services.
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

                <button onClick={() => openForm('partner')} className="btn btn-secondary">
                  Nous contacter
                  <ArrowRight size={16} />
                </button>
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

      {/* Form Modal */}
      {showForm && (
        <PartnerForm formType={formType} onClose={closeForm} />
      )}
    </div>
  )
}

export default Partner 