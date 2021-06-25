import React from 'react';

//import Modal from '../../components/Modals';
import cardsData from '../../data/cards';

const Modals = ({ cards, closeModal, title,   }) => {

  return (
    <>
      {cards.map((card) => (
        <aside className="modalProject" >
          <div className="modalContent" >
            <div className="close" 
              onClick={() => 
              closeModal(false)
              }>&#x292C;
            </div>
            <img className="modalIllustration" src={card.illustration} alt={card.title}></img>
            <h4 className="modalTitle">{card.title}</h4>
            <p className="modalDescription">
              {card.descriptionFull} 
            </p>
            <a href={card.link} target="_blank" rel="noreferrer"><button className="seeProject">Voir le projet</button></a>
          </div>
        </aside>
      ))}
    </>
  );
}
export default Modals;