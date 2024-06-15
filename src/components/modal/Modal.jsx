import React from 'react';
import './Modal.css';
import { useTranslation } from 'react-i18next';

import img from '../../images/automation1.png';

const Modal = ({ item, onClose }) => {
  const { t } = useTranslation();
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <img src={img} />
        <h2>{t('howToCompanyTechcraft')}</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla, autem quibusdam cumque quisquam, maxime saepe minima, aperiam asperiores quod sunt qui nobis earum eligendi. Labore, voluptatem. Tempore culpa eaque, tenetur quaerat repudiandae quia, veniam reiciendis accusamus error rerum qui veritatis dolorum ipsum esse exercitationem. Libero itaque amet molestias saepe perspiciatis.</p>
      </div>
    </div>
  );
};

export default Modal;
