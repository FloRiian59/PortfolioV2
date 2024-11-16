import React, { useState, useEffect, useCallback } from 'react';
import CharacterAnimation from './CharacterAnimation';
import '../css/city.css';
import ScrollableGallery from './ScrollableGallery';

const City = ({ gameStarted, ambiance }) => {
    const startPosition = 0
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

    const getImagePath = (layer) => {
        return `../assets/images/game/${ambiance}/${layer}.png`;
    };

    const move = useCallback(() => {
        if (gameStarted && isMoving) {
            setBackgroundPosition(prevState => ({
                background: prevState.background - 0.2 * direction,
                road: prevState.road - 1 * direction,
                firstPlan: prevState.firstPlan - 1 * direction,
                secondPlan: prevState.secondPlan - 0.5 * direction,
                thirdPlan: prevState.thirdPlan - 0.2 * direction,
                fourthPlan: prevState.fourthPlan - 0.3 * direction,
                projectGallery: prevState.fourthPlan - 1 * direction,
            }));
        }
    }, [direction, gameStarted, isMoving]);

    useEffect(() => {
        let interval;
        if (gameStarted && isMoving) {
            interval = setInterval(move, 50); // Ajuster pour la fluidité
        }

        return () => clearInterval(interval);
    }, [isMoving, gameStarted, move]);

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