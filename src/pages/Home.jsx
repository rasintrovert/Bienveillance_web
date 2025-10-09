import { Link } from 'react-router-dom'
import { Heart, Users, Shield, Phone, ArrowRight, Target, Eye } from 'lucide-react'
import './Home.css'
import SeanceTherapie from '../assets/SeanceTherapie.jpg'


const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              Accompagnement psychosocial humain <span className="highlight">bienveillant</span>
            </h1>
            <p className="hero-subtitle">
              Parce que personne ne devrait affronter ses épreuves seules,
              notre équipe de professionnels est à vos côtés pour vous écouter,
              vous soutenir et vous aider à traverser les moments difficiles.
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
            <img 
              src={SeanceTherapie} 
              alt="Accompagnement et soutien - Mains qui se tiennent" 
              className="hero-img"
            />
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
              <h3>Accompagnement humain et personnalisé</h3>
              <p>Bienveillance met l’humain au cœur de ses services, en offrant un soutien personnalisé pour le développement personnel, social et professionnel de chaque individu.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <Shield />
              </div>
              <h3>Expertise professionnelle et engagement</h3>
              <p>L’équipe de Bienveillance est composée de professionnels qualifiés qui combinent savoir-faire et empathie, garantissant un accompagnement fiable et efficace dans des situations variées.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <Users />
              </div>
              <h3>Approche préventive et durable</h3>
              <p>Bienveillance va au-delà des besoins immédiats, en aidant la communauté à renforcer ses compétences, son autonomie, sa résilience et son bien-être durable.</p>
            </div>
          </div>
        </div>
      </section>


      {/* About Preview (remplace Services) */}
      <section className="about-preview">
        <div className="container">
          <h2 className="section-title">À propos</h2>
          <div className="mission-grid">
            <div className="mission-card">
              <Target className="mission-icon" />
              <h3>Qui sommes-nous</h3>
              <p>
                Le groupe « Bienveillance » est une initiative communautaire qui offre gratuitement un accompagnement psychosocial aux personnes confrontées à des difficultés telles que la dépression ou d’autres formes de détresse émotionnelle. Notre travail s’appuie sur des valeurs chrétiennes de compassion, d’entraide et de respect, et vise à apporter réconfort, espoir et mieux-être grâce à une approche combinant la psychologie et l’accompagnement humain. Notre équipe s’engage à offrir un espace sûr et confidentiel où chacun peut s’exprimer librement et recevoir un appui bienveillant sur le plan émotionnel et relationnel.
              </p>
            </div>
            <div className="mission-card">
              <Eye className="mission-icon" />
              <h3>Notre Vision</h3>
              <p>
                Être un acteur de référence dans le soutien psychologique gratuit tout en créant un espace d’écoute et d’accompagnement fondé sur la compassion, le respect et la solidarité. Nous aspirons à redonner espoir et confiance aux personnes traversant des difficultés émotionnelles ou mentales, en favorisant une approche humaine, bienveillante et professionnelle.
              </p>
            </div>
            <div className="mission-card">
              <Target className="mission-icon" />
              <h3>Notre Mission</h3>
              <p>
                Garantir un accompagnement psychosocial gratuit et accessible à toute personne traversant des moments de détresse émotionnelle. Nous nous engageons à fournir un soutien professionnel, empreint de bienveillance et d’humanité, afin de favoriser l’équilibre, la résilience et le mieux-être, tant au niveau individuel que collectif. Notre ambition est de contribuer à l’émergence d’une communauté solidaire et épanouie, évoluant dans un environnement rassurant où chacun peut trouver réconfort et espoir.
              </p>
            </div>
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
