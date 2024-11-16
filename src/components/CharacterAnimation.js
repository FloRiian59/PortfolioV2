// CharacterAnimation.js
import React from 'react';
import { SpriteAnimator } from 'react-sprite-animator';
import '../css/animation.css';

const CharacterAnimation = ({
    sprite = "../assets/images/game/SpriteSheetAnimation.png",
    staticSprite = "../assets/images/game/StaticFrame.png",
    width = 181,
    height = 367,
    frameCount = 8,
    fps = 12,
    isMoving,
    direction
}) => {
    return (
        <div
            className={`animation ${direction === -1 ? 'flip' : ''}`}
            style={{ width: `${width}px`, height: `${height}px` }}
        >
            {isMoving ? (
                <SpriteAnimator
                    sprite={sprite}
                    width={width}
                    height={height}
                    frameCount={frameCount}
                    fps={fps}
                    loop={true}
                />
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
