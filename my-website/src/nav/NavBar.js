import React from 'react';
import { Center } from '@chakra-ui/react';
import MyName from './MyName';
import IconLinks from './IconLinks';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faIdCard, faDiagramProject, faEnvelope, faDownload } from '@fortawesome/free-solid-svg-icons';

import './NavBar.css'; // Import your CSS file

const NavBar = ({scroll}) => {
  return (
    <nav className="navbar">
      <MyName/>
        <Center>
          <ul className="nav-links">
              <li>
                <a href="">Home <FontAwesomeIcon icon={faHouse} /></a>
              </li>
              <li>
                <a onClick={() => scroll('About')}>About <FontAwesomeIcon icon={faIdCard} /></a>
              </li>
              <li>
                <a onClick={() => scroll('Portfolio')}>Portfolio <FontAwesomeIcon icon={faDiagramProject} /></a>
              </li>
              <li>
                <a href="/Contact">Contact <FontAwesomeIcon icon={faEnvelope} /></a>
              </li>
              <li>
                <a href="" target="_blank">CV <FontAwesomeIcon icon={faDownload} /></a>
              </li>
          </ul>
        </Center>

        <IconLinks/>
    </nav>
  );
};

export default NavBar;