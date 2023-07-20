import React from 'react'
import { Container, Box, Center } from '@chakra-ui/react'
import '../css/AboutMe.css'

const AboutMe = () => {
    return(
        <Box id = "abt-me-box1">
            <Center id = "abt-me-cntr">
                <Box id = "abt-me-box2" textShadow ="1px 1px #000000">
                    Computer Science BSc. graduate from Royal Holloway, University of London. 
                    Experienced in using various Software Engineering tools, processes, and 
                    techniques in addition to being able to write good code
                    as a part of a team that works when delivered into a (emulated) client environment. 
                    Driven to learn for and about any problem
                    encountered, and apply those discoveries in order to solve them in a timely fashion.
                    <br/><br/>
                    I am an individual with a strong commitment to continuous learning. 
                    I believe that success is not merely a product of talent but the result 
                    of persistent and consistent effort. I actively seek opportunities 
                    to learn from those with greater experience and expertise, and I find genuine joy in this pursuit.
                    <br/><br/>
                    Whilst you're here you should check out my
                    portfolio 🧐. Feel free to shoot me a
                    message or to view/download my CV 🚀.
                </Box>
            </Center>
        </Box>
        
    )
}

export default AboutMe;