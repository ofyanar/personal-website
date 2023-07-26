import React, {useState} from 'react';
import './css/App.css';
import NavBar from './nav/NavBar';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import Top from './components/Top';

const App = () => {
  const updateBody =(newBody) => {
    setBody(newBody);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start' 
    });
  };

  const [body, setBody] = useState(
    <>
      <AboutMe/>
      <Portfolio updateBody = {updateBody}/>
    </>
  );

  return (
    <div className="App">
      <NavBar scroll = {scrollToSection}/>
      {body}
      <Footer/>
      <Top/>
        
    </div>
  );
}

export default App;
