import React from 'react';
import aknowledgment from '../../assets/illustrations/undraw_Project_completed.svg';
import oclock from '../../assets/logos/oclock.png';
import opquast from '../../assets/logos/opquast.png';
import gobelins from '../../assets/logos/lesGobelins.png';


const Formation = () => {
    return(
      <>
        <h2 class="title" id="formation">&#9612; Formation</h2>
        <section class="formation">
          <div class="chronologie">
            <div class="dot">
              <div class="block"> 
                <div class="triangle"></div>
                <img src={oclock} class="logoFormation" alt="Logo O'clock"/>
                <div class="details">
                  <h5 class="formationTitle">Développeur web / web-mobile</h5>
                  <h5 class="formationTitle">O'clock (2020-2021)</h5>
                  <p class="formationDescription">Tronc commun :<br/>
        
                    HTML, CSS, Git, | PHP | JavaScript, DOM | POO, SQL, Bootstrap
                    MVC | Back Office | AJAX, API | CM
                    <br/>
                    <br/>
                    Spécialisation : REACT
                  </p>
                </div>
              </div>
            </div>

            <div class="dot">
              <div class="block">
                <div class="triangle"></div>
                <img src={opquast} class="logoFormation" alt="Logo Opquast"/>
                <div class="details">
                  <h5 class="formationTitle">Certificat Opquast N° CNX2FA</h5>
                  <h5 class="formationTitle">Opquast (2021-26)</h5>
                  <p class="formationDescription">Maîtrise de la qualité en projet Web | <br/>
                  Score : <em>855 points sur 1000</em>
                  </p>
                  <p class="formationDescription">
                    Excellente connaissance des bonnes pratiques qualité Web et du vocabulaire associé. Compétences réelles et appréciables pour participer à des projets Web.  
                  </p>
                </div>                
              </div>
            </div>

            <div class="dot">
              <div class="block">
                <div class="triangle"></div>
                <img src={gobelins} class="logoFormation" alt="Logo Les Gobelins" />
                <div class="details">
                  <h5 class="formationTitle">UX Design (ref. MM75)</h5>
                  <h5 class="formationTitle">Les Gobelins (2017)</h5>
                  <p class="formationDescription">Contenu principal :<br/>
                    Méthodologie, personas, idéation,<br/>ergonomie, prototypage
                    <br/>
                    <br/>
                  </p>
                </div>                
              </div>
            </div>
          </div>
          <img src={aknowledgment} alt="" class="aknowledgment"/>    
        </section>

        <div class="formationSuite">
          <p>
            <span>Et avant ?</span><br/>
            Master 1 en Communication - ISCOM Paris (2008-10)<br/>
            2ème année de Langues Etrangères Appliquées (LEA) - Unistra (2007-08)<br/>
            DUT Techniques de commercialisation - IUT Strasbourg (2005-07)
          </p>
        </div>
      </>  
    );
}
export default Formation;
