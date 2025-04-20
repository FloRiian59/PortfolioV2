import React from "react"
import styled from "styled-components"
import ProjectsData from '../data/ProjectData'
import ProjectCard from "./ProjectCard"

const SectionGallerie = styled.section`
display: flex;
justify-content: center;
width: 100%;
`
const ContainerStyle = styled.div`
display: grid;
justify-content: center;
justify-items: center;
gap: 35px;
margin: 10px 0 35px 0;
@media (min-width: 600px) {
    grid-template-columns: 45% 45%
}
@media (min-width: 768px) {
    grid-template-columns: 30% 30% 30%
}
@media (min-width: 1024px) {
    grid-template-columns: 25% 25% 25% 25%
}
`

const Gallery = () => {
    return (
        <SectionGallerie>
            <ContainerStyle>
                {ProjectsData.map((project) => (
                    <ProjectCard key={project.id} project={project}></ProjectCard>
                ))}
            </ContainerStyle>
        </SectionGallerie>
    )
}
export default Gallery