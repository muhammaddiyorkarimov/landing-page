import React, { useState } from 'react';
import './Contact.css';
import { useTranslation } from 'react-i18next';

function Contact() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    phone_number: '',
    description: ''
  });

  const [responseMessage, setResponseMessage] = useState('');
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Form validation
    const newErrors = {};
    if (!formData.name) newErrors.name = t('nameRequired');
    if (!formData.phone_number) newErrors.phone_number = t('phoneNumberRequired');
    if (!formData.description) newErrors.description = t('descriptionRequired');

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});

    try {
      const response = await fetch('https://myteam001.pythonanywhere.com/main/registerTeams/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setResponseMessage(t('submissionSuccess'));
    } catch (error) {
      setResponseMessage(`${t('submissionError')}: ${error.message}`);
    }
  };

  return (
    <div className='we-connect'>
      <div className="container">
        <div className="main-title">{t('contactUs')}</div>
        <div className="contact-card">
          <div className="about">
            <h1>{t('answerAllQuestions')}</h1>
            <p>{t('happyToAssist')}</p>
            <div className="status-badge">
              <span className="status-dot"></span>{t('online')}
            </div>
            <div className="work-time">
              <p>{t('workingHours')}</p>
              <span>{t('excludingWeekends')}</span>
            </div>
          </div>
          <div className="connect-form">
            <form onSubmit={handleSubmit}>
              <div>
                <label>
                  {t('name')}:
                  <input 
                    type="text" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    className={errors.name ? 'error' : ''} 
                    required 
                  />
                </label>
                {errors.name && <p className="error-message">{errors.name}</p>}
              </div>
              <div>
                <label>
                  {t('phoneNumber')}:
                  <input 
                    type="text" 
                    name="phone_number" 
                    value={formData.phone_number} 
                    onChange={handleChange} 
                    className={errors.phone_number ? 'error' : ''} 
                    required 
                  />
                </label>
                {errors.phone_number && <p className="error-message">{errors.phone_number}</p>}
              </div>
              <div>
                <label>
                  {t('description')}:
                  <textarea 
                    name="description" 
                    value={formData.description} 
                    onChange={handleChange} 
                    className={errors.description ? 'error' : ''} 
                    required
                  ></textarea>
                </label>
                {errors.description && <p className="error-message">{errors.description}</p>}
              </div>
              <button type="submit">{t('submit')}</button>
            </form>
            {responseMessage && <p>{responseMessage}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
