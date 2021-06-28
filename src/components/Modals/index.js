import React from 'react';


const Modals = ({ cards, modals, modal, illustrationModal, title, descriptionModal, link, closeModal }) => {
  return (
    <>
          {/* {cards.map((card) => (
              <Modal 
                key={card.id} 
                illustrationModal={card.illustrationModal} 
                title={card.title} 
                descriptionModal={card.descriptionModal}
                link={card.link} />
          ))} */}

        {/* <aside className="modalProject" >
          <div className="modalContent" key={modal} >
            <div className="close" 
              onClick={() => 
              closeModal(false)
              }>&#x292C;
            </div>
            <img className="modalIllustration" src={illustrationModal} alt={title}></img>
            <h4 className="modalTitle">{title}</h4>
            <p className="modalDescription">
              {descriptionModal} 
            </p>
            <a href={link} target="_blank" rel="noreferrer"><button className="seeProject">Voir le projet</button></a>
          </div>
        </aside> */}


        <aside className="modalProject"  >
        {cards.map((card) => (
          <div className="modalContent" key={card.modal}>
            <div className="close" 
              onClick={() => 
              closeModal(false)
              }>&#x292C;
            </div>
            <img className="modalIllustration" src={card.illustrationModal} alt={card.title}></img>
            <h4 className="modalTitle">{card.title}</h4>
            <p className="modalDescription">
              {card.descriptionModal} 
            </p>
            <a href={card.link} target="_blank" rel="noreferrer"><button className="seeProject">Voir le projet</button></a>
          </div>
        ))}
        </aside>

    </>
  );
}
export default Modals;