import { FaReact, FaSass, FaHtml5 } from "react-icons/fa";
import {
  SiTailwindcss,
  SiJavascript,
  SiFirebase,
  SiRedux,
} from "react-icons/si";

import { IoLogoCss3, IoLogoNodejs } from "react-icons/io";
const returnTechIcon = (techName) => {
  if (techName.toLowerCase() === "redux-toolkit") techName = "redux";
  const iconMap = {
    SiTailwindcss: <SiTailwindcss className="project-card-icon" />,
    SiJavascript: <SiJavascript className="project-card-icon" />,
    SiFirebase: <SiFirebase className="project-card-icon" />,
    SiRedux: <SiRedux className="project-card-icon" />,
    FaReact: <FaReact className="project-card-icon" />,
    FaSass: <FaSass className="project-card-icon" />,
    FaHtml5: <FaHtml5 className="project-card-icon" />,
    IoLogoCss3: <IoLogoCss3 className="project-card-icon" />,
    IoLogoNodejs: <IoLogoNodejs className="project-card-icon" />,
  };

  let updatedTechName;
  for (let item in iconMap) {
    if (item.toLowerCase().includes(techName.toLowerCase()))
      updatedTechName = item;
  }

  const Icon = iconMap[updatedTechName];
  return <>{Icon}</>;
};

export default returnTechIcon;
