import { styles } from "../styles";
import { SectionWrapper } from "../hoc";

const Hero = () => {
  return (
      <div
        className={`hero absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Yeifran</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            A Computer Science Student
          </p>
        </div>
      </div>
  );
};

export default SectionWrapper(Hero, "hero");