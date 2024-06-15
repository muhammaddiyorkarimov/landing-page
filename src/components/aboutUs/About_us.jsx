// src/components/aboutUs/About_us.jsx
import React, { useEffect, useState } from 'react';
import './AboutUs.css';
import { useLanguage } from './../LanguageProvider/LanguageProvider';
import { useTranslation } from 'react-i18next';

import img from '../../images/automation1.png'

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

  return (
    <div className='about-us'>
      <div className="container">
        {/* {loading ? <h1 style={{ color: "#fff" }}>{t('loading')}</h1> : error ? <h1 style={{ color: "#fff" }}>{t('error')}: {error.message}</h1> :} */}
        <>
          <div className="main-title"><h1>{t('aboutUsTitle')}</h1></div>
          <div className="cards">
            {/* {data.map(item => (
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
            ))} */}
            <div className="card">
              <div className="about">
                <div className="wrapper-image">
                  <img src={img} alt="company" />
                </div>
                <div className="title">{t('carouselTitle')}</div>
              </div>
              <div className="description">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. In id deserunt provident saepe blanditiis sunt dolore vel incidunt eum quas eius dolorem rerum expedita dolores quod aliquam assumenda quibusdam, reprehenderit consectetur.</p>
              </div>
            </div>
            <div className="card">
              <div className="about">
                <div className="wrapper-image">
                  <img src={img} alt="company" />
                </div>
                <div className="title">{t('carouselTitle')}</div>
              </div>
              <div className="description">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. In id deserunt provident saepe blanditiis sunt dolore vel incidunt eum quas eius dolorem rerum expedita dolores quod aliquam assumenda quibusdam, reprehenderit consectetur.</p>
              </div>
            </div>
            <div className="card">
              <div className="about">
                <div className="wrapper-image">
                  <img src={img} alt="company" />
                </div>
                <div className="title">{t('carouselTitle')}</div>
              </div>
              <div className="description">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. In id deserunt provident saepe blanditiis sunt dolore vel incidunt eum quas eius dolorem rerum expedita dolores quod aliquam assumenda quibusdam, reprehenderit consectetur.</p>
              </div>
            </div>
            <div className="card">
              <div className="about">
                <div className="wrapper-image">
                  <img src={img} alt="company" />
                </div>
                <div className="title">{t('carouselTitle')}</div>
              </div>
              <div className="description">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. In id deserunt provident saepe blanditiis sunt dolore vel incidunt eum quas eius dolorem rerum expedita dolores quod aliquam assumenda quibusdam, reprehenderit consectetur.</p>
              </div>
            </div>
            <div className="card">
              <div className="about">
                <div className="wrapper-image">
                  <img src={img} alt="company" />
                </div>
                <div className="title">{t('carouselTitle')}</div>
              </div>
              <div className="description">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. In id deserunt provident saepe blanditiis sunt dolore vel incidunt eum quas eius dolorem rerum expedita dolores quod aliquam assumenda quibusdam, reprehenderit consectetur.</p>
              </div>
            </div>
          </div>
        </>
      </div>
    </div>
  );
}

export default About_us;
