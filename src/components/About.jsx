import React from 'react'
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { technologies } from '../constants';
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div variants={fadeIn("right", "spring", index * 0.5, 0.75)} className='w-full red-orange-gradient p-[1px] rounded-[20px] shadow-card'>
      <div options={{ max: 45, scale: 1, speed: 450,}}
        className='bg-black-100 rounded-[20px] py-5 px-12 min-h-[280px] flex flex-col justify-center items-center '
      >
        <img src={icon} alt='icon' className='w-16 h-16 object-contain'/>

        <h3 className='text-white text-[20px] font-bold text-center mt-5'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="flex flex-row justify-center items-center">
        <p className={styles.sectionHeadText}>Introduction</p>
      </motion.div>

      <motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-4 text-black text-[20px] leading-[30px] text-center'>
      An ambitious student at Queens College, passionate about building programming projects and learning new technologies. 
      Eager to embark on a career in tech. Also intrigued by the field in machine learning and AI.
      </motion.p>

      <div className='mt-20 gap-10 flex justify-center flex-wrap'>
        {technologies.map((technology, index) => (
          <ServiceCard key={technology.title} index={index} {...technology} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");