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

function Skills () {
    return (
      <section class="skills" id="techniques">
        <h2 class="title">&#9612; Compétences Techniques</h2>
        <div class="skillsBlock">

          <div class="programmation">
            <h3 class="subtitle">Programmation</h3>
            <ul class="blockSetup--prog">
              <li class="skillSquare">
                <img src={html5} alt="HTML 5"/>
              </li>
              <li class="skillSquare">
                <img src={css3} alt="CSS 3"/>
              </li>
              <li class="skillSquare">
                <img src={js} alt="Javascript Js"/>
              </li>
              <li class="skillSquare">
                <img src={sass} alt="Sass"/>
              </li>
              <li class="skillSquare">
                <img src={react} alt="React"/>
              </li>
            </ul>
          </div>

          <div class="protypage">
            <h3 class="subtitle">Protypage</h3>
            <ul class="blockSetup--prot">
              <li class="skillSquare">
                <img src={figma} alt="Figma"/>
              </li>
              <li class="skillSquare">
                <img src={adobe} alt="adobe XD"/>
              </li>
              <li class="skillSquare">
                <img src={sketch} alt="Sketch"/>
              </li>
              <li class="skillSquare">
                <img src={invision} alt="InVision"/>
              </li>
            </ul>
          </div>

          <div class="environnement">
            <h3 class="subtitle">Environnement</h3>
            <ul class="blockSetup--env">
              <li class="skillSquare">
                <img src={git} alt="Git"/>
              </li>
              <li class="skillSquare">
                <img src={github} alt="GitHub"/>
              </li>
            </ul>
          </div>

        <div class="editor">
          <h3 class="subtitle">Editeur</h3>
          <ul class="blockSetup--edit">
            <li class="skillSquare">
              <img src={vscode} alt="Visual Studio Code"/>
            </li>
          </ul>
        </div>
      </div>
    </section>       
    );
}
export default Skills;
