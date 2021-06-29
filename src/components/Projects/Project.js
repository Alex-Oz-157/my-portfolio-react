import React from 'react';

const Project = ({ img, title, description, link}) => {

  return (
    <div className="card">
      <h4 className="cardTitle">{title}</h4>
      <p className="cardDescription">
        {description}
      </p>
      <a href={link} target="_blank" rel="noreferrer">
      <button className="cardButton">Découvrir</button></a>
    </div>
  ); 
};

export default Project;

//<img className="img" src={`/static/media/${img}`} alt={title}></img>
