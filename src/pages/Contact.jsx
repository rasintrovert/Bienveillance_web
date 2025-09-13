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
            <div className="contact-info">
              <h2>Nos coordonnées</h2>
              
              <div className="contact-item">
                <div className="contact-icon">
                  <Phone />
                </div>
                <div className="contact-details">
                  <h3>Urgences</h3>
                  <p>Disponible 24h/24</p>
                  <a href="tel:+33123456789">911</a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <Mail />
                </div>
                <div className="contact-details">
                  <h3>Email</h3>
                  <p>Réponse sous 24h</p>
                  <a href="mailto:bienveillance23@gmail.com">bienveillance23@gmail.com</a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <Clock />
                </div>
                <div className="contact-details">
                  <h3>Horaires</h3>
                  <p>Lundi - Vendredi</p>
                  <span>9h00 - 18h00</span>
                </div>
              </div>

              {/* <div className="contact-item">
                <div className="contact-icon">
                  <MapPin />
                </div>
                <div className="contact-details">
                  <h3>Adresse</h3>
                  <p>Centre d'accompagnement</p>
                  <span>123 Rue de la Bienveillance<br />75000 Paris</span>
                </div>
              </div> */}
            </div>

            {/* Formulaire de contact */}
            <div className="contact-form-container">
              <h2>Envoyez-nous un message</h2>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Nom complet *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
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
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="age">Âge</label>
                    <input
                      type="number"
                      id="age"
                      name="age"
                      value={formData.age}
                      onChange={handleChange}
                      min="0"
                      max="120"
                    />
                  </div>
                </div>

                {/* Note importante pour les mineurs */}
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
                    value={formData.subject}
                    onChange={handleChange}
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
                    value={formData.urgency}
                    onChange={handleChange}
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
                    value={formData.message}
                    onChange={handleChange}
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

                <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Heart className="spinning" />
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Envoyer le message
                    </>
                  )}
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