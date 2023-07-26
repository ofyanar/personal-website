import React, { useEffect, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Center } from '@chakra-ui/react';

const IconLinks = () => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
          setWindowWidth(window.innerWidth);
        };
    
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
    }, []);
    
    const maxDisplayWidth = 900;
    return (
      <div>
      {windowWidth > maxDisplayWidth ? (
            <div className="head-item3">
            <Center className = "c-item">
                <a title="LinkedIn" href="https://linkedin.com/in/omer-yanar-864a17231/" target="_blank" >
                  <FontAwesomeIcon className = "linkedin-icon" icon={faLinkedin} />
                </a>
            </Center>
            <Center className = "c-item">
                <a title="Github" href="https://github.com/ofyanar" target="_blank">
                  <FontAwesomeIcon className = "github-icon" icon={faGithub} />
                </a>
            </Center>
            
		    </div>
      ) : null}
    </div>
          
    )
}

export default IconLinks;