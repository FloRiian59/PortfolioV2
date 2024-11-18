import React from 'react';
import '../css/arrowcontrols.css';

const ArrowControls = ({ onArrowPress, onArrowRelease }) => {
    return (
        <div className="arrow-controls">
            <button
                className="arrow-button left-arrow"
                onTouchStart={() => onArrowPress("ArrowLeft")}
                onTouchEnd={onArrowRelease}
            >
                <img src="../assets/images/icons/IconArrowLeft.png" alt="Flèche gauche" />
            </button>
            <button
                className="arrow-button right-arrow"
                onTouchStart={() => onArrowPress("ArrowRight")}
                onTouchEnd={onArrowRelease}
            >
                <img src="../assets/images/icons/IconArrowRight.png" alt="Flèche droite" />
            </button>
        </div>
    );
};

export default ArrowControls;
