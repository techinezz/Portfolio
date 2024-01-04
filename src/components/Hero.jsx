import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { github, linkedin } from "../assets";

const Hero = () => {
  return (
    <div className={`hero top-[120px] max-w-7xl mx-auto ${styles.paddingX} gap-5 mt-10 flex flex-col items-center`}>
      <h1 className={`${styles.heroHeadText} flex flex-row justify-center items-center`}>
        <span className='text-[#EF5350] mr-5'>Yeifran</span> Martinez
      </h1>
      <p className={`${styles.heroSubText} mt-2 text-black-100 flex flex-row justify-center items-center`}>
        Computer Science Student
      </p>
      <div className="flex justify-between w-full max-w-[7rem] mt-4">
        <div onClick={() => window.open("https://github.com/techinezz")} className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'>
          <img src={github} alt="Github" className="w-1/2 h-1/2 object-contain" />
        </div>
        <div onClick={() => window.open("https://www.linkedin.com/in/yeifran-martinez-889343291/")} className=' w-10 h-10 flex justify-center items-center cursor-pointer'>
          <img src={linkedin} alt="linkedin" className="w-12 h-12 object-contain rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Hero, "hero");