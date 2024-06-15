import React, { useEffect, useState } from 'react';
import './Services.css';
import Modal from './../modal/Modal';
import Card from './../CardAbout/Card';
import { useTranslation } from 'react-i18next';

function Services() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);
  const { t } = useTranslation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://myteam001.pythonanywhere.com/main/services/');
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
  }, []);

  const handleCardClick = (card) => {
    setSelectedCard(card);
    document.body.style.overflow = 'hidden';  // Prevent scrolling
  };

  const handleCloseModal = () => {
    setSelectedCard(null);
    document.body.style.overflow = 'auto';  // Re-enable scrolling
  };

  return (
    <div className='services'>
      <div className="main-title"><h1>{t('ourServices')}</h1></div>
      <div className="container">
        {/* {loading ? <h1 style={{ color: "#fff" }}>{t('loading')}</h1> : error ? <h1 style={{ color: "#fff" }}>{t('error')}: {error.message}</h1> : 
        } */}
        <>
          {/* <div className="cards">
            {data.length > 0 && data.map((item) => (
              <div key={item.id}>
                <Card key={item.id} item={item} onClick={() => handleCardClick(item)} />
              </div>
            ))}
          </div>
          {selectedCard && (
            <Modal
              item={selectedCard}
              onClose={handleCloseModal}
            />
          )} */}
        </>
        <>
          <div className="cards">
            <div>
              <Card item={t('howToCompanyTechcraft')} onClick={() => handleCardClick('salom')} />
            </div>
            <div>
              <Card item={t('howToCompanyTechcraft')} onClick={() => handleCardClick('salom')} />
            </div>
            <div>
              <Card item={t('howToCompanyTechcraft')} onClick={() => handleCardClick('salom')} />
            </div>
            <div>
              <Card item={t('howToCompanyTechcraft')} onClick={() => handleCardClick('salom')} />
            </div>
            <div>
              <Card item={t('howToCompanyTechcraft')} onClick={() => handleCardClick('salom')} />
            </div>
            <div>
              <Card item={t('howToCompanyTechcraft')} onClick={() => handleCardClick('salom')} />
            </div>
            <div>
              <Card item={t('howToCompanyTechcraft')} onClick={() => handleCardClick('salom')} />
            </div>
            <div>
              <Card item={t('howToCompanyTechcraft')} onClick={() => handleCardClick('salom')} />
            </div>
            <div>
              <Card item={t('howToCompanyTechcraft')} onClick={() => handleCardClick('salom')} />
            </div>
            
            
          </div>
          {selectedCard && (
            <Modal
              item={selectedCard}
              onClose={handleCloseModal}
            />
          )}
        </>
      </div>
    </div>
  );
}

export default Services;
