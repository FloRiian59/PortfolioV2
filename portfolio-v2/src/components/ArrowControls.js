import React from 'react'
import styled from 'styled-components'

const ArrowControlStyle = styled.div`
position: absolute;
width: 100%;
display: flex;
justify-content: space-between; 
z-index: 100000000;
bottom: 1%;
opacity: 0;
@media (max-width: 1024px) { 
        opacity: 0.6; 
    }
`

const LeftArrowButtonStyle = styled.div`
width: 80px; 
height: 80px;
background-size: contain;
background-repeat: no-repeat;
user-select: none;
background-image: url("/assets/images/game/Icons/IconArrowLeft.png");
transform: translateX(10px);
`

const RightArrowButtonStyle = styled.div`
width: 80px; 
height: 80px;
background-size: contain;
background-repeat: no-repeat;
user-select: none;
background-image: url("/assets/images/game/Icons/IconArrowRight.png");
transform: translateX(-10px);
`
const ArrowControls = ({ onArrowPress, onArrowRelease }) => {
    const handleTouchStart = (event, direction) => {
        event.stopPropagation()
        onArrowPress(direction)
    }
    const handleTouchEnd = (event) => {
        event.preventDefault() // Empêche les comportements liés au relâchement
        onArrowRelease()
    }
    return (
        <ArrowControlStyle>
            <LeftArrowButtonStyle
                onTouchStart={(event) => handleTouchStart(event, "ArrowLeft")}
                onTouchEnd={handleTouchEnd}
                role="button"
                aria-label="Flèche gauche"
            ></LeftArrowButtonStyle>
            <RightArrowButtonStyle
                onTouchStart={(event) => handleTouchStart(event, "ArrowRight")}
                onTouchEnd={handleTouchEnd}
                role="button"
                aria-label="Flèche droite"
            ></RightArrowButtonStyle>
        </ArrowControlStyle>
    )
}

export default ArrowControls