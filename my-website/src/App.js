import React from 'react';
import './css/App.css';
import NavBar from './nav/NavBar';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';

const App = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start' 
    });
  };

  return (
    <div className="App">
      <NavBar scroll = {scrollToSection}/>
      <div id="About">
          <AboutMe />
      </div>

     
      <Portfolio />
      <Footer/>
        
    </div>
  );
}

export default App;
