import { styles } from "../styles";
import { SectionWrapper } from "../hoc";

const Hero = () => {
  return (
    <div className={`hero absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} gap-5 mt-10`}>
      <div>
        <h1 className={`${styles.heroHeadText} flex flex-row justify-center items-center`}>
          <span className='text-[#EF5350] mr-5'>Yeifran</span> Martinez
        </h1>
        <p className={`${styles.heroSubText} mt-2 text-black-100 flex flex-row justify-center items-center`}>
          Computer Science Student
        </p>
      </div>
    </div>
  );
};

export default SectionWrapper(Hero, "hero");