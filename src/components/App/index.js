import React from 'react';

import Menu from '../Menu';
import Greetings from '../Greetings';
import About from '../About';

function App() {
  return (
    <div className="App">
      <Menu />
      <main>
        <Greetings />
        <About />
      </main>
    </div>
  );
}

export default App;
