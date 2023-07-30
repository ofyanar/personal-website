import React, { useState, useEffect } from 'react';
import { Box,  Center, SimpleGrid } from '@chakra-ui/react';

import FadeInBox from '../../../components/FadeInBox';

import { getDocs, collection } from '@firebase/firestore';
import {firestore} from '../../../firebase_setup/firebase';

import '../css/EV3.css';
const EV3 = () => {
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
  const item1 = projects.find((project) => project.id.toLowerCase() === 'ev3');
  const desc = item1 ? item1.desc : '';
  const legoMindstorms = item1 ? item1['lego-mindstorms'] : '';
  const sensors = item1 ? item1.sensors : '';
    return(
        <div class = "ev3">
          <FadeInBox>
            <p id ="ev3-title">EV3 Room Traverser</p>
            <Center id = "ev3-det">
              <Box id="det-txt">
                  <p>DESCRIPTION</p>
                  {desc}
              </Box>
            </Center>
            <Center>
              <Box id = "det-img" ></Box>
            </Center>
            <p id = "path-title">TRAVERSAL PATH</p>
            <Center>
              <SimpleGrid id="det-path" columns={2} >
                  <Box id = "det-path1"></Box>
                  <Box id = "det-path2"></Box>
              </SimpleGrid>
            </Center>
            <p id = "fd-title">MORE ABOUT EV3</p>
            <Center marginTop={10}>
              <SimpleGrid id = "further-det" columns={2}>
                <Center><Box id = "fd-lm"><p>Lego Mindstorms</p>{legoMindstorms}</Box></Center>
                <Center><Box id = "fd-ss"><p>Sensors</p>{sensors}</Box></Center>
              </SimpleGrid>
            </Center>
            <p id = "fc-title">PROGRAM CONTROL-FLOW</p>
            <Center>
              <Box id = "flow-chart"></Box>
            </Center>
          </FadeInBox>
        </div>
)};

export default EV3;