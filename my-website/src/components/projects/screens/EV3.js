import React, { useState, useEffect } from 'react';
import { Box,  Center, SimpleGrid } from '@chakra-ui/react';

import { getDocs, collection } from '@firebase/firestore';
import {firestore} from '../../../firebase_setup/firebase';

import '../css/EV3.css';
const EV3 = () => {
  const prImage = 'https://firebasestorage.googleapis.com/v0/b/omeryanar-1b0a4.appspot.com/o/project-images%2Fev3.png?alt=media&token=d2e8a823-1302-4cd8-b664-f60833a9af70';


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
            <p id ="ev3-title">EV3 Room Traverser</p>
            <SimpleGrid class = "ev3 desc" columns={2}>
              <div 
                class = "ev3 desc img" ></div>
              <div 
                class="ev3 desc txt">
                  <h2>Description</h2>
                  {desc}
                  </div>
            </SimpleGrid>
        </div>
)};

export default EV3;