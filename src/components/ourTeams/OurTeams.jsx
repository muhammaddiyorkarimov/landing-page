import React, { useState, useEffect } from 'react';
import './OurTeams.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { useTranslation } from 'react-i18next';

function OurTeams() {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { t } = useTranslation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://myteam001.pythonanywhere.com/main/myTeams/');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setTeams(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>{t('loading')}</div>;
  }

  if (error) {
    return <div>{t('error')}: {error.message}</div>;
  }

  return (
    <div className='our-teams'>
      <div className="container">
        <div className="main-title">{t('ourTeams')}</div>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          {teams.map((team) => (
            <SwiperSlide key={team.id}>
              <div className="user-image">
                <img src={team.image} alt={team.title} />
              </div>
              <div className="slide-content">
                <h3>{team.title}</h3>
                <p>{team.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default OurTeams;
