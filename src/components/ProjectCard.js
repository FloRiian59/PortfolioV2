import Modal from "react-modal"
import React, { useState } from "react";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import "../css/projectcard.css";
import "../css/projectmodal.css"

const projectModalStyles = {
    1: { backgroundImage: 'url("../assets/images/modal/Booki.png")' },
    2: { backgroundImage: 'url("../assets/images/modal/Ohmyfood.png")' },
    3: { backgroundImage: 'url("../assets/images/modal/SophieBluel.png")' },
    4: { backgroundImage: 'url("../assets/images/modal/Kasa.png")' },
    5: { backgroundImage: 'url("../assets/images/modal/NinaCarducci.png")' },
    6: { backgroundImage: 'url("../assets/images/modal/724Events.png ")' },
    7: { backgroundImage: 'url("../assets/images/modal/ArgentBank.png")' },
    8: { backgroundImage: 'url("../assets/images/modal/Qwenta.png")' },
};
const projectModalWidth = {
    1: { gridTemplateRows: "10% 40% 5% 11%" },
    2: { gridTemplateRows: "10% 40% 5% 11%" },
    3: { gridTemplateRows: "10% 40% 5% 11%" },
    4: { gridTemplateRows: "10% 35% 5% 11%" },
    5: { gridTemplateRows: "10% 43% 5% 11%" },
    6: { gridTemplateRows: "11% 40% 5% 11%" },
    7: { gridTemplateRows: "10% 35% 5% 11%" },
    8: { gridTemplateRows: "10% 35% 5% 11%" },
}

Modal.setAppElement('#root');

const ProjectCard = ({ project }) => {

    const basePath = "../assets/images/captures/";

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);

    const closeModal = () => setIsModalOpen(false);

    return (
        <div className={`project-card projet${project.id}`}>
            <img src={project.imageUrl} alt={project.alt} className="card" />

            <div className="icon-container1">
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <img src="../assets/images/icons/Icon-Github.png" alt="github" className="icon1" />
                </a>
            </div>

            <div className="icon-container2">
                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                    <img src="../assets/images/icons/Icon-Demo.png" alt="demo" className="icon2" />
                </a>
            </div>

            <div className="icon-container3">
                <img src="../assets/images/icons/Icon-Modal.png" alt="modale" className="icon3" onClick={openModal} />
                <Modal
                    isOpen={isModalOpen}
                    onRequestClose={closeModal}
                    contentLabel="Détails du projet"
                    className="modal-project-content"
                    overlayClassName="modal-project-overlay"
                    style={{
                        content: {
                            ...projectModalStyles[project.id]
                        }
                    }}
                >
                    <div className="modal-project-container">
                        <h3 className="title-project">Projet {project.projectName}</h3>
                        <div className="top-section">
                            <Carousel showThumbs={false} infiniteLoop useKeyboardArrows>
                                {project.images.map((imageName, index) => (
                                    <div key={index}>
                                        <img src={`${basePath}${imageName}`} alt={`Slide ${index + 1}`} className="carousel-image" />
                                    </div>
                                ))}
                            </Carousel>
                            <button
                                onClick={closeModal}
                                className={`close-button ${project.id === 1 ? 'bookie' : project.id === 2 ? 'ohmyfood' :
                                    project.id === 3 ? 'sophiebluel' : project.id === 4 ? 'kasa' :
                                        project.id === 5 ? 'ninacarducci' : project.id === 6 ? 'events' :
                                            project.id === 7 ? 'argentbank' : project.id === 8 ? 'qwenta' : `close-button`}`}
                            >
                                Fermer
                            </button>
                        </div>
                        <div
                            className="bottom-section"
                            style={{
                                ...projectModalWidth[project.id]
                            }}
                        >
                            <h3 className="summary-title">Résumé du projet</h3>
                            <p className="summary-project">{project.summary}</p>
                            <h3 className="objectif-title">Objectifs</h3>
                            <ul className="project-objectives">
                                {project.objectives.map((objective, index) => (
                                    <li key={index}>{objective}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </Modal>
            </div>
        </div>
    );
};


export default ProjectCard;