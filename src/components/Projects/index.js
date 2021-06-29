import React from 'react';

import Project from './Project';
import test from '../../assets/img/room_homepage.png';
import test1 from '../../assets/img/landing.png';
import test2 from '../../assets/img/landing.png';



const Projects = ({ cards }) => {

    return (
      <>
        <h2 className="title" id="projets">&#9612; Projets</h2>
        <section className="projects">
          <div className="projectsBlock">
            {cards.map((card) => (
              <Project 
                key={card.id} 
                img={card.img} 
                title={card.title} 
                description={card.description}
                link={card.link} />
            ))}
            <img className="imgTest" src={test} alt="blabla"></img>
            <img className="imgTest2" src={test1} alt="blabla"></img>
            <img className="imgTest3" src={test2} alt="blabla"></img>
          </div>
        </section>
      </>
    );
}
export default Projects;
