import React from 'react';

import Project from './Project';

// Using props - cards
const Projects = ({ cards }) => {

    return (
      <>
        <h2 className="title" id="projets">&#9612; Projets</h2>
        <section className="projects">
          <div className="projectsBlock">
            {/* Display datas in several cards using an additional component Project */}
            {cards.map((card) => (
              <Project 
                key={card.id} 
                img={card.img} 
                title={card.title} 
                description={card.description}
                link={card.link} />
            ))}
          </div>
        </section>
      </>
    );
}
export default Projects;
