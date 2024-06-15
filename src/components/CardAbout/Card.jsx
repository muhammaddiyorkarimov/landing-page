import React from 'react';
import './Card.css';

import img from '../../images/automation1.png';

const Card = ({ item, onClick }) => {
  return (
    <>
      <div className="card" onClick={onClick}>
        <div className="card-title">{item.slice(0, 20) + '...'}</div>
      </div>
    </>
  );
};

export default Card;
