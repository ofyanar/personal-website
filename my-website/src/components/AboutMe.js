import React, { useEffect, useState } from 'react'
import { Box, Center } from '@chakra-ui/react'
import '../css/AboutMe.css'
import FadeInBox from './FadeInBox';

const AboutMe = () => {
    const [randomImage, setRandomImage] = useState('');

    useEffect(() => {
        setRandomImage(getRandomImage());
    }, []);

    function getRandomImage() {
        const images = [
          'bg1',
          'bg2',
          'bg3',
          'bg4',
          'bg5',
          'bg6'
          // Add more image filenames here as needed
        ];
    
        const randomIndex = Math.floor(Math.random() * images.length);
        return images[randomIndex];
      }

    return(
        <div id="About"> 
            <FadeInBox>
            <Box className = {`abt-me-box1 ${randomImage}`}>
            <p id = "abt">About Me</p>
            <Center id = "abt-me-cntr">
                <FadeInBox>
                    <Box 
                        id = "abt-me-box2" 
                        borderRadius= 'lg'
                    >
                        Computer Science BSc. graduate from Royal Holloway, University of London. 
                        Experienced in using various Software Engineering tools, processes, and 
                        techniques in addition to being able to write good code
                        as a part of a team that works when delivered into a client environment. 
                        Driven to learn for and about any problem
                        encountered, and apply those discoveries in order to solve them in a timely fashion.
                        <br/><br/>
                        I am an individual with a strong commitment to continuous learning. 
                        I believe that success is not merely a product of talent but the result 
                        of persistent and consistent effort. I actively seek opportunities 
                        to learn from those with greater experience and expertise, and I find genuine joy in this pursuit.
                        <br/><br/>
                        Whilst you're here you should check out my
                        portfolio 🧐.
                    </Box>
                </FadeInBox>
                
            </Center>
            </Box>
            </FadeInBox>
        </div>
        
    )
}

export default AboutMe;