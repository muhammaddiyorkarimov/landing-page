import React, { useState, useEffect } from 'react';
import './OurTeams.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { useTranslation } from 'react-i18next';

import img from '../../images/automation1.png'

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

  return (
    <div className='our-teams'>
      <div className="container">
        {/* {loading ? <h1 style={{ color: "#fff", textAlign: 'center' }}>{t('loading')}</h1> : error ? <h1 style={{ color: "#fff", textAlign: 'center' }}>{t('error')}: {error.message}</h1> : <>
          
        </>} */}
        {/* {teams.map((team) => (
              <SwiperSlide key={team.id}>
                <div className="user-image">
                  <img src={team.image} alt={team.title} />
                </div>
                <div className="slide-content">
                  <h3>{team.title}</h3>
                  <p>{team.description}</p>
                </div>
              </SwiperSlide>
            ))} */}
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
          <SwiperSlide >
            <div className="user-image">
              <img src={img} />
            </div>
            <div className="slide-content">
              <h3>{t('ourTeams')}</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat beatae tempore error sapiente. Dolorem praesentium iste blanditiis minus quibusdam porro atque aliquid quos iure, inventore odit illum saepe ducimus molestias ad, commodi sunt fuga quo. Nam error perspiciatis velit facilis nulla praesentium, eligendi modi maiores temporibus eos, non incidunt possimus.</p>
            </div>
          </SwiperSlide>
          <SwiperSlide >
            <div className="user-image">
              <img src={img} />
            </div>
            <div className="slide-content">
              <h3>{t('ourTeams')}</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat beatae tempore error sapiente. Dolorem praesentium iste blanditiis minus quibusdam porro atque aliquid quos iure, inventore odit illum saepe ducimus molestias ad, commodi sunt fuga quo. Nam error perspiciatis velit facilis nulla praesentium, eligendi modi maiores temporibus eos, non incidunt possimus.</p>
            </div>
          </SwiperSlide>
          <SwiperSlide >
            <div className="user-image">
              <img src={img} />
            </div>
            <div className="slide-content">
              <h3>{t('ourTeams')}</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat beatae tempore error sapiente. Dolorem praesentium iste blanditiis minus quibusdam porro atque aliquid quos iure, inventore odit illum saepe ducimus molestias ad, commodi sunt fuga quo. Nam error perspiciatis velit facilis nulla praesentium, eligendi modi maiores temporibus eos, non incidunt possimus.</p>
            </div>
          </SwiperSlide>
          <SwiperSlide >
            <div className="user-image">
              <img src={img} />
            </div>
            <div className="slide-content">
              <h3>{t('ourTeams')}</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat beatae tempore error sapiente. Dolorem praesentium iste blanditiis minus quibusdam porro atque aliquid quos iure, inventore odit illum saepe ducimus molestias ad, commodi sunt fuga quo. Nam error perspiciatis velit facilis nulla praesentium, eligendi modi maiores temporibus eos, non incidunt possimus.</p>
            </div>
          </SwiperSlide>
          <SwiperSlide >
            <div className="user-image">
              <img src={img} />
            </div>
            <div className="slide-content">
              <h3>{t('ourTeams')}</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat beatae tempore error sapiente. Dolorem praesentium iste blanditiis minus quibusdam porro atque aliquid quos iure, inventore odit illum saepe ducimus molestias ad, commodi sunt fuga quo. Nam error perspiciatis velit facilis nulla praesentium, eligendi modi maiores temporibus eos, non incidunt possimus.</p>
            </div>
          </SwiperSlide>
          <SwiperSlide >
            <div className="user-image">
              <img src={img} />
            </div>
            <div className="slide-content">
              <h3>{t('ourTeams')}</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat beatae tempore error sapiente. Dolorem praesentium iste blanditiis minus quibusdam porro atque aliquid quos iure, inventore odit illum saepe ducimus molestias ad, commodi sunt fuga quo. Nam error perspiciatis velit facilis nulla praesentium, eligendi modi maiores temporibus eos, non incidunt possimus.</p>
            </div>
          </SwiperSlide>
          <SwiperSlide >
            <div className="user-image">
              <img src={img} />
            </div>
            <div className="slide-content">
              <h3>{t('ourTeams')}</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat beatae tempore error sapiente. Dolorem praesentium iste blanditiis minus quibusdam porro atque aliquid quos iure, inventore odit illum saepe ducimus molestias ad, commodi sunt fuga quo. Nam error perspiciatis velit facilis nulla praesentium, eligendi modi maiores temporibus eos, non incidunt possimus.</p>
            </div>
          </SwiperSlide>
          <SwiperSlide >
            <div className="user-image">
              <img src={img} />
            </div>
            <div className="slide-content">
              <h3>{t('ourTeams')}</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat beatae tempore error sapiente. Dolorem praesentium iste blanditiis minus quibusdam porro atque aliquid quos iure, inventore odit illum saepe ducimus molestias ad, commodi sunt fuga quo. Nam error perspiciatis velit facilis nulla praesentium, eligendi modi maiores temporibus eos, non incidunt possimus.</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default OurTeams;
