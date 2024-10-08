// components/SportCards.js
import React, { useState } from 'react';
import Detalle from './Detalle';


const SportCards = ({ sportsData = [] }) => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = (cardData, imageSrc) => {
    setSelectedCard({ ...cardData, imageSrc });
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="sport-cards">
      {sportsData.map(({ sport, length, duration, city, imagePrefix }) => (
        <div key={sport} className="sport-column">
          <h3>{sport}</h3>
          <div className="sport-cards-grid">
            {[...Array(10)].map((_, index) => (
              <div
                key={index}
                className="card"
                onClick={() =>
                  openModal(
                    { sport, length, duration, city },
                    `https://via.placeholder.com/150?text=${imagePrefix}+${index + 1}`
                  )
                }
              >
                <img
                  src={`https://via.placeholder.com/150?text=${imagePrefix}+${index + 1}`}
                  alt={`${sport} ${index + 1}`}
                />
                <p>Length: {length}</p>
                <p>Duration: {duration}</p>
                <p>City: {city}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
      
      {/* Modal que se abre al hacer clic en una tarjeta */}
      <Detalle isOpen={isModalOpen} onClose={closeModal} cardData={selectedCard} />
    </div>
  );
};

export default SportCards;
