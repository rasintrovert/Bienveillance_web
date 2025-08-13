import { Heart, Users, Shield, Award, Target, Eye } from 'lucide-react'
import './About.css'

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Bienveillance",
      description: "Nous accueillons chaque personne avec chaleur et sans jugement."
    },
    {
      icon: Shield,
      title: "Confidentialité",
      description: "Votre vie privée est sacrée. Tous nos échanges restent strictement confidentiels."
    },
    {
      icon: Users,
      title: "Accompagnement",
      description: "Nous vous soutenons dans votre parcours vers le mieux-être."
    }
  ]

  const team = [
    {
      name: "Marie Dupont",
      role: "Psychologue clinicienne",
      description: "Spécialisée dans l'accompagnement des personnes en difficulté psychosociale."
    },
    {
      name: "Jean Martin",
      role: "Travailleur social",
      description: "Expert en médiation familiale et soutien aux familles."
    },
    {
      name: "Sophie Bernard",
      role: "Intervenante psychosociale",
      description: "Formée aux techniques d'écoute active et de soutien de crise."
    }
  ]

  return (
    <div className="about-page">
      <div className="about-hero">
        <div className="container">
          <h1>À propos de Bienveillance</h1>
          <p>
            Nous sommes une organisation dédiée à l'accompagnement psychosocial 
            de toutes les personnes en difficulté, dans un cadre bienveillant et professionnel.
          </p>
        </div>
      </div>

      <div className="about-content">
        <div className="container">
          {/* Mission et vision */}
          <section className="mission-section">
            <div className="mission-grid">
              <div className="mission-card">
                <Target className="mission-icon" />
                <h2>Notre Mission</h2>
                <p>
                  Rendre l'accompagnement psychosocial accessible à tous, 
                  en offrant un soutien professionnel, bienveillant et confidentiel 
                  aux personnes en difficulté.
                </p>
              </div>
              <div className="mission-card">
                <Eye className="mission-icon" />
                <h2>Notre Vision</h2>
                <p>
                  Un monde où chaque personne a accès au soutien dont elle a besoin 
                  pour traverser les difficultés de la vie avec dignité et espoir.
                </p>
              </div>
            </div>
          </section>

          {/* Valeurs */}
          <section className="values-section">
            <h2>Nos Valeurs</h2>
            <div className="values-grid">
              {values.map((value, index) => (
                <div key={index} className="value-card">
                  <div className="value-icon">
                    <value.icon />
                  </div>
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Équipe */}
          <section className="team-section">
            <h2>Notre Équipe</h2>
            <p className="team-intro">
              Une équipe de professionnels qualifiés et expérimentés, 
              dédiés à votre bien-être et à votre accompagnement.
            </p>
            <div className="team-grid">
              {team.map((member, index) => (
                <div key={index} className="team-card">
                  <div className="member-avatar">
                    <Users />
                  </div>
                  <h3>{member.name}</h3>
                  <span className="member-role">{member.role}</span>
                  <p>{member.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Chiffres clés */}
          <section className="stats-section">
            <h2>Nos Chiffres</h2>
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-number">500+</div>
                <div className="stat-label">Personnes accompagnées</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">24h/24</div>
                <div className="stat-label">Disponibilité d'urgence</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">95%</div>
                <div className="stat-label">Satisfaction client</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">5 ans</div>
                <div className="stat-label">D'expérience</div>
              </div>
            </div>
          </section>

          {/* Engagement */}
          <section className="commitment-section">
            <div className="commitment-content">
              <Award className="commitment-icon" />
              <h2>Notre Engagement</h2>
              <p>
                Nous nous engageons à maintenir les plus hauts standards de qualité 
                dans notre accompagnement, en respectant l'éthique professionnelle 
                et en nous formant continuellement aux meilleures pratiques.
              </p>
              <ul>
                <li>Formation continue de notre équipe</li>
                <li>Supervision régulière de nos pratiques</li>
                <li>Respect des codes de déontologie</li>
                <li>Évaluation continue de nos services</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default About 