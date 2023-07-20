import React from 'react';
import './css/App.css';
import NavBar from './nav/NavBar';
import AboutMe from './components/AboutMe';
import { Center, Square, Circle, Box } from '@chakra-ui/react';
import ButtonExample from './ButtonExample';
import FadeInBox from './components/FadeInBox';

const App = () => {
  return (
    <div className="App">
      <NavBar/>
      <FadeInBox>
        <AboutMe/>
      </FadeInBox>
      <FadeInBox>
        <AboutMe/>
      </FadeInBox>
      <FadeInBox>
        <AboutMe/>
      </FadeInBox>
        
    </div>
  );
}

export default App;
