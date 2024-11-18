import React from 'react';
import '../css/arrowcontrols.css';

const ArrowControls = ({ onArrowPress, onArrowRelease }) => {
    return (
        <div className="arrow-controls">
            <div
                className="arrow-button left-arrow"
                onTouchStart={() => onArrowPress("ArrowLeft")}
                onTouchEnd={onArrowRelease}
                role="button"
                aria-label="Flèche gauche"
            ></div>
            <div
                className="arrow-button right-arrow"
                onTouchStart={() => onArrowPress("ArrowRight")}
                onTouchEnd={onArrowRelease}
                role="button"
                aria-label="Flèche droite"
            ></div>
        </div>
    );
};

export default ArrowControls;
