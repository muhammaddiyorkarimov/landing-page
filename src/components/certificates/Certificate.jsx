import React, { useState } from 'react';
import './Certificate.css';
import certificate1 from '../../images/certificates/AMOCRM.jpg';
import certificate2 from '../../images/certificates/certificate (13) (2).png';
import certificate3 from '../../images/certificates/image_2024-04-17_18-29-59.png';
import certificate4 from '../../images/certificates/Маркетинг маркази Гувохнома 2024.pdf';
import certificate5 from '../../images/certificates/Сертификат_партнера_ООО_“_IT_MARKETING_CENTER_”_от_27_03_24.pdf';
import { useTranslation } from 'react-i18next';
import { t } from 'i18next';

function Certificate() {
  const [modalImage, setModalImage] = useState(null);
	const { t } = useTranslation();

  const openModal = (imageSrc) => {
    setModalImage(imageSrc);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <div className='certificate'>
      <div className="container">
        <div className="main-title"><h1>{t('certificates')}</h1></div>
        <div className="certificates-items">
          <div className="certificate-item" onClick={() => openModal(certificate1)}>
            <img src={certificate1} alt="" />
          </div>
          <div className="certificate-item" onClick={() => openModal(certificate2)}>
            <img src={certificate2} alt="" />
          </div>
          <div className="certificate-item" onClick={() => openModal(certificate3)}>
            <img src={certificate3} alt="" />
          </div>
          <div className="certificate-item" onClick={() => openModal(certificate4)}>
						<embed src={certificate4} type="application/pdf"/>
          </div>
          <div className="certificate-item" onClick={() => openModal(certificate5)}>
						<embed src={certificate5} type="application/pdf"/>
          </div>
        </div>
      </div>
      {modalImage && (
        <div className="show-modal" onClick={closeModal}>
          <div className="show-modal-content">
            <img src={modalImage} alt="Certificate" />
          </div>
        </div>
      )}
    </div>
  );
}

export default Certificate;
