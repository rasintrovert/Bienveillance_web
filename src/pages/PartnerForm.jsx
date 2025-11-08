import { useState } from 'react'
import { X, Check, User, Mail, Phone, Building, MessageSquare, FileText } from 'lucide-react'
import './PartnerForm.css'

const PartnerForm = ({ formType, onClose }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    category: formType || 'volunteer',
    organizationType: '',
    motivation: '',
    message: '',
    consent: false
  })

  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'Le prénom est requis'
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Le nom est requis'
    }
    if (!formData.email.trim()) {
      newErrors.email = 'L\'email est requis'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'L\'email n\'est pas valide'
    }
    
    if (formData.category === 'volunteer' && !formData.motivation.trim()) {
      newErrors.motivation = 'La motivation est requise pour les bénévoles'
    }
    
    if (formData.category === 'partner' && !formData.organizationType) {
      newErrors.organizationType = 'Le type d\'organisation est requis'
    }

    if (!formData.consent) {
      newErrors.consent = 'Vous devez accepter la politique de confidentialité'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (validateForm()) {
      // Here you would normally send the data to your backend
      console.log('Form submitted:', formData)
      
      // For partnership, you could also trigger an email
      if (formData.category === 'partner') {
        const mailtoLink = `mailto:administration@groupebienveillance.org?subject=${encodeURIComponent(`Demande de partenariat - ${formData.organizationType}`)}&body=${encodeURIComponent(`
Nom: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Téléphone: ${formData.phone}
Type d'organisation: ${formData.organizationType}

Message:
${formData.message}
        `)}`
        window.location.href = mailtoLink
      }

      setIsSubmitted(true)
      
      // Auto close after 3 seconds
      setTimeout(() => {
        onClose()
      }, 3000)
    }
  }

  if (isSubmitted) {
    return (
      <div className="form-overlay" onClick={onClose}>
        <div className="form-container success-message" onClick={(e) => e.stopPropagation()}>
          <div className="success-icon">
            <Check size={60} />
          </div>
          <h2>Merci pour votre intérêt !</h2>
          <p>
            {formData.category === 'volunteer' 
              ? 'Votre candidature a été envoyée avec succès. Nous vous répondrons dans les plus brefs délais.'
              : 'Votre demande de partenariat a été envoyée. Notre équipe vous contactera prochainement.'}
          </p>
          <button onClick={onClose} className="btn btn-primary">
            Fermer
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="form-overlay" onClick={onClose}>
      <div className="form-container" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          <X size={24} />
        </button>

        <div className="form-header">
          <h2>
            {formData.category === 'volunteer' ? 'Candidature Bénévole' : 'Demande de Partenariat'}
          </h2>
          <p>Remplissez le formulaire ci-dessous et nous vous répondrons rapidement.</p>
        </div>

        <form onSubmit={handleSubmit} className="partner-form">
          {/* Category Selection */}
          <div className="form-group">
            <label htmlFor="category">
              <FileText size={18} />
              Catégorie *
            </label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className={errors.category ? 'error' : ''}
            >
              <option value="volunteer">Bénévolat</option>
              <option value="partner">Partenariat</option>
              <option value="other">Autre</option>
            </select>
            {errors.category && <span className="error-message">{errors.category}</span>}
          </div>

          {/* First Name */}
          <div className="form-group">
            <label htmlFor="firstName">
              <User size={18} />
              Prénom *
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Votre prénom"
              className={errors.firstName ? 'error' : ''}
            />
            {errors.firstName && <span className="error-message">{errors.firstName}</span>}
          </div>

          {/* Last Name */}
          <div className="form-group">
            <label htmlFor="lastName">
              <User size={18} />
              Nom *
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Votre nom"
              className={errors.lastName ? 'error' : ''}
            />
            {errors.lastName && <span className="error-message">{errors.lastName}</span>}
          </div>

          {/* Email */}
          <div className="form-group">
            <label htmlFor="email">
              <Mail size={18} />
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="votre.email@exemple.com"
              className={errors.email ? 'error' : ''}
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>

          {/* Phone */}
          <div className="form-group">
            <label htmlFor="phone">
              <Phone size={18} />
              Téléphone (optionnel)
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+1 (123) 456-7890"
            />
          </div>

          {/* Organization Type - Only for Partners */}
          {formData.category === 'partner' && (
            <div className="form-group">
              <label htmlFor="organizationType">
                <Building size={18} />
                Type d'organisation *
              </label>
              <select
                id="organizationType"
                name="organizationType"
                value={formData.organizationType}
                onChange={handleChange}
                className={errors.organizationType ? 'error' : ''}
              >
                <option value="">Sélectionnez un type</option>
                <option value="company">Entreprise</option>
                <option value="ngo">ONG</option>
                <option value="institution">Institution</option>
                <option value="association">Association</option>
                <option value="foundation">Fondation</option>
                <option value="other">Autre</option>
              </select>
              {errors.organizationType && <span className="error-message">{errors.organizationType}</span>}
            </div>
          )}

          {/* Motivation - Only for Volunteers */}
          {formData.category === 'volunteer' && (
            <div className="form-group">
              <label htmlFor="motivation">
                <MessageSquare size={18} />
                Motivation *
              </label>
              <textarea
                id="motivation"
                name="motivation"
                value={formData.motivation}
                onChange={handleChange}
                placeholder="Parlez-nous de votre motivation à devenir bénévole..."
                rows="4"
                className={errors.motivation ? 'error' : ''}
              />
              {errors.motivation && <span className="error-message">{errors.motivation}</span>}
            </div>
          )}

          {/* Message - Optional for all */}
          <div className="form-group">
            <label htmlFor="message">
              <MessageSquare size={18} />
              Message {formData.category === 'volunteer' ? '(optionnel)' : '*'}
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Informations complémentaires..."
              rows="4"
            />
          </div>

          {/* Consent Checkbox */}
          <div className="form-group checkbox-group">
            <label className="checkbox-label">
              <input
                type="checkbox"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
                className={errors.consent ? 'error' : ''}
              />
              <span>
                J'accepte que mes données soient utilisées dans le cadre de ma demande et conformément à la politique de confidentialité. *
              </span>
            </label>
            {errors.consent && <span className="error-message">{errors.consent}</span>}
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn btn-primary btn-submit">
            Envoyer ma demande
          </button>
        </form>
      </div>
    </div>
  )
}

export default PartnerForm

