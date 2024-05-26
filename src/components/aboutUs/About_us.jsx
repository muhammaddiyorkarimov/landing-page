// src/components/aboutUs/About_us.jsx
import React, { useEffect, useState } from 'react';
import './AboutUs.css';
import { useLanguage } from './../LanguageProvider/LanguageProvider';
import { useTranslation } from 'react-i18next';

function About_us() {
  const { language } = useLanguage();
  const { t } = useTranslation();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://myteaminfo.pythonanywhere.com/main/usAbouts/?lang=${language}`);
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
        setData(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [language]);

  if (loading) return <p>{t('loading')}</p>;
  if (error) return <p>{t('error')}: {error.message}</p>;

  return (
    <div className='about-us'>
      <div className="container">
        <div className="main-title"><h1>{t('aboutUsTitle')}</h1></div>
        <div className="cards">
          {data.map(item => (
            <div className="card" key={item.id}>
              <div className="about">
                <div className="wrapper-image">
                  <img src={item.image} alt="company" />
                </div>
                <div className="title">{item.title}</div>
              </div>
              <div className="description">
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About_us;
