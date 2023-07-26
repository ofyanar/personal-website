import React, { useEffect, useState } from 'react'
import { Box,  SimpleGrid } from '@chakra-ui/react'

import '../css/Portfolio.css'

import EV3 from './projects/screens/EV3';

const Portfolio = ({updateBody}) => {
    const p1 = 'https://firebasestorage.googleapis.com/v0/b/omeryanar-1b0a4.appspot.com/o/project-images%2Fev3.png?alt=media&token=d2e8a823-1302-4cd8-b664-f60833a9af70'; 
    const [randomImage, setRandomImage] = useState('');

    useEffect(() => {
        setRandomImage(getRandomImage());
    }, []);

    const handleClick = (e) => {
        e.preventDefault();
        updateBody(
                <EV3/>
            );
    }

    function getRandomImage() {
        const images = [
          'prt1',
          'prt2',
          'prt3',
          'prt4',
          'prt5',
          'prt6'
          // Add more image filenames here as needed
        ];
    
        const randomIndex = Math.floor(Math.random() * images.length);
        return images[randomIndex];
      }

    return (
        <div id = "Portfolio" className={`prt ${randomImage}`}>
            <p id = "title">My Projects</p>
            <SimpleGrid 
                columns = {2} 
                spacing = {10} 
                gridGap={50}
                className="sGrid">
                <Box className="sGrid b p1">
                    <Box className = "pr-title">
                            Proportional-Response Market Simulator
                    </Box>
                </Box>
                    
                <Box className="sGrid b p2">
                    <Box className = "pr-title">
                        Oaxaca.com Restaurant Website
                    </Box>
                </Box>
                    
                <Box id = "EV3" className="sGrid b p3" onClick={handleClick}>
                    <Box className = "pr-title">
                            EV3 Room Traverser
                    </Box>
                </Box>
            
                <Box className="sGrid b p4" style={{cursor:'default'}}>
                    <Box className = "pr-title">
                        To be Updated...
                    </Box>
                </Box>
            </SimpleGrid>
        </div>
    )
}

export default Portfolio;