import React from 'react';

import Menu from '../Menu';
import Greetings from '../Greetings';
import About from '../About';
import Skills from '../Skills';
import Projects from '../Projects';
import Formation from '../Formation';
import Contact from '../Contact';
import Footer from '../Footer';

import cardsData from '../../data/cards';

const App = () => {

  return (
    <div className="App">
      <Menu />
      <main>
        <Greetings />
        <About />
        <Skills />
        <Projects cards={cardsData}/>
        <Formation />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
