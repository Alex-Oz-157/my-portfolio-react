import React from 'react';

const Modals = ({ modals, closeModal }) => {

  return (
    <>
      {modals.map((modal) => (
        <aside className="modalProject" key={modal.id} >
          <div className="modalContent" >
            <div className="close" 
              onClick={() => 
              closeModal(false)
              }>&#x292C;
            </div>
            <img className="modalIllustration" src={modal.illustrationModal} alt={modal.titleModal}></img>
            <h4 className="modalTitle">{modal.titleModal}</h4>
            <p className="modalDescription">
              {modal.descriptionModal} 
            </p>
            <a href={modal.link} target="_blank" rel="noreferrer"><button className="seeProject">Voir le projet</button></a>
          </div>
        </aside>
      ))}
    </>
  );
}
export default Modals;