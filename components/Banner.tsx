import Image from "next/image";
import ProfileImg from "../public/img/profileImg.jpg";

const Banner = () => {
  return (
    <div className="wrapper flex flex-col md:flex-row items-center gap-10">
      {/* Image */}
      <div className="w-44 h-44 rounded-full bg-black">
        <Image
          className="w-full h-full rounded-full border-[1px] border-indigo-700 p-2 object-cover"
          src={ProfileImg}
          alt="ProfileImg"
        />
      </div>
      {/* Description */}
      <div className="w-3/4 flex flex-col items-center md:items-start    gap-2">
        <h1 className="text-5xl font-bold text-white">YASH DESAI.👨🏻‍💻</h1>
        <h3 className="text-xl md:text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-red-300 to-indigo-300 tracking-wide">
          Full Stack Developer
        </h3>
        <p className="text-base tracking-wide text-center md:text-left">
          As a passionate web developer pursuing a MCA from VESIT,
           I specialize in the <strong>MERN stack </strong>(MongoDB, Express.js, React, Node.js) 
           and excel in developing responsive single-page and scalable web applications.
            In my role as <strong>Placement Coordinator at VESIT</strong>, I facilitate career opportunities
             for my peers and connect students with potential employers. I thrive in dynamic, 
             collaborative environments and am committed to staying current with the latest 
             industry trends and technologies.
        </p>
      </div>
    </div>
  );
};

export default Banner;
