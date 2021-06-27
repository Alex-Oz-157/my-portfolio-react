import React from 'react';
import modals from '../../data/modals';

const Modals = ({ id, illustrationModal, titleModal, descriptionModal, link, closeModal }) => {

  return (
    <>

        <aside className="modalProject" key={id} >
          <div className="modalContent" >
            <div className="close" 
              onClick={() => 
              closeModal(false)
              }>&#x292C;
            </div>
            <img className="modalIllustration" src={illustrationModal} alt={titleModal}></img>
            <h4 className="modalTitle">{titleModal}</h4>
            <p className="modalDescription">
              {descriptionModal} 
            </p>
            <a href={link} target="_blank" rel="noreferrer"><button className="seeProject">Voir le projet</button></a>
          </div>
        </aside>

      {/* {modals.map((modal) => (
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
      ))} */}
    </>
  );
}
export default Modals;