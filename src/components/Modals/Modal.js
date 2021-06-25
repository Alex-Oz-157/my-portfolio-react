import React from 'react';


const Modal = ({ illustration, title, description, link, closeModal }) => {
  return (
    <aside className="modalProject" id="modal">
      <div className="modalContent">
        <div className="close" 
          onClick={() => 
          closeModal(false)
          }>&#x292C;
        </div>
        <img className="modalIllustration" src={illustration}></img>
        <h4 className="modalTitle">{title}</h4>
        <p className="modalDescription">
          {description} 
        </p>
        <a href={link} target="_blank" rel="noreferrer"><button className="seeProject">Voir le projet</button></a>
      </div>
    </aside>
  );
}

export  { Modal };