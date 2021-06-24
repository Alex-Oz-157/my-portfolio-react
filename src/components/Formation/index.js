import React from 'react';
import aknowledgment from '../../assets/illustrations/undraw_Project_completed.svg';
import oclock from '../../assets/logos/oclock.png';
import opquast from '../../assets/logos/opquast.png';
import gobelins from '../../assets/logos/lesGobelins.png';


const Formation = () => {
    return(
      <>
        <h2 className="title" id="formation">&#9612; Formation</h2>
        <section className="formation">
          <div className="chronologie">
            <div className="dot">
              <div className="block"> 
                <div className="triangle"></div>
                <img src={oclock} className="logoFormation" alt="Logo O'clock"/>
                <div className="details">
                  <h5 className="formationTitle">Développeur web / web-mobile</h5>
                  <h5 className="formationTitle">O'clock (2020-2021)</h5>
                  <p className="formationDescription">Tronc commun :<br/>
        
                    HTML, CSS, Git, | PHP | JavaScript, DOM | POO, SQL, Bootstrap
                    MVC | Back Office | AJAX, API | CM
                    <br/>
                    <br/>
                    Spécialisation : REACT
                  </p>
                </div>
              </div>
            </div>

            <div className="dot">
              <div className="block">
                <div className="triangle"></div>
                <img src={opquast} className="logoFormation" alt="Logo Opquast"/>
                <div className="details">
                  <h5 className="formationTitle">Certificat Opquast N° CNX2FA</h5>
                  <h5 className="formationTitle">Opquast (2021-26)</h5>
                  <p className="formationDescription">Maîtrise de la qualité en projet Web | <br/>
                  Score : <em>855 points sur 1000</em>
                  </p>
                  <p className="formationDescription">
                    Excellente connaissance des bonnes pratiques qualité Web et du vocabulaire associé. Compétences réelles et appréciables pour participer à des projets Web.  
                  </p>
                </div>                
              </div>
            </div>

            <div className="dot">
              <div className="block">
                <div className="triangle"></div>
                <img src={gobelins} className="logoFormation" alt="Logo Les Gobelins" />
                <div className="details">
                  <h5 className="formationTitle">UX Design (ref. MM75)</h5>
                  <h5 className="formationTitle">Les Gobelins (2017)</h5>
                  <p className="formationDescription">Contenu principal :<br/>
                    Méthodologie, personas, idéation,<br/>ergonomie, prototypage
                    <br/>
                    <br/>
                  </p>
                </div>                
              </div>
            </div>
          </div>
          <img src={aknowledgment} alt="" className="aknowledgment"/>    
        </section>

        <div className="formationSuite">
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
