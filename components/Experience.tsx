import Title from "./Title";

import { TbSchool } from "react-icons/tb";

import { SiBeats, SiDigikeyelectronics, SiVitess} from "react-icons/si";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  return (
    <div className="wrapper">
      <Title text="Education" icon={<TbSchool />} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <ExperienceCard
          title="VESIT"
          subTitle="MCA 2023 - 2025(Ongoing)"
          icon={<SiVitess />}
        />
        <ExperienceCard
          title="B N Bandodkar College"
          subTitle="BSC-CS 2020 - 2023"
          icon={<SiBeats />}
        />
        <ExperienceCard
          title="K J Somaiya College"
          subTitle="HSC-Science 2019 - 2020"
          icon={<SiDigikeyelectronics />}
        />

      </div>
    </div>
  );
};

export default Experience;
