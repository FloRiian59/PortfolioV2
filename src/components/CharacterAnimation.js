import React, { useEffect, useRef, useState } from 'react';
import '../css/animation.css';

const CharacterAnimation = ({
    sprite = "../assets/images/game/SpriteSheetAnimation.png",
    staticSprite = "../assets/images/game/StaticFrame.png",
    width = 181,
    height = 367,
    frameCount = 8,
    fps = 12,
    isMoving,
    direction,
}) => {
    const [currentFrame, setCurrentFrame] = useState(0);
    const frameInterval = 1000 / fps; // Temps pour chaque frame en ms
    const animationRef = useRef(null);

    // Gestion des frames animées
    useEffect(() => {
        if (isMoving) {
            const interval = setInterval(() => {
                setCurrentFrame((prevFrame) => (prevFrame + 1) % frameCount);
            }, frameInterval);
            animationRef.current = interval;
        } else {
            clearInterval(animationRef.current);
            setCurrentFrame(0); // Retour à la première frame si arrêté
        }

        return () => clearInterval(animationRef.current);
    }, [isMoving, frameCount, frameInterval]);

    // Style pour ajuster la position du sprite actif
    const spriteStyles = {
        width: `${width * frameCount}px`, // Largeur totale du sprite sheet
        height: `${height}px`, // Hauteur d'une frame
        transform: `translateX(-${currentFrame * width}px)`, // Décalage de la frame active
    };

    return (
        <div
            className={`animation ${direction === -1 ? 'flip' : ''}`}
            style={{
                width: `${width}px`,
                height: `${height}px`,
            }}
        >
            {isMoving ? (
                <div
                    className="sprite-sheet"
                    style={{
                        ...spriteStyles,
                        backgroundImage: `url(${sprite})`,
                        backgroundRepeat: "no-repeat",
                    }}
                ></div>
            ) : (
                <img
                    src={staticSprite}
                    alt="Character"
                    className="static"
                    style={{
                        width: `${width}px`,
                        height: `${height}px`,
                        objectFit: "cover",
                    }}
                />
            )}
        </div>
    );
};

export default CharacterAnimation;
