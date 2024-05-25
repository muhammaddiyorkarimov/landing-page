import React from 'react';
import './Card.css';

const Card = ({ item, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <div className="card-title">{item.title.length > 10 ? (item.title.slice(0, 20) + '...') : item.title}</div>
    </div>
  );
};

export default Card;
