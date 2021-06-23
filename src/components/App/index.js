import React from 'react';

import Menu from '../Menu';
import Greetings from '../Greetings';
import About from '../About';
import Formation from '../Formation';
import Projects from '../Projects';
import Contact from '../Contact';
import Footer from '../Footer';

function App() {
  return (
    <div className="App">
      <Menu />
      <main>
        <Greetings />
        <About />
        <Projects />
        <Formation />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
