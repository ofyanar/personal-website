import { chakra } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import '../css/AboutMe.css';

// Create a custom motion component with the 'Box' element as the base
const MotionBox = motion(chakra.div);

const FadeInBox = ({ children }) => {
  // Define the animation properties
  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <MotionBox
      initial="hidden"
      animate="visible"
      variants={fadeInVariants}
      transition={{ duration: 2 }} // Set the duration of the fade-in animation
    >
      {children}
    </MotionBox>
  );
};

export default FadeInBox;