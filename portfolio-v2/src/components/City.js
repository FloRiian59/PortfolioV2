import React, { useState, useEffect, useCallback } from 'react'
import CharacterAnimation from './CharacterAnimation'
import ScrollableGallery from './ScrollableGallery'
import ArrowControls from "./ArrowControls"
import BackButton from './BackButton'
import '../css/city.css'

const City = ({ gameStarted, setGameStarted, ambiance }) => {
    const startPosition = 0;
    const [backgroundPosition, setBackgroundPosition] = useState({
        background: startPosition,
        road: startPosition,
        firstPlan: startPosition,
        secondPlan: startPosition,
        thirdPlan: startPosition,
        fourthPlan: startPosition,
        projectGallery: startPosition,
    });
    const [isMoving, setIsMoving] = useState(false); // Reste false tant qu'aucune touche n'est pressée
    const [direction, setDirection] = useState(1);

    // Fonction pour calculer les vitesses en fonction de la largeur de l'écran
    const calculateSpeeds = () => {
        const screenWidth = window.innerWidth;

        if (screenWidth <= 640) { // Mobile
            return {
                background: 0.4,
                road: 1.5,
                firstPlan: 1.5,
                secondPlan: 1,
                thirdPlan: 0.7,
                fourthPlan: 0.5,
                projectGallery: 4, // Vitesse plus élevée pour mobile
            };
        } else if (screenWidth <= 1024) { // Tablette
            return {
                background: 0.3,
                road: 1.2,
                firstPlan: 1.2,
                secondPlan: 0.8,
                thirdPlan: 0.6,
                fourthPlan: 0.4,
                projectGallery: 1.5,
            };
        } else { // Desktop
            return {
                background: 0.2,
                road: 1,
                firstPlan: 1,
                secondPlan: 0.5,
                thirdPlan: 0.3,
                fourthPlan: 0.2,
                projectGallery: 0.5,
            };
        }
    };

    const [speeds, setSpeeds] = useState(calculateSpeeds());

    // Met à jour les vitesses en cas de redimensionnement de l'écran
    useEffect(() => {
        const handleResize = () => {
            setSpeeds(calculateSpeeds());
        };

        window.addEventListener("resize", handleResize);

        // Initialisation
        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const getImagePath = (layer) => {
        return `../assets/images/game/${ambiance}/${layer}.png`;
    };

    const move = useCallback(() => {
        if (gameStarted && isMoving) {
            setBackgroundPosition((prevState) => ({
                background: prevState.background - speeds.background * direction,
                road: prevState.road - speeds.road * direction,
                firstPlan: prevState.firstPlan - speeds.firstPlan * direction,
                secondPlan: prevState.secondPlan - speeds.secondPlan * direction,
                thirdPlan: prevState.thirdPlan - speeds.thirdPlan * direction,
                fourthPlan: prevState.fourthPlan - speeds.fourthPlan * direction,
                projectGallery: prevState.projectGallery - speeds.projectGallery * direction,
            }));
        }
    }, [direction, gameStarted, isMoving, speeds]);

    useEffect(() => {
        let interval;
        if (gameStarted && isMoving) {
            interval = setInterval(move, 50); // Ajuster pour la fluidité
        }

        return () => clearInterval(interval);
    }, [isMoving, gameStarted, move]);

    const handleArrowPress = (key) => {
        if (key === "ArrowLeft") {
            setDirection(-1);
            setIsMoving(true);
        }
        if (key === "ArrowRight") {
            setDirection(1);
            setIsMoving(true);
        }
    };

    const handleArrowRelease = () => {
        setIsMoving(false);
    };

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "ArrowRight") {
                setDirection(1);
                setIsMoving(true); // Active le mouvement uniquement lorsque la touche est enfoncée
            }
            if (event.key === "ArrowLeft") {
                setDirection(-1);
                setIsMoving(true);
            }
        };

        const handleKeyUp = (event) => {
            if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
                setIsMoving(false); // Arrête le mouvement lorsque la touche est relâchée
            }
        };

        if (gameStarted) {
            window.addEventListener("keydown", handleKeyDown);
            window.addEventListener("keyup", handleKeyUp);
        }

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            window.removeEventListener("keyup", handleKeyUp);
        };
    }, [gameStarted]);

    return (
        <div className="city">
            <BackButton gameStarted={gameStarted} setGameStarted={setGameStarted} />
            <ArrowControls
                onArrowPress={handleArrowPress}
                onArrowRelease={handleArrowRelease}
            />
            <div
                className="city-background background"
                style={{
                    backgroundImage: `url(${getImagePath("Background")})`,
                    left: `${backgroundPosition.background}vw`,
                }}
            ></div>
            <div
                className="city-background road"
                style={{
                    backgroundImage: `url(${getImagePath("Road")})`,
                    left: `${backgroundPosition.road}vw`,
                }}
            ></div>
            <div
                className="city-background first-plan"
                style={{
                    backgroundImage: `url(${getImagePath("FirstPlan")})`,
                    left: `${backgroundPosition.firstPlan}vw`,
                }}
            ></div>
            <div
                className="city-background second-plan"
                style={{
                    backgroundImage: `url(${getImagePath("SecondPlan")})`,
                    left: `${backgroundPosition.secondPlan}vw`,
                }}
            ></div>
            <div
                className="city-background third-plan"
                style={{
                    backgroundImage: `url(${getImagePath("ThirdPlan")})`,
                    left: `${backgroundPosition.thirdPlan}vw`,
                }}
            ></div>
            <div
                className="city-background fourth-plan"
                style={{
                    backgroundImage: `url(${getImagePath("FourthPlan")})`,
                    left: `${backgroundPosition.fourthPlan}vw`,
                }}
            ></div>
            <CharacterAnimation isMoving={isMoving} direction={direction} />
            <div
                className="scrollable-gallery-container city-background"
                style={{ left: `${backgroundPosition.projectGallery}vw` }}
            >
                <ScrollableGallery />
            </div>
        </div>
    );
};

export default City;