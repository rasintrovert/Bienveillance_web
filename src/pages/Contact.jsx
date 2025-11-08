import { useState } from 'react'
import { Phone, Mail, Clock, MapPin, Send, Heart } from 'lucide-react'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    age: '',
    sex: '', // Ajout du champ sexe
    urgency: 'normal'
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    setTimeout(() => {
      alert('Votre message a été envoyé. Nous vous répondrons dans les plus brefs délais.')
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        age: '',
        sex: '', // Réinitialisation du champ sexe
        urgency: 'normal'
      })
      setIsSubmitting(false)
    }, 2000)
  }

  return (
    <div className="contact-page">
      <div className="contact-hero">
        <div className="container">
          <h1>Contactez-nous</h1>
          <p>
            Nous sommes là pour vous écouter. N'hésitez pas à nous contacter
            pour toute question ou pour prendre rendez-vous.
          </p>
        </div>
      </div>

      <div className="contact-content">
        <div className="container">
          <div className="contact-grid">
            {/* Informations de contact */}
            <div className="contact-info-contact">
              <h2>Nos coordonnées</h2>
              <p className="contact-info-intro">
                Choisissez le canal qui vous convient le mieux. Notre équipe veille à vous répondre rapidement et à vous accompagner
                avec bienveillance tout au long de votre démarche.
              </p>

              <div className="contact-info-highlight">
                <div className="highlight-icon">
                  <Heart size={20} />
                </div>
                <div className="highlight-content">
                  <span>Réponse garantie sous 24 h ouvrées</span>
                  <p>Pour les situations urgentes, téléphonez immédiatement au 911.</p>
                </div>
              </div>

              <div className="contact-info-grid">
                <div className="contact-card urgency">
                  <div className="contact-card-header">
                    <div className="contact-card-icon">
                      <Phone />
                    </div>
                    <div>
                      <h3>Urgence psychosociale</h3>
                      <p>Disponible 24h/24</p>
                    </div>
                  </div>
                  <a className="contact-card-value" href="tel:911">911</a>
                  <p className="contact-card-meta">
                    En cas de danger immédiat ou de crise grave, contactez le 911 sans attendre.
                  </p>
                </div>

                <div className="contact-card phone">
                  <div className="contact-card-header">
                    <div className="contact-card-icon">
                      <Phone />
                    </div>
                    <div>
                      <h3>Téléphone principal</h3>
                      <p>Accueil téléphonique</p>
                    </div>
                  </div>
                  <a className="contact-card-value" href="tel:+17785576458">+1 778-557-6458</a>
                  <p className="contact-card-meta">
                    Lundi au vendredi • 9h00 - 18h00
                  </p>
                </div>

                <div className="contact-card email">
                  <div className="contact-card-header">
                    <div className="contact-card-icon">
                      <Mail />
                    </div>
                    <div>
                      <h3>Courriel</h3>
                      <p>Réponse sous 24h ouvrées</p>
                    </div>
                  </div>
                  <a
                    className="contact-card-value"
                    href="mailto:administration@groupebienveillance.org"
                    title="administration@groupebienveillance.org"
                  >
                    administration@groupebienveillance.org
                  </a>
                  <p className="contact-card-meta">
                    Partagez-nous votre situation pour que nous puissions vous orienter vers le bon intervenant.
                  </p>
                </div>

                <div className="contact-card schedule">
                  <div className="contact-card-header">
                    <div className="contact-card-icon">
                      <Clock />
                    </div>
                    <div>
                      <h3>Horaires et rendez-vous</h3>
                      <p>Rencontres sur rendez-vous</p>
                    </div>
                  </div>
                  <span className="contact-card-value">Lun - Ven : 9h00 - 18h00</span>
                  <p className="contact-card-meta">
                    Séances individuelles, familiales ou de groupe en présentiel et en ligne selon vos besoins.
                  </p>
                </div>
              </div>
            </div>

            {/* Formulaire de contact */}
            <div className="contact-form-container">
              <h2>Envoyez-nous un message</h2>
              <form
                className="contact-form"
                action="https://formspree.io/f/xleqzqzq"
                method="POST"
              >
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Nom complet *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Téléphone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="age">Âge</label>
                    <input
                      type="number"
                      id="age"
                      name="age"
                      min="0"
                      max="120"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="sex">Sexe</label>
                    <select
                      id="sex"
                      name="sex"
                    >
                      <option value="">Sélectionnez</option>
                      <option value="homme">Homme</option>
                      <option value="femme">Femme</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>
                </div>

                <div className="minor-notice">
                  <div className="notice-icon">⚠️</div>
                  <div className="notice-content">
                    <strong>Note importante :</strong> Pour les personnes mineures,
                    une référence professionnelle (médecin, travailleur social, etc.)
                    ou parentale est exigée pour tout accompagnement.
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Sujet *</label>
                  <select
                    id="subject"
                    name="subject"
                    required
                  >
                    <option value="">Choisissez un sujet</option>
                    <option value="rendez-vous">Prise de rendez-vous</option>
                    <option value="information">Demande d'information</option>
                    <option value="urgence">Urgence psychosociale</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="urgency">Niveau d'urgence</label>
                  <select
                    id="urgency"
                    name="urgency"
                  >
                    <option value="normal">Normal</option>
                    <option value="important">Important</option>
                    <option value="urgent">Urgent</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    placeholder="Décrivez votre situation et vos besoins..."
                    required
                  ></textarea>
                </div>

                <div className="form-group">
                  <label className="checkbox-label">
                    <input type="checkbox" required />
                    <span>J'accepte que mes données soient traitées de manière confidentielle *</span>
                  </label>
                </div>

                <button type="submit" className="btn btn-primary">
                  <Send size={20} />
                  Envoyer le message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact