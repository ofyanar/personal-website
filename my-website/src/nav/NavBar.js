import React from 'react';
import { Center } from '@chakra-ui/react';
import MyName from './MyName';
import IconLinks from './IconLinks';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faIdCard, faDiagramProject, faDownload } from '@fortawesome/free-solid-svg-icons';

import './NavBar.css'; // Import your CSS file

const NavBar = ({scroll, updateBody, body, df}) => {
  const cv_url = "https://firebasestorage.googleapis.com/v0/b/omeryanar-1b0a4.appspot.com/o/CV%20-%20General.pdf?alt=media&token=77b1640a-8277-4d39-a41b-fdbec815b224";

  const handleClick = (e) => {
    e.preventDefault();
    if (body !== df) {
      updateBody(df);
    }
    setTimeout(() => {
      if (e.target.id === 'abtt'){
        scroll('About');
      } else if (e.target.id === 'prt'){
        scroll('Portfolio');
      }
    }, 20);

  };
  
  return (
    <nav className="navbar">
      <MyName/>
        <Center>
          <ul className="nav-links">
              <li>
                <a href="">Home <FontAwesomeIcon icon={faHouse} /></a>
              </li>
              <li>
                <a id = "abtt" onClick={handleClick}>About <FontAwesomeIcon icon={faIdCard} /></a>
              </li>
              <li>
                <a id = "prt" onClick = {handleClick}>Portfolio <FontAwesomeIcon icon={faDiagramProject} /></a>
              </li>
              <li>
                <a href={cv_url} target="_blank" rel="noreferrer, noopener" >CV <FontAwesomeIcon icon={faDownload} /></a>
              </li>
          </ul>
        </Center>

        <IconLinks/>
    </nav>
  );
};

 /**<li><a onClick={() => scroll('Contact')}>Contact <FontAwesomeIcon icon={faEnvelope} /></a></li>**/

export default NavBar;