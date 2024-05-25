import React, { useState } from 'react';
import './Contact.css';

function Contact() {
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
    if (!formData.name) newErrors.name = 'Ism kiritilishi kerak';
    if (!formData.phone_number) newErrors.phone_number = 'Telefon raqam kiritilishi kerak';
    if (!formData.description) newErrors.description = 'Ta\'rif kiritilishi kerak';

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
      setResponseMessage('Ma\'lumotlar muvaffaqiyatli yuborildi!');
    } catch (error) {
      setResponseMessage('Xatolik yuz berdi: ' + error.message);
    }
  };

  return (
    <div className='we-connect'>
      <div className="container">
        <div className="main-title">Biz bilan bog'laning</div>
        <div className="contact-card">
          <div className="about">
            <h1>Barcha savollaringizga javob beramiz</h1>
            <p>va hal qilishga yordam beramiz. Siz bilan hamkorlik qilganimizdan mamnunmiz!</p>
            <div className="status-badge">
              <span className="status-dot"></span>Online
            </div>
            <div className="work-time">
              <p>Ish vaqti: 09:00 - 18:00</p>
              <span>(dam olish kunlari bundan mustasno)</span>
            </div>
          </div>
          <div className="connect-form">
            <form onSubmit={handleSubmit}>
              <div>
                <label>
                  Ism:
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
                  Telefon raqam:
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
                  Ta'rif:
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
              <button type="submit">Yuborish</button>
            </form>
            {responseMessage && <p>{responseMessage}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
