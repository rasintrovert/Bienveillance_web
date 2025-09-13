import { BookOpen, Phone, Users, Heart, ArrowRight, FileText, Calendar, Star, Clock } from 'lucide-react'
import './Resources.css'

const Resources = () => {
  const articles = [
    {
      id: 1,
      title: "Gérer le stress au quotidien",
      category: "Bien-être",
      description: "Des techniques simples et efficaces pour réduire le stress dans votre vie quotidienne.",
      readTime: "5 min",
      icon: Heart,
      published: "15 janvier 2024",
      author: "Dr. Marie Dupont"
    },
    {
      id: 2,
      title: "Améliorer la communication familiale",
      category: "Famille",
      description: "Conseils pratiques pour une meilleure communication au sein de votre famille.",
      readTime: "8 min",
      icon: Users,
      published: "12 janvier 2024",
      author: "Sophie Bernard"
    },
    {
      id: 3,
      title: "Reconnaître les signes de détresse",
      category: "Santé mentale",
      description: "Apprendre à identifier les signaux d'alarme chez soi et chez les autres.",
      readTime: "6 min",
      icon: Heart,
      published: "10 janvier 2024",
      author: "Jean Martin"
    }
  ]

  const emergencyContacts = [
    {
      name: "Urgence 911",
      phone: "911",
      description: "Pour toute situation mettant votre sécurité ou votre vie en danger immédiat.",
      available: "24h/24"
    },
    {
      name: "Info-Social 811 (option 2)",
      phone: "811",
      description: "Pour un soutien psychosocial gratuit et immédiat.",
      available: "24h/24"
    },
    {
      name: "Centre de prévention du suicide – 1-866-APPELLE (1-866-277-3553)",
      phone: "1-866-277-3553",
      description: "Prévention du suicide",
      available: "9h-23h"
    }
  ]

  const handleArticleClick = (articleId) => {
    // Ici vous pourriez rediriger vers l'article complet ou ouvrir une modal
    console.log(`Ouverture de l'article ${articleId}`)
    alert(`Article "${articles.find(a => a.id === articleId)?.title}" - Cette fonctionnalité sera bientôt disponible.`)
  }

  const handleResourceClick = (resourceType) => {
    console.log(`Accès à la ressource: ${resourceType}`)
    alert(`${resourceType} - Cette section sera bientôt disponible.`)
  }

  return (
    <div className="resources-page">
      <div className="resources-hero">
        <div className="container">
          <h1>Ressources et guides</h1>
          <p>
            Explorez nos articles, guides pratiques et ressources utiles pour soutenir votre bien-être psychosocial.
          </p>
        </div>
      </div>

      <div className="resources-content">
        <div className="container">
          {/* Articles section */}
          <section className="articles-section">
            <h2>Articles et guides</h2>
            <p className="section-intro">
              Nos articles rédigés par des professionnels pour vous accompagner dans votre bien-être.
            </p>
            <div className="articles-grid">
              {articles.map((article) => (
                <div key={article.id} className="article-card">
                  {/* Icône et Catégorie */}
                  <div className="article-header">
                    <div className="article-icon">
                      <article.icon />
                    </div>
                    <span className="article-category">{article.category}</span>
                  </div>
                  
                  {/* Titre de l'article */}
                  <h3 className="article-title">{article.title}</h3>
                  
                  {/* Description courte */}
                  <p className="article-description">{article.description}</p>
                  
                  {/* Métadonnées */}
                  <div className="article-metadata">
                    <div className="metadata-item">
                      <Clock size={16} />
                      <span>{article.readTime} de lecture</span>
                    </div>
                    <div className="metadata-item">
                      <Calendar size={16} />
                      <span>{article.published}</span>
                    </div>
                    <div className="metadata-item">
                      <Users size={16} />
                      <span>{article.author}</span>
                    </div>
                  </div>
                  
                  {/* Lien "Lire l'article" */}
                  <button 
                    className="article-read-more" 
                    onClick={() => handleArticleClick(article.id)}
                  >
                    Lire l'article
                    <ArrowRight size={16} />
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* Emergency contacts section */}
          <section className="emergency-section">
            <h2>Contacts d'urgence</h2>
            <p className="emergency-intro">
              En cas d’urgence ou de détresse, contactez ces services disponibles en tout temps.
            </p>
            <div className="emergency-grid">
              {emergencyContacts.map((contact, index) => (
                <div key={index} className="emergency-card">
                  <div className="emergency-icon">
                    <Phone />
                  </div>
                  <div className="emergency-content">
                    <h3>{contact.name}</h3>
                    <p>{contact.description}</p>
                    <div className="contact-details">
                      <a href={`tel:${contact.phone}`} className="emergency-phone">
                        {contact.phone}
                      </a>
                      <span className="availability">
                        <Clock size={14} />
                        {contact.available}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Additional resources */}
          {/* <section className="additional-resources">
            <h2>Ressources supplémentaires</h2>
            <p className="section-intro">
              Explorez nos autres ressources pour enrichir votre parcours de bien-être.
            </p>
            <div className="resources-grid">
              <div className="resource-card">
                <div className="resource-header">
                  <BookOpen className="resource-icon" />
                  <span className="resource-category">Bibliothèque</span>
                </div>
                <h3 className="resource-title">Bibliothèque de ressources</h3>
                <p className="resource-description">Livres, podcasts et vidéos recommandés pour votre bien-être.</p>
                <button 
                  className="resource-action-btn" 
                  onClick={() => handleResourceClick("Bibliothèque de ressources")}
                >
                  Découvrir
                  <ArrowRight size={16} />
                </button>
              </div>
              
              <div className="resource-card">
                <div className="resource-header">
                  <Users className="resource-icon" />
                  <span className="resource-category">Communauté</span>
                </div>
                <h3 className="resource-title">Groupes de soutien</h3>
                <p className="resource-description">Rejoignez nos groupes de parole et d'entraide en ligne.</p>
                <button 
                  className="resource-action-btn" 
                  onClick={() => handleResourceClick("Groupes de soutien")}
                >
                  Participer
                  <ArrowRight size={16} />
                </button>
              </div>
              
              <div className="resource-card">
                <div className="resource-header">
                  <FileText className="resource-icon" />
                  <span className="resource-category">Pratique</span>
                </div>
                <h3 className="resource-title">Guides pratiques</h3>
                <p className="resource-description">Téléchargez nos fiches pratiques et exercices de bien-être.</p>
                <button 
                  className="resource-action-btn" 
                  onClick={() => handleResourceClick("Guides pratiques")}
                >
                  Télécharger
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </section> */}
        </div>
      </div>
    </div>
  )
}

export default Resources 