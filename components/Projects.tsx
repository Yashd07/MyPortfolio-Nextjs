import { FaProjectDiagram } from "react-icons/fa";
import Title from "./Title";
import Project1 from "../public/img/projects/Project1.jpg";
import Project2 from "../public/img/projects/Project2.jpg";
import Project3 from "../public/img/projects/Project3.jpg";
import Project4 from "../public/img/projects/Project4.jpg";
import Image from "next/image";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div className="wrapper">
      <Title text="Projects" icon={<FaProjectDiagram />} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
      <ProjectCard
          img={Project4.src}
          title="Memories-Social Media App"
          link="https://memories-yash.vercel.app/"
        />
        
        <ProjectCard
          img={Project3.src}
          title="Clothing Website"
          link="https://myclothingstorewebsite.netlify.app/"
        />
        <ProjectCard
          img={Project2.src}
          title="Recipe App"
          link="https://edamamrecipeapp.netlify.app/"
        />
        <ProjectCard
          img={Project1.src}
          title="TO DO Tracker"
          link="https://to-do-list-ebon-seven.vercel.app/"
        />
        
      </div>
    </div>
  );
};

export default Projects;
