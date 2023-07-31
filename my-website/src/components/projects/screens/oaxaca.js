import React, { useState, useEffect } from 'react';
import { Box,  Center } from '@chakra-ui/react';

import FadeInBox from '../../FadeInBox';

import { getDocs, collection } from '@firebase/firestore';
import {firestore} from '../../../firebase_setup/firebase';

import '../css/Oaxaca.css';
const Oaxaca = () => {
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
    const item1 = projects.find((project) => project.id.toLowerCase() === 'oaxaca');
    const desc = item1 ? item1.desc : '';
    const docDesc = item1 ? item1.docDesc : '';

    return(
        <div class = "oaxaca">
            <FadeInBox>

            <p id ="ox-title">Oaxaca.com Restaurant Website</p>

            <Center id = "ox-det">
              <Box id="ox-txt">
                  <p>DESCRIPTION</p>
                  {desc}<br/><br/>
                  You can find the source-code for this program <a target = "_blank" href = "https://github.com/ofyanar/Oaxacacom-SYP">here</a>.
              </Box>
            </Center>

            <Center>
              <Box id = "ox-img" ></Box>
            </Center>

            <p id = "dc-title">PROGRAM DOCUMENTATION</p>
            
            <Center id = "dc">
              <Box id="dc-desc">{docDesc}</Box>
            </Center>

            <Center>
              <Box id='dc-link'>
                Click <a target='_blank' href='https://firebasestorage.googleapis.com/v0/b/omeryanar-1b0a4.appspot.com/o/project-details%2Foaxaca%2FOaxaca-com-Documentation.pdf?alt=media&token=b92f2e78-8b21-4afc-9c20-c9ff587358fb'> here </a> 
                to view the Oaxaca.com Documentation.
              </Box>

            </Center>













            </FadeInBox>
        </div>
    );
}

export default Oaxaca;