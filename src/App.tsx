import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import WhatIDo from './components/WhatIDo/WhatIDo';
import './styles/globals.css';
import Portfolio from './components/Portifolio/Portfolio';
import Contact from './components/Contact/Contact';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <WhatIDo />
        {/* Outras seções serão adicionadas aqui */}
      
        
        <section id="portfolio" className="section space-bg">
          <Portfolio></Portfolio>
        </section>
        
        <section id="contact" className="section space-bg">
          <div className="container">
            <Contact></Contact>
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;