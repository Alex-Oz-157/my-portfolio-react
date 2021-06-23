import React from 'react';
import {Switch, NavLink, Link } from 'react-router-dom';

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
          <Switch>
          <Link to="/home"><li class="navItem" ><a href="#top">&#9612; Home</a></li></Link>

          <li class="navItem" id="apropos" ><Link to="/apropos"><a href="#propos">À propos</a></Link></li>

          <li class="navItem" id="tech"><Link to="/skills"><a href="#techniques">Compétences techniques</a></Link></li>
          <li class="navItem" id="projects"><Link to="/projects"><a href="#projets"> Projets</a></Link></li>
          <li class="navItem" id="studies"><Link to="/formation"><a href="#formation"> Formation</a></Link></li>
          <li class="navItem" id="contactme"><Link to="/contact"><a href="#contact"> Contact</a></Link></li>
          </Switch>
        </ul>
      </nav>
    </header>      
  );
}
export default Menu;
