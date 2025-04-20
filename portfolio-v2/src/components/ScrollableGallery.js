import React from "react";
import projectsData from "../data/ProjectData";
import ProjectCard from "./ProjectCard";
import styled from "styled-components";

const GalleryContainerStyled = styled.div`
display: grid;
grid-template-columns: repeat(8, 8%); 
width: 100%;
justify-items: center;
justify-content: center;
gap: 50px 0px;
z-index: 150;
margin-top: 150px;
@media (max-width: 1200px) { 
  grid-template-columns: repeat(8, 12%); 
  margin-left: 15%;
    }
@media (max-width: 1024px) { 
  grid-template-columns: repeat(8, 24%); 
  margin-left: 50%;
    }
@media (max-width: 768px) { 
  grid-template-columns: repeat(8, 50%); 
  margin-left: 100%;
    }
@media (max-width: 768px) { 
  grid-template-columns: repeat(8, 40%); 
  margin-left: 130%;
    }
`

const ScrollableGallery = () => {
  return (
    <GalleryContainerStyled>
      {projectsData.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </GalleryContainerStyled>
  )
}

export default ScrollableGallery
