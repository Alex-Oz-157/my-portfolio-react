import React from 'react';
import { useState } from 'react';

import Modal from '../Modal';

const Project = ({ img, title, description }) => {

  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="card">
      <img className="img" src={img}></img>
      <h4 className="cardTitle">{title}</h4>
      <p className="cardDescription">
        {description}
      </p>
      <button 
        className="cardButton" 
        onClick={() => {
          setOpenModal(true);
        }}>Découvrir
      </button>
      {openModal && <Modal closeModal={setOpenModal}/>}
    </div>
  ); 
};

export default Project;