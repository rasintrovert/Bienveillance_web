import { BookOpen, Phone, Users, Heart, ArrowRight, FileText, Calendar, Star, Clock } from 'lucide-react'
import './Resources.css'

const Resources = () => {
  const articlesAndGuides = [
    {
      id: 1,
      title: "Gérer le stress au quotidien",
      description: "Des techniques simples et efficaces pour réduire le stress dans votre vie quotidienne.",
      link: "#", // Remplacez par le lien réel
    }
    // Ajoutez d'autres articles/guides ici
  ]

  const freeEbooks = [
    {
      id: 1,
      title: "Bienveillance au quotidien",
      author: "Jean Martin",
      pdfUrl: "/ebooks/bienveillance-au-quotidien.pdf"
    },
    {
      id: 2,
      title: "Guide pratique du bien-être",
      author: "Sophie Bernard",
      pdfUrl: "/ebooks/guide-pratique-bien-etre.pdf"
    }
    // Ajoutez d'autres ebooks ici
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
    alert(`Article "${articlesAndGuides.find(a => a.id === articleId)?.title}" - Cette fonctionnalité sera bientôt disponible.`)
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

          {/* Articles & Guides */}
          <section className="modern-section">
            <h2>Articles &amp; Guides</h2>
            <div className="modern-grid">
              {articlesAndGuides.length > 0 ? (
                articlesAndGuides.map(article => (
                  <div key={article.id} className="modern-card">
                    <div className="modern-card-header">
                      <FileText className="modern-card-icon" />
                    </div>
                    <h3 className="modern-card-title">{article.title || "Titre non disponible"}</h3>
                    <p className="modern-card-desc">
                      {article.description || "Description à venir."}
                    </p>
                    <a
                      href={article.link || "#"}
                      className="modern-card-action"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Lire plus <ArrowRight size={16} />
                    </a>
                  </div>
                ))
              ) : (
                <div className="modern-card modern-card-placeholder">
                  Aucun article ou guide disponible pour le moment.
                </div>
              )}
            </div>
          </section>

          {/* Free eBooks */}
          <section className="modern-section">
            <h2>Livres numériques gratuits</h2>
            <div className="modern-grid">
              {freeEbooks.length > 0 ? (
                freeEbooks.map(ebook => (
                  <div key={ebook.id} className="modern-card">
                    <div className="modern-card-header">
                      <BookOpen className="modern-card-icon" />
                    </div>
                    <h3 className="modern-card-title">{ebook.title || "Titre non disponible"}</h3>
                    <p className="modern-card-desc">
                      {ebook.author ? `Auteur : ${ebook.author}` : "Auteur inconnu"}
                    </p>
                    {ebook.pdfUrl ? (
                      <a
                        href={ebook.pdfUrl}
                        className="modern-card-action"
                        target="_blank"
                        rel="noopener noreferrer"
                        download
                      >
                        Télécharger le PDF
                      </a>
                    ) : (
                      <span className="modern-card-action disabled">
                        PDF non disponible
                      </span>
                    )}
                  </div>
                ))
              ) : (
                <div className="modern-card modern-card-placeholder">
                  Aucun livre numérique disponible pour le moment.
                </div>
              )}
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