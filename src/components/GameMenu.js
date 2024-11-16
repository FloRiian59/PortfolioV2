import Modal from "react-modal";
import React, { useState, useEffect } from "react";
import "../css/gamemenu.css";
import { Link } from "react-router-dom";

Modal.setAppElement("#root");

const GameMenu = ({ onPlay, setAmbiance, ambiance }) => {
    const [isOptionsModalOpen, setIsOptionsModalOpen] = useState(false);
    const [isAmbianceModalOpen, setIsAmbianceModalOpen] = useState(false);

    // Ouverture et fermeture des modales
    const openOptionsModal = () => setIsOptionsModalOpen(true);
    const closeOptionsModal = () => setIsOptionsModalOpen(false);
    const openAmbianceModal = () => setIsAmbianceModalOpen(true);
    const closeAmbianceModal = () => setIsAmbianceModalOpen(false);

    // Fonction pour obtenir l'image de fond en fonction de l'ambiance
    const getBackgroundImage = () => {
        console.log("Ambiance actuelle:", ambiance);
        switch (ambiance) {
            case "Jour":
                return "/assets/images/game/Jour/DayBackground.png";
            case "Sunset":
                return "/assets/images/game/Sunset/SunsetBackground.png";
            case "Night":
                return "/assets/images/game/Nuit/NightBackground.png";
            default:
                return "/assets/images/game/Nuit/NightBackground.png";
        }
    };
    // Chargement du thème sélectionné au démarrage
    useEffect(() => {
        const savedTheme = localStorage.getItem("selectedTheme") || "Jour";
        setAmbiance(savedTheme);
    }, [setAmbiance]);
    // Mise à jour de l'ambiance et enregistrement dans localStorage
    const handleAmbianceChange = (theme) => {
        setAmbiance(theme);
        localStorage.setItem("selectedTheme", theme);
    };

    return (
        <div
            className="game-menu-container"
            style={{
                backgroundImage: `url(${getBackgroundImage()})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "100vh",
                width: "100vw",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                color: "#FFF",
                overflow: "hidden",
            }}
        >
            <h1 className="game-name">ProjectRunner</h1>
            <button className="game-play-button" onClick={onPlay}>
                Play
            </button>
            <button onClick={openOptionsModal} className="game-options-button">
                Options
            </button>
            <button onClick={openAmbianceModal} className="game-ambiance-button">
                Ambiance
            </button>
            <Link to={"/"}>
                <button className="game-exit-button">Exit</button>
            </Link>
            <Modal
                isOpen={isOptionsModalOpen}
                onRequestClose={closeOptionsModal}
                contentLabel="Options du jeu"
                className="modal-options-content"
                overlayClassName="modal-options-overlay"
            >
                <div className="modal-options-container">
                    <h3 className="modal-options-title">Bienvenue dans ProjectRunner !</h3>
                    <p className="modal-options-text"><strong>Ton objectif est simple :</strong> <br></br>Progresse à travers le niveau en découvrant mes projets au fur et à mesure de ton parcours.</p>
                    <h4 className="modal-options-title-list">Contrôles :</h4>
                    <ul className="modal-options-text">
                        <li >Ordinateur : utilise les flèches pour te déplacer.</li>
                        <li>Mobile/Tablette : touche les boutons fléchés<br></br> à l’écran pour te déplacer</li>
                    </ul>
                </div>
            </Modal>
            <Modal
                isOpen={isAmbianceModalOpen}
                onRequestClose={closeAmbianceModal}
                contentLabel="Ambiance du jeu"
                className="modal-ambiance-content"
                overlayClassName="modal-ambiance-overlay"
            >
                <div className="buttons-container theme-selection">
                    <label className="ambiance-button">
                        <input
                            type="radio"
                            name="theme"
                            value="Jour"
                            onChange={() => handleAmbianceChange("Jour")}
                            checked={ambiance === "Jour"}
                        />
                        <img src="../assets/images/icons/icon-Sun.png" alt="Jour" />
                        <span className="radio-label">Jour</span>
                    </label>

                    <label className="ambiance-button">
                        <input
                            type="radio"
                            name="theme"
                            value="Sunset"
                            onChange={() => handleAmbianceChange("Sunset")}
                            checked={ambiance === "Sunset"}
                        />
                        <img src="../assets/images/icons/icon-Sunset.png" alt="Sunset" />
                        <span className="radio-label">Sunset</span>
                    </label>

                    <label className="ambiance-button">
                        <input
                            type="radio"
                            name="theme"
                            value="Nuit"
                            onChange={() => handleAmbianceChange("Nuit")}
                            checked={ambiance === "Nuit"}
                        />
                        <img src="../assets/images/icons/icon-Night.png" alt="Nuit" />
                        <span className="radio-label">Nuit</span>
                    </label>
                </div>

                <button onClick={closeAmbianceModal} className="game-input-close">
                    Fermer
                </button>
            </Modal>
        </div>
    );
};

export default GameMenu;
