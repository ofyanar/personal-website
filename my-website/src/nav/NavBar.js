import React from 'react';
import { Center, Square, Circle, Box } from '@chakra-ui/react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faIdCard, faDiagramProject, faEnvelope, faDownload } from '@fortawesome/free-solid-svg-icons';

import MyName from './MyName';
import IconLinks from './IconLinks';
import './NavBar.css'; // Import your CSS file

const NavBar = () => {
  return (
    <nav className="navbar">
      
      <MyName/>
        <Center>
          <ul className="nav-links">
              <li>
                <a href="/">Home <FontAwesomeIcon icon={faHouse} /></a>
              </li>
              <li>
                <a href="/About">About Me <FontAwesomeIcon icon={faIdCard} /></a>
              </li>
              <li>
                <a href="/Portfolio">Portfolio <FontAwesomeIcon icon={faDiagramProject} /></a>
              </li>
              <li>
                <a href="/Contact">Contact Me <FontAwesomeIcon icon={faEnvelope} /></a>
              </li>
              <li>
                <a href="/CV">CV <FontAwesomeIcon icon={faDownload} /></a>
              </li>
          </ul>
        </Center>

        <IconLinks/>
    </nav>
  );
};

export default NavBar;