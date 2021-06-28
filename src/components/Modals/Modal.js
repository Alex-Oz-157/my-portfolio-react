import React from 'react';


const Modal = ({ id, illustrationModal, title, descriptionModal, link, closeModal }) => {
  return (
    <aside className="modalProject" id="modal" key={id}>
      <div className="modalContent">
        <div className="close" 
          onClick={() => 
          closeModal(false)
          }>&#x292C;
        </div>
        <img className="modalIllustration" src={illustrationModal}></img>
        <h4 className="modalTitle">{title}</h4>
        <p className="modalDescription">
          {descriptionModal} 
        </p>
        <a href={link} target="_blank" rel="noreferrer"><button className="seeProject">Voir le projet</button></a>
      </div>
    </aside>
  );
}

export  { Modal };