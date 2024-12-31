import React from "react";
import "./projects.css";
import { iconClass } from "@/config/projectsAll";

type projectsProps = {
  title: string;
  imgSrc: string;
  alt: string;
  description: string;
  features: string[];
  technologiesIcon: iconClass[];
  url_back_end: string;
  url_front_end: string;
  url_project_deploy?: string;
};

const Projects = (props: projectsProps) => {
  return (
    <div className="project_container">
      <div className="project_specifications">
        <h4>{props.title}</h4>
        <div className="project_icons">
          {props.technologiesIcon.map((icon, index) => {
            const Icon = icon.icon;
            return <Icon key={index} className={`${icon.classIcon} icon`} />;
          })}
        </div>

        <div className="project_description">
          <p>{props.description}</p>

          <ul>
            {props.features.map((feature, index) => {
              return <li key={index}>{feature}</li>;
            })}
          </ul>
        </div>
      </div>
      <div className="project_links">
        <a href={props.url_back_end} target="_blank" className="project_btn">
          Repositorio Back-End
        </a>
        <a href={props.url_front_end} target="_blank" className="project_btn">
          Repositorio Front-End
        </a>
      </div>
    </div>
  );
};

export default Projects;
