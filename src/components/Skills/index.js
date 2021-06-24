import React from 'react';

import html5 from '../../assets/pictos/html5.svg';
import css3 from '../../assets/pictos/code_css3.svg';
import js from '../../assets/pictos/javascript_js.svg';
import sass from '../../assets/pictos/sass.svg';
import react from '../../assets/pictos/react_native.svg';
import figma from '../../assets/pictos/figma.svg';
import adobe from '../../assets/pictos/adobe_xd.svg';
import sketch from '../../assets/pictos/sketch.svg';
import invision from '../../assets/pictos/invision.svg';
import git from '../../assets/pictos/git.svg';
import github from '../../assets/pictos/github_skills.svg';
import vscode from '../../assets/pictos/vs_code.svg';

const Skills = () => {
    return (
      <section className="skills" id="techniques">
        <h2 className="title">&#9612; Compétences Techniques</h2>
        <div className="skillsBlock">

          <div className="programmation">
            <h3 className="subtitle">Programmation</h3>
            <ul className="blockSetup">
              <li className="skillSquare">
                <img src={html5} alt="HTML 5"/>
              </li>
              <li className="skillSquare">
                <img src={css3} alt="CSS 3"/>
              </li>
              <li className="skillSquare">
                <img src={js} alt="Javascript Js"/>
              </li>
              <li className="skillSquare">
                <img src={sass} alt="Sass"/>
              </li>
              <li className="skillSquare">
                <img src={react} alt="React"/>
              </li>
            </ul>
          </div>

          <div className="protypage">
            <h3 className="subtitle">Protypage</h3>
            <ul className="blockSetup">
              <li className="skillSquare">
                <img src={figma} alt="Figma"/>
              </li>
              <li className="skillSquare">
                <img src={adobe} alt="adobe XD"/>
              </li>
              <li className="skillSquare">
                <img src={sketch} alt="Sketch"/>
              </li>
              <li className="skillSquare">
                <img src={invision} alt="InVision"/>
              </li>
            </ul>
          </div>

          <div className="environnement">
            <h3 className="subtitle">Environnement</h3>
            <ul className="blockSetup">
              <li className="skillSquare">
                <img src={git} alt="Git"/>
              </li>
              <li className="skillSquare">
                <img src={github} alt="GitHub"/>
              </li>
            </ul>
          </div>

        <div className="editor">
          <h3 className="subtitle">Editeur</h3>
          <ul className="blockSetup">
            <li className="skillSquare">
              <img src={vscode} alt="Visual Studio Code"/>
            </li>
          </ul>
        </div>
      </div>
      <div className="notaBene">
        <p className="presentation">
          <em>NB : </em>Le site que vous consultez en ce moment a été protypé grâce à Figma avant d'être codé en statique (HTML, CSS, JS).
          <br/>Il est dévéloppé en REACT et "habillé" grâce à SASS. Son code est accessible sur github <a href="https://github.com/Alex-Oz-157/my-portfolio-react" target="_blank" className="goGithub">en cliquant ici.</a>
        </p>
      </div>

    </section>       
    );
}
export default Skills;
