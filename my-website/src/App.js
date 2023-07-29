import React, { useState, useEffect } from 'react';
import './css/App.css';
import NavBar from './nav/NavBar';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import Top from './components/Top';
 
function App() {
  const updateBody =(newBody) => {
    setBody(newBody);
  };

  const defaultBody = (
    <>
      <AboutMe/>
      <Portfolio updateBody = {updateBody}/>
    </>
  );


  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start' 
    });
  };

  const [body, setBody] = useState(defaultBody);

  return (
    <div className="App">
      <NavBar scroll = {scrollToSection} updateBody = {updateBody} body = {body} df = {defaultBody}/>
        {body}
      <Footer/>
      <Top/>
        
    </div>
  );
}

export default App;
