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
    
    const maxDisplayWidth = 950;

    return (
        <div>
      {windowWidth > maxDisplayWidth ? (
            <div class="head-item1">
                <a href=""><section id="myName">Omer Yanar</section></a>
            </div>
      ) : null}
    </div>

        
    )
}

export default MyName;