import React, { useState, useEffect } from 'react';
import { Box,  Center, Fade, SimpleGrid } from '@chakra-ui/react';

import FadeInBox from '../../../components/FadeInBox';
import YouTubePlayer from '../../../YoutubePlayer';

import { getDocs, collection } from '@firebase/firestore';
import {firestore} from '../../../firebase_setup/firebase';

import '../css/Presponse.css';

const Presponse = () => {
    const videoId = 'JNo_wwiYt0k';
    const [projects, setProjects] = useState([]);

    useEffect(() => {
      // Function to fetch data from Firestore
      const fetchProjects = async () => {
        try {
          const querySnapshot = await getDocs(collection(firestore, 'projects'));
          const projectsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
          setProjects(projectsData);
        } catch (error) {
          console.log("Error fetching projects:", error);
        }
      };
  
      fetchProjects();
    }, []);
  
    // Assuming you want to access the project with the key 'EV3'
    const item1 = projects.find((project) => project.id.toLowerCase() === 'presponse');
    const details = item1 ? item1.details : '';
    const progDesc = item1 ? item1['prog-desc'] : '';
    const sePractice = item1 ? item1['se-practice'] : '';

    return (
        <div class = "presponse">
            <FadeInBox>
             <p id ="pr-title">Proportional-Response Market Simulator</p>

             <Center id = "pr-det">
                <Box id="pr-txt">
                  <p>DESCRIPTION</p>
                  {details}
                </Box>
            </Center>

            <Center>
            <Box id="vid">
                    <Box id="pdesc">
                        <p>THE PROGRAM</p>
                        {progDesc}
                    </Box>
                <Center>
                    <div style={{ width: '80%', margin: '0 auto' }}>
                        <YouTubePlayer videoId={videoId} />
                    </div>
                </Center>
                
            </Box>
            </Center>

            <Center>
                <Box id="se-pr">
                    <p>SOFTWARE ENGINEERING PRACTICES</p>
                    {sePractice}
                </Box>
            </Center>

            </FadeInBox>
        </div>
    );

}


export default Presponse;