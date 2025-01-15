import { FaProjectDiagram } from "react-icons/fa";
import Title from "./Title";
import Project1 from "../public/img/projects/Project1.jpeg";
import Project2 from "../public/img/projects/Project2.jpg";
import Project3 from "../public/img/projects/Project3.jpg";
import Project4 from "../public/img/projects/Project4.jpeg";
import Project5 from "../public/img/projects/Project5.jpg";
import Project6 from "../public/img/projects/Project6.jpg";
import Image from "next/image";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div className="wrapper">
      <Title text="Projects" icon={<FaProjectDiagram />} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
        <ProjectCard
          img={Project1.src}
          title="Blog-Platform"
          link="https://github.com/Yashd07/mern-blog"
        />

        <ProjectCard
          img={Project2.src}
          title="Memories-Social Media App"
          link="https://github.com/Yashd07/memories-mernapp"
        />

        <ProjectCard
          img={Project3.src}
          title="Nirvana Hotel Booking App"
          link="https://github.com/Yashd07/Nirvana-hotel-booking"
        />

        <ProjectCard
          img={Project4.src}
          title="Food Delivery Application"
          link="https://github.com/Yashd07/Food-delivery-application"
        />

        <ProjectCard
          img={Project5.src}
          title="Clothing Shop Website"
          link="https://github.com/Yashd07/e-commerce-reactjs"
        />

        <ProjectCard
          img={Project6.src}
          title="To Do List App"
          link="https://github.com/Yashd07/to-do-list"
        />

      </div>
    </div>
  );
};

export default Projects;
