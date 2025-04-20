import Modal from "react-modal"
import React, { useState } from "react"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import styled from "styled-components"
import '../css/projectmodal.css'

Modal.setAppElement("#root")

const ProjectCardStyle = styled.div`
position: relative;
border-radius: 10px;
cursor: pointer;
transition: transform 0.2s ease, border-color 0.3s ease;
height: fit-content;
&:hover {
  transform: scale(1.05) translateY(-20px);
}
`
const IconContainer = styled.div`
position: relative;
&:hover::after {
  opacity: 1;
  transform: translateY(-50px);
}
&::after {
  content: "";
  width: 82px;
  height: 42px;
  background-size: cover;
  position: absolute;
  bottom: 38px;
  opacity: 0;
  transition: opacity 0.3s ease, transform 0.3s ease;
}
`
const GithubIconContainer = styled(IconContainer)`
&::after {
  background-image: url("../assets/images/icons/Icon-Bulle-Github.png");
  left: 10px;
}
`
const DemoIconContainer = styled(IconContainer)`
&::after {
  background-image: url("../assets/images/icons/Icon-Bulle-Demo.png");
  left: 70px;
}
`
const ModalIconContainer = styled(IconContainer)`
&::after {
  background-image: url("../assets/images/icons/Icon-Bulle-Modal.png");
  left: 130px;
}
`
const Icon = styled.img`
position: absolute;
bottom: 28px;
transition: transform 0.2s;
z-index: 2;
cursor: pointer;
&:hover {
  transform: scale(1.05) translateY(-5px);
}
`
const GithubIcon = styled(Icon)`
left: 15px;
`
const DemoIcon = styled(Icon)`
left: 75px;
`
const ModalIcon = styled(Icon)`
left: 135px;
`
const ModalProjectContainer = styled.div`
display: flex;
flex-direction: column;
margin-top: 16px;
align-items: center;
@media (min-width: 769px) {
margin-top: 21px;
}
`
const TopSection = styled.div`
display: flex;
flex-direction: column;
width: 216px;
margin-left: 1px;
margin-top: 20px;
@media (min-width: 769px) {
  width: 351px;
  margin-right: 2px;
  margin-top: 25px;
}
`
const TitleProject = styled.h3`
margin: 0;
text-align: center;
font-family: "Press Start 2P", serif;
font-size: 12px;
color: white;
text-shadow: 2px 2px 2px #000000;
`
const CarouselImage = styled.img`
height: 156.9px;
width: 20%;
margin: 0;
@media (min-width: 769px) {
  height: 247px;
}
`
const ButtonStyle = styled.button`
cursor: pointer;
height: 32px;
margin-top: 17px;
padding: 5px;
background-color: rgb(238, 87, 90);
border-left: 3px solid #ff9a9d;
border-top: 3px solid #ff9a9d;
border-right: 3px solid #7a2334;
border-bottom: 3px solid #7a2334;
font-family: "Press Start 2P", serif;
color: white;
text-shadow: 2px 2px 2px #000000;
outline: 2px solid #231e3e;
&:hover {
background-color: #ed4c4f;
color: white;
outline-color: #231e3e;
transform: scale(1.05);
transition: transform 0.3s ease-out;
}
&:active {
border-left: 3px solid #7a2334;
border-top: 3px solid #7a2334;
border-right: 3px solid #ff9a9d;
border-bottom: 3px solid #ff9a9d;
}
@media (min-width: 769px) {
  margin-top: 22px;
}
`
const BottomSection = styled.div`
display:flex;
flex-direction: column;
align-items: center;
margin-top: 45px;
@-moz-document url-prefix() {
    margin-top: 40px; 
  }
`
const SummaryTitle = styled.h3`
text-align: center;
font-family: "Press Start 2P", serif;
font-size: 14px;
color: white;
text-shadow: 2px 2px 2px #000000;
`
const SummaryText = styled.p`
text-align: left;
font-family: "Pixelify Sans", serif;
font-size: 15px;
color: white;
width: 349px;
margin: 15px 0px 0px 10px;
`
const ObjectifTitle = styled.h3`
text-align: center;
font-family: "Press Start 2P", serif;
font-size: 14px;
color: white;
text-shadow: 2px 2px 2px #000000;
margin-bottom: 0px;
margin-top: 6px;
`
const ObjectifsList = styled.ul`
display: flex;
flex-direction: column;
color: white;
font-family: 'Pixelify Sans', serif;
width: 310px;
padding: 0;
`
const ObjectifStyle = styled.li`
width: 330px;
`
const ProjectCard = ({ project }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const basePath = "../assets/images/captures/";
  const isMobile = window.matchMedia("(max-width: 768px)").matches;

  const projectModalStyles = {
    1: { background: isMobile ? 'url("../assets/images/modal/Booki Mobile.png")' : 'url("../assets/images/modal/Booki.png")' },
    2: { background: isMobile ? 'url("../assets/images/modal/Ohmyfood Mobile.png")' : 'url("../assets/images/modal/Ohmyfood.png")' },
    3: { background: isMobile ? 'url("../assets/images/modal/SophieBluel Mobile.png")' : 'url("../assets/images/modal/SophieBluel.png")' },
    4: { background: isMobile ? 'url("../assets/images/modal/Kasa Mobile.png")' : 'url("../assets/images/modal/Kasa.png")' },
    5: { background: isMobile ? 'url("../assets/images/modal/NinaCarducci Mobile.png")' : 'url("../assets/images/modal/NinaCarducci.png")' },
    6: { background: isMobile ? 'url("../assets/images/modal/724Events Mobile.png")' : 'url("../assets/images/modal/724Events.png")' },
    7: { background: isMobile ? 'url("../assets/images/modal/ArgentBank Mobile.png")' : 'url("../assets/images/modal/ArgentBank.png")' },
    8: { background: isMobile ? 'url("../assets/images/modal/Qwenta Mobile.png")' : 'url("../assets/images/modal/Qwenta.png")' },
  };

  return (
    <ProjectCardStyle>
      <img src={project.imageUrl} alt={project.alt} />
      <GithubIconContainer>
        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
          <GithubIcon src="../assets/images/icons/Icon-Github.png" alt="GitHub" />
        </a>
      </GithubIconContainer>
      <DemoIconContainer>
        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
          <DemoIcon src="../assets/images/icons/Icon-Demo.png" alt="Demo" />
        </a>
      </DemoIconContainer>
      <ModalIconContainer>
        <ModalIcon src="../assets/images/icons/Icon-Modal.png" alt="Modal" onClick={openModal} />
        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          contentLabel="Détails du projet"
          className="modal-project-content"
          overlayClassName="modal-project-overlay"
          style={{
            content: {
              ...projectModalStyles[project.id],
            },
          }}
        >
          <ModalProjectContainer>
            <TitleProject>Projet {project.projectName}</TitleProject>
            <TopSection>
              <Carousel showThumbs={false} infiniteLoop useKeyboardArrows>
                {project.images.map((image, index) => (
                  <div key={index}>
                    <CarouselImage src={`${basePath}${image}`} alt={`Slide ${index + 1}`} />
                  </div>
                ))}
              </Carousel>
              <ButtonStyle onClick={closeModal}
                className={`close-button ${project.id === 1 ? 'bookie' : project.id === 2 ? 'ohmyfood' :
                  project.id === 3 ? 'sophiebluel' : project.id === 4 ? 'kasa' :
                    project.id === 5 ? 'ninacarducci' : project.id === 6 ? 'events' :
                      project.id === 7 ? 'argentbank' : project.id === 8 ? 'qwenta' : `close-button`}`}>Fermer</ButtonStyle>
            </TopSection>
            {isMobile ? '' :
              <BottomSection>
                <SummaryTitle>Résumé du projet</SummaryTitle>
                <SummaryText>{project.summary}</SummaryText>
                <ObjectifTitle>Objectifs</ObjectifTitle>
                <ObjectifsList>
                  {project.objectives.map((objective, index) => (
                    <ObjectifStyle key={index}>{objective}</ObjectifStyle>
                  ))}
                </ObjectifsList>
              </BottomSection>}
          </ModalProjectContainer>
        </Modal>
      </ModalIconContainer>
    </ProjectCardStyle>
  );
};

export default ProjectCard;
