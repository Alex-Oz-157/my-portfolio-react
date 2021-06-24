import React from 'react';
import { useState } from 'react';

const Menu = () => {

  const [showMenu, setMenu] = useState(false);

	const handleShowMenu = () => {
		setMenu(!showMenu)
	};

  return (
    <header>
      <a href="#top">
        <div className="logo">
          <p className="logoPortfolio">Portfolio.</p>
          <p className="logoName">Alexandre Maspimby</p>
        </div>
      </a>
      <div className="separator"></div>
      <div className="nav-responsive">
        <div className="nav-toggle" onClick={handleShowMenu}>
          <div className="nav-toggle-bar"></div>
        </div>
      </div>
      <nav className={`navigation ${showMenu ? "expanded" : " " }`}>
        <ul className="navList">
          <li className="navItem" ><a href="#top">&#9612; Home</a></li>
          <li className="navItem" id="apropos" ><a href="#propos">À propos</a></li>
          <li className="navItem" id="tech"><a href="#techniques">Compétences techniques</a></li>
          <li className="navItem" id="projects"><a href="#projets"> Projets</a></li>
          <li className="navItem" id="studies"><a href="#formation"> Formation</a></li>
          <li className="navItem" id="contactme"><a href="#contact"> Contact</a></li>
        </ul>
      </nav>
    </header>      
  );
}
export default Menu;
