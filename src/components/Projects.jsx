import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("right", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-black-100 p-5 rounded-2xl sm:w-[360px] w-full'
>
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div onClick={() => window.open(source_code_link, "_blank")} className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'>
              <img src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-5 flex flex-col items-center text-center'>
          <div onClick={() => window.open(source_code_link, "_blank")} className='flex justify-center items-center cursor-pointer'>
          <h3 className='text-white font-bold text-[24px] hover:text-red-400'>{name}</h3>
          </div>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2 justify-center'>
        {tags.map((tag) => (
          <p
          key={`${name}-${tag.name}`}
          className={`text-[14px] ${tag.color}`}
          >
          {tag.name}
          </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="flex flex-row justify-center items-center">
        <h2 className={`${styles.sectionHeadText}`}>Projects</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-3 text-black text-[20px] leading-[30px] text-center'>
        These projects reflect my personal interests and mark the beginning of an exciting journey in software development. 
        Driven by a passion for creating intuitive and engaging user experiences, I am eager to delve deeper into this field. 
        I look forward to exploring cutting-edge technologies and to continuously refine my skills in responsive design, 
        performance optimization, and accessibility. By learning from experienced software engineers and staying updated with 
        industry trends, I aim to contribute effectively to innovative projects and deliver high-quality solutions that delight 
        users and meet business goals.
        </motion.p>
      </div>

      <div className='mt-20 gap-7 flex justify-center flex-wrap'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Projects, "projects");