import React from 'react';
import { useState } from 'react';

import Menu from '../Menu';
import Greetings from '../Greetings';
import About from '../About';
import Skills from '../Skills';
import Projects from '../Projects';
import Modals from '../Modals';
import Formation from '../Formation';
import Contact from '../Contact';
import Footer from '../Footer';

import cardsData from '../../data/cards';
import modalsData from '../../data/modals';

const App = () => {

  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="App">
      <Menu />
      <main>
        <Greetings />
        <About />
        <Skills />
        <Projects cards={cardsData}/>
        {openModal && <Modals modals={modalsData} closeModal={setOpenModal}/>}
        <Formation />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
