import React from 'react';
import { useState } from 'react';
import { HashLink } from 'react-router-hash-link';

const Menu = () => {

  // Display toggle + menu in responsive design
  const [showMenu, setMenu] = useState(false);

	const handleShowMenu = () => {
		setMenu(!showMenu)
	};

  return (
    <header>
      <HashLink smooth to="/top/#top">
        <div className="logo">
          <p className="logoPortfolio">Portfolio.</p>
          <p className="logoName">Alexandre Maspimby</p>
        </div>
      </HashLink>
      <div className="separator"></div>
      <div className="nav-responsive">
        <div className={`nav-toggle ${showMenu ? "expanded " : "hidenav"}`} onClick={handleShowMenu}>
          <div className="nav-toggle-bar"></div>
        </div>
      </div>
      {/* Define when to display responsive design menu*/}
      <nav className={`navigation ${showMenu ? "expanded" : "hidenav" }`}>
        <ul className="navList">
          <li className="navItem">
           <HashLink smooth to="/top/#top" >&#9612; Home</HashLink>
          </li>

          <li className="navItem">
            <HashLink smooth to="/apropos/#propos">À propos</HashLink>
          </li>

          <li className="navItem">
            <HashLink smooth to="/techniques/#techniques">Compétences techniques</HashLink>
          </li>

          <li className="navItem">
            <HashLink smooth to="/projets/#projets">Projets</HashLink>
          </li>

          <li className="navItem">
            <HashLink smooth to="/formation/#formation">Formation</HashLink>
          </li>

          <li className="navItem">
            <HashLink smooth to="/contact/#contact">Contact</HashLink>
          </li>
        </ul>

      </nav>
    </header>      
  );
}
export default Menu;
