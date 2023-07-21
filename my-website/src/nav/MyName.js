import React, { useEffect, useState } from 'react';
import { Center } from '@chakra-ui/react';

const MyName = () => {
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
    
    const maxDisplayWidth = 980;

    return (
        <div class="head-item1">
      {windowWidth > maxDisplayWidth ? (
                <a href=""><section id="myName">Omer Yanar</section></a>
      ) : null}
    </div>

        
    )
}

export default MyName;