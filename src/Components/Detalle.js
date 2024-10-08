// components/Detalle.js
import React from 'react';


const Detalle = ({ isOpen, onClose, cardData }) => {
  if (!isOpen) return null;  // Si el modal no está abierto, no muestra nada

  return (
    <div className="detalle-overlay">
      <div className="detalle-content">
        <h2>{cardData.sport} Session</h2>
        <img src={cardData.imageSrc} alt={`${cardData.sport}`} />
        <p>Length: {cardData.length}</p>
        <p>Duration: {cardData.duration}</p>
        <p>City: {cardData.city}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Detalle;
