import React, { useEffect, useState } from 'react'
import { Box, Center, Container, SimpleGrid } from '@chakra-ui/react'

import '../css/Portfolio.css'

const Portfolio = () => {

    const [randomImage, setRandomImage] = useState('');

    useEffect(() => {
        setRandomImage(getRandomImage());
    }, []);

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
                <Box className="sGrid b">
                    <p>Hello</p>
                </Box>
                    
                <Box className="sGrid b">
                    <p>Hello</p>
                </Box>
                    
                <Box className="sGrid b">
                    <p>Hello</p>
                </Box>

                <Box className="sGrid b">
                    <p>Hello</p>
                </Box>
            </SimpleGrid>
        </div>
    )
}

export default Portfolio;