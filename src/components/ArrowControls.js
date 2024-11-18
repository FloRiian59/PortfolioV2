import React from 'react';
import '../css/arrowcontrols.css';

const ArrowControls = ({ onArrowPress, onArrowRelease }) => {
    const handleTouchStart = (event, direction) => {
        event.preventDefault(); // Empêche le menu contextuel ou autre comportement par défaut
        onArrowPress(direction);
    };

    const handleTouchEnd = (event) => {
        event.preventDefault(); // Empêche les comportements liés au relâchement
        onArrowRelease();
    };

    return (
        <div className="arrow-controls">
            <div
                className="arrow-button left-arrow"
                onTouchStart={(event) => handleTouchStart(event, "ArrowLeft")}
                onTouchEnd={handleTouchEnd}
                role="button"
                aria-label="Flèche gauche"
            ></div>
            <div
                className="arrow-button right-arrow"
                onTouchStart={(event) => handleTouchStart(event, "ArrowRight")}
                onTouchEnd={handleTouchEnd}
                role="button"
                aria-label="Flèche droite"
            ></div>
        </div>
    );
};

export default ArrowControls;
