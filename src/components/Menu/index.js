import React from 'react';

const Menu = () => {
  return (
    <header>
      <a href="#top">
        <div class="logo">
          <p class="logoPortfolio">Portfolio.</p>
          <p class="logoName">Alexandre Maspimby</p>
        </div>
      </a>
      <div class="separator"></div>
      <div class="nav-responsive">
        <div class="nav-toggle">
          <div class="nav-toggle-bar"></div>
        </div>
      </div>
      <nav class="navigation">
        <ul class="navList">
          <li class="navItem" ><a href="#top">&#9612; Home</a></li>
          <li class="navItem" id="apropos" ><a href="#propos">À propos</a></li>
          <li class="navItem" id="tech"><a href="#techniques">Compétences techniques</a></li>
          <li class="navItem" id="projects"><a href="#projets"> Projets</a></li>
          <li class="navItem" id="studies"><a href="#formation"> Formation</a></li>
          <li class="navItem" id="contactme"><a href="#contact"> Contact</a></li>
        </ul>
      </nav>
    </header>      
  );
}
export default Menu;
