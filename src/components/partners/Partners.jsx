import React, { useState, useEffect } from 'react';
import './Partners.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import SwiperCore from 'swiper';
import { Autoplay } from 'swiper/modules';
import { useTranslation } from 'react-i18next';

SwiperCore.use([Autoplay]);

function Partners() {
  const { t } = useTranslation();
  const [partners, setPartners] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPartners = async () => {
      try {
        const response = await fetch('https://myteam001.pythonanywhere.com/main/partners/');
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.statusText}`);
        }
        const data = await response.json();
        const translatedData = data.map(partner => ({
          ...partner,
          name: t(partner.name), // Assuming name needs to be translated
          description: t(partner.description) // Assuming description needs to be translated
        }));
        setPartners(translatedData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPartners();
  }, [t]);

  return (
    <div className='partners'>
      {loading ? <h1 className='' style={{ color: "#fff" }}>{t('loading')}</h1> : error ? <h1 className='' style={{ color: "#fff" }}>{t('error')}: {error}</h1> : <>
      <div className="main-title">{t('ourPartners')}</div>
        <Swiper className='container'
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          slidesPerView={5}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
          }}
        >
          {partners.map((partner) => (
            <SwiperSlide key={partner.id}>
              <div className='partner-slide'>
                <img src={partner.image} alt={partner.name} />
                <h3>{partner.name}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </>}
    </div>
  );
}

export default Partners;
