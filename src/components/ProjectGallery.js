import React from "react";
import projectsData from "../data/ProjectCardData";
import ProjectCard from "./ProjectCard";
import "../css/projectgallery.css";

const Gallery = () => {
    return (
        <div className="section-gallery-container">
            {projectsData.map((project) => (
                <ProjectCard key={project.id} project={project} />
            ))}
        </div>
    );
};

export default Gallery;