import React from 'react';
import { useState } from 'react';

import Modals from '../Modals';

import modalsData from '../../data/modals';
import modals from '../../data/modals';

const Project = ({ img, title, description }) => {

  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="card">
      <img className="img" src={img} alt={title}></img>
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
      {openModal && <Modals 
        modals={modalsData} 
        closeModal={setOpenModal}
      />}
      {modals.includes((modal) => (
        <Modals
        key={modal.id === 'id'}
        // titleModal={modal.titleModal}
        // descriptionModal={modal.descriptionModal}
        // link={modal.link} 
        />
      ))}
    </div>
  ); 
};

export default Project;