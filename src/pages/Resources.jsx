import { BookOpen, Phone, Users, Heart, ArrowRight, FileText, Calendar, Star, Clock } from 'lucide-react'
import './Resources.css'

const Resources = () => {
  const articlesAndGuides = [
    {
      id: 1,
      title: "Coup d'œil sur l'inceste…  un phénomène humain.",
      description: "Sonia Secours Jean",
      link: "https://docs.google.com/presentation/d/1ttWGTON8LIynOtIrbCCnZzKpifMKr8Z2/edit?usp=drive_link&ouid=117019628752951270483&rtpof=true&sd=true", // Remplacez par le lien réel
    }
    // Ajoutez d'autres articles/guides ici
  ]

  const freeEbooks = [
    {
      id: 1,
      title: "Si ton enfant te dit que quelqu’un l’a touché sexuellement, écoute-le ! Non, personne n’a le droit de leur faire ça !",
      author: "CAVAC Centre d’aide aux victimes d’actes criminels",
      pdfUrl: "https://drive.google.com/file/d/1nU9gK1jUU43YdoKvfH5gu6HYcoPKCzXz/view?usp=drive_link"
    },
    {
      id: 2,
      title: "Arrêtez d'être gentil, Fixez des limites et soyez vrai",
      author: "Carla Giacomello",
      pdfUrl: "https://drive.google.com/file/d/1hpmnJUtodP7Vyfii46SP9UOYX5QIoxff/view?usp=drive_link"
    },

    {
      id: 3,
      title: "L'état de stress aigu : Brochure explicative pour les patients et leurs proches",
      author: "Dre Léa Renaud-Cloutier et révisé par plusieurs psychiatres",
      pdfUrl: "https://drive.google.com/file/d/1rqNU_GgKLZOBG2iXs9ZOdLuHBNsHAlJg/view?usp=drive_link"
    },
    {
      id: 4,
      title: "Comprendre et passer au travers de la DÉPENDANCE",
      author: "Wendy Kittlitz, Dr. Russ Rainey, Geremy Keeton, Joann Condie, Catherine Wilson, Focus on the Family, Dr. Gregory Jantz",
      pdfUrl: "https://drive.google.com/file/d/1M7qJAZ5nK5w4e9HonLQS2OLmi4Hs5jHw/view?usp=drive_link"
    },
    {
      id: 5,
      title: "Dépression et guérison (2)",
      author: "Aaron Kayayan",
      pdfUrl: "https://drive.google.com/file/d/1F1ey1ahPsi9bhOrXPuVZIcXkVQj-_943/view?usp=drive_link"
    },
    {
      id: 6,
      title: "Faire face à ses peurs",
      author: "Professeur Paul Farrand, Mike Sheppard",
      pdfUrl: "https://drive.google.com/file/d/1hi_SYWSeC2uvBakpu9rie-IK9CZC5VVD/view?usp=drive_link"
    },
    {
      id: 7,
      title: "VOTRE GUIDE POUR LE JEÛNE ET LA PRIÈRE",
      author: "Bill Bright",
      pdfUrl: "https://drive.google.com/file/d/1U2KiSayP9JeqVNmBAZYqcC7wqIeaoNX9/view?usp=drive_link"
    },
    {
      id: 8,
      title: "L'insomnie / Brochure explicative pour les patients et leurs proches",
      author: "créé par Dre Camille Lévesque et révisé par les Drs Thanh-Lan Ngô, Jean Leblanc et Jean Goulet",
      pdfUrl: "https://drive.google.com/file/d/16sxrmEXmi8UzBK6DXwsrHU0E2GDlC4zg/view?usp=drive_link"
    },
    {
      id: 9,
      title: "Je n'ai plus peur du jugement des autres (Cahier d'Exercice)",
      author: " Chantal Joffrin Le Clerc et Franck Lamagnère",
      pdfUrl: "https://drive.google.com/file/d/1msM7PGTPA_W0d1zLWIybjxySQKNsmVRs/view?usp=drive_link"
    },
    {
      id: 10,
      title: "Je n'ai plus peur du jugement des autres (Cahier d'Exercice)",
      author: " Chantal Joffrin Le Clerc et Franck Lamagnère",
      pdfUrl: "https://drive.google.com/file/d/1msM7PGTPA_W0d1zLWIybjxySQKNsmVRs/view?usp=drive_link"
    },
    {
      id: 10,
      title: "L'auto-compassion : Une des clés de la santé mentale",
      author: "Professionnels de la santé mentale du Centre de santé mentale Royal Ottawa et membres du comité de promotion de la santé mentale du Centre hospitalier pour enfants de l'est de l'Ontario (CHEO), avec l'inspiration de la Dre Kristin Neff, Noah Spector et Eva Schacherl.",
      pdfUrl: "https://drive.google.com/file/d/1oSKbe9a05bcitTdIZ2sw-n-SjnmTROOr/view?usp=drive_link"
    },
    {
      id: 11,
      title: "Méditation et autocompassion",
      author: "présenté par l'Université de Montréal et le Centre intégré universitaire de santé et de services sociaux du Nord-de-l'Île-de-Montréal (CIUSSS du Nord-de-l'Île-de-Montréal)",
      pdfUrl: "https://drive.google.com/file/d/1om8wA50HDwP80kttDlkk29msGhQk87pY/view?usp=drive_link"
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
                      {ebook.author ? `Auteur(s) : ${ebook.author}` : "Auteur inconnu"}
                    </p>
                    {ebook.pdfUrl ? (
                      <a
                        href={ebook.pdfUrl}
                        className="modern-card-action"
                        target="_blank"
                        rel="noopener noreferrer"
                        download
                      >
                        Lire le livre <ArrowRight size={16} />
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