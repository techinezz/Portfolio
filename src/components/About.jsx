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
        <p className={styles.sectionHeadText}>About</p>
      </motion.div>

      <motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-4 text-black text-[20px] leading-[30px] text-center'>
      An ambitious student at Queens College, I am passionate about building programming projects and continuously learning new technologies.
      My journey in tech is fueled by a deep curiosity and a drive to solve complex problems through innovative solutions. 
      Eager to embark on a career in the tech industry, I am committed to honing my skills in both front-end and back-end development. 
      Additionally, I am intrigued by the rapidly evolving fields of machine learning and AI, and I am enthusiastic about the potential 
      of these technologies to revolutionize various industries. My goal is to integrate my technical expertise and creativity to develop 
      impactful projects that can make a meaningful difference.
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