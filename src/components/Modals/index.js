import React from 'react';

//import Modal from '../../components/Modals';

const Modals = ({ modals, closeModal  }) => {

  return (
    <>
      {modals.map((modal) => (
        <aside className="modalProject"  key={modal.id}>
          <div className="modalContent" >
            <div className="close" 
              onClick={() => 
              closeModal(false)
              }>&#x292C;
            </div>
            <img className="modalIllustration" src={modal.illustration} alt={modal.title}></img>
            <h4 className="modalTitle">{modal.title}</h4>
            <p className="modalDescription">
              {modal.description} 
            </p>
            <a href={modal.link} target="_blank" rel="noreferrer"><button className="seeProject">Voir le projet</button></a>
          </div>
        </aside>
      ))}
    </>
  );
}
export default Modals;