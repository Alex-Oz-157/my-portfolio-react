import React from 'react';

const Modal = ({ handleShowModal, closeModalHandler }) => {

  return (
    <>
    {handleShowModal ? (
    <aside className="modalProject" id="modal">
      <div className="modalContent">
        <button className="close" onClick={(closeModalHandler)}>&#x292C;</button>
        <div className="modalIllustration"></div>
        <h4 className="modalTitle">Nom du Projet</h4>
        <p className="modalDescription">
          Donec non sollicitudin ante. Curabitur rhoncus nunc sed ex placerat, eu suscipit ante placerat. Sed non lectus tincidunt purus auctor mollis. Suspendisse potenti. Donec non bibendum tellus. Quisque tempus urna finibus, scelerisque justo eget, accumsan arcu. Aliquam venenatis libero in mauris egestas, a bibendum ligula eleifend. 
          <br/><br/>
          Vestibulum pellentesque, elit sit amet aliquam ultricies, dolor mauris viverra augue, eu feugiat erat libero a leo. Donec porta consequat neque consectetur varius. Nulla euismod hendrerit vulputate. Nullam dictum massa vel lorem cursus, quis convallis metus auctor. 
        </p>
      </div>
    </aside>
    ) : null}
    </>
  );
}
export default Modal;