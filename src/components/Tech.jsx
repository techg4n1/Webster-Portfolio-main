import React from "react";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import { motion } from "framer-motion";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div>
      <motion.div variants={textVariant()}>  
    <h2 className={`${styles.sectionHeadText} text-center`}>
        Our Technology Expertise        
    </h2>  
      </motion.div>
      <br></br>
    <div className='flex flex-row flex-wrap justify-center gap-10'>
       {technologies.map((technology) => (
    <div className='w-28 h-28' key={technology.name}>
      <BallCanvas icon={technology.icon} />
    </div>
  ))}
    </div>
   </div>
  
  );
};

export default SectionWrapper(Tech, "");
