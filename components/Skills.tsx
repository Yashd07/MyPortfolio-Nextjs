import { GiSkills } from "react-icons/gi";
import Title from "./Title";
import SkillsInput from "./SkillsInput";

const Skills = () => {
  return (
    <div className="wrapper">
      <Title text="Skills" icon={<GiSkills />} />
      <div className="flex gap-4 flex-wrap">
        <SkillsInput title="Javascript" link="https://developer.mozilla.org/en-US/docs/Web/JavaScript"/>
        <SkillsInput title="Java" link="https://www.java.com/"/>
        <SkillsInput title="Reactjs" link="https://react.dev/" />
        <SkillsInput title="Springboot" link="https://spring.io/projects/spring-boot/" />
        <SkillsInput title="Nextjs" link="https://nextjs.org/" />
        <SkillsInput title="Nodejs" link="https://nodejs.org/en" />
        <SkillsInput title="Expressjs" link="https://expressjs.com/" />
        <SkillsInput title="MongoDB" link="https://www.mongodb.com/" />
        <SkillsInput title="Mysql" link="https://www.mysql.com/" />
        <SkillsInput title="Typescript" link="https://www.typescriptlang.org/"/>
        <SkillsInput title="Redux Toolkit" link="https://redux.js.org/" />
        <SkillsInput title="Bootstrap" link="https://getbootstrap.com/" />
        <SkillsInput title="Tailwindcss" link="https://tailwindcss.com/" />
        <SkillsInput title="HTML5" link="https://developer.mozilla.org/en-US/docs/Glossary/HTML5"/>
        <SkillsInput title="CSS3" link="https://developer.mozilla.org/en-US/docs/Web/CSS"/>
        <SkillsInput title="VS Code" link="https://code.visualstudio.com/" />
        <SkillsInput title="Git" link="https://git-scm.com/" />
        <SkillsInput title="Github" link="https://github.com/" />
        <SkillsInput title="Figma" link="https://www.figma.com/" />
        <SkillsInput title="Canva" link="https://www.canva.com/" />
        <SkillsInput title="Vercel" link="https://vercel.com/" />
        <SkillsInput title="netlify" link="https://www.netlify.com/" />
      </div>
    </div>
  );
};

export default Skills;
