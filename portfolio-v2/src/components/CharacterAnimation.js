import React, { useEffect, useRef, useState } from 'react';
import '../css/animation.css';

const CharacterData = {
    male: {
        sprite: "../assets/images/game/Character/SpriteSheetAnimationHomme.png",
        staticSprite: "../assets/images/game/Character/StaticFrameHomme.png",
        width: 188,
        height: 411,
        frameCount: 8,
        fps: 12
    },
    female: {
        sprite: "../assets/images/game/Character/SpriteSheetAnimationFemme.png",
        staticSprite: "../assets/images/game/Character/StaticFrameFemme.png",
        width: 192,
        height: 390,
        frameCount: 8,
        fps: 12
    }
}

const CharacterAnimation = ({ isMoving, direction }) => {
    const [character, setCharacter] = useState("female");
    const [currentFrame, setCurrentFrame] = useState(0);
    const animationRef = useRef(null);

    useEffect(() => {
        const savedCharacter = localStorage.getItem("selectedCharacter") || "female";
        setCharacter(savedCharacter);
    }, []);

    const { sprite, staticSprite, width, height, frameCount, fps } = CharacterData[character];
    const frameInterval = 1000 / fps;

    useEffect(() => {
        if (isMoving) {
            const interval = setInterval(() => {
                setCurrentFrame((prevFrame) => (prevFrame + 1) % frameCount);
            }, frameInterval);
            animationRef.current = interval;
        } else {
            clearInterval(animationRef.current);
            setCurrentFrame(0);
        }
        return () => clearInterval(animationRef.current);
    }, [isMoving, frameCount, frameInterval]);

    const spriteStyles = {
        width: `${width * frameCount}px`,
        height: `${height}px`,
        transform: `translateX(-${currentFrame * width}px)`,
    };

    return (
        <div
            className={`animation ${direction === -1 ? 'flip' : ''}`}
            style={{ width: `${width}px`, height: `${height}px` }}
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
                    style={{ width: `${width}px`, height: `${height}px`, objectFit: "cover" }}
                />
            )}
        </div>
    );
};

export default CharacterAnimation;
