import React from "react"
import styled from "styled-components"

const BackHomeButton = styled.div`
display: flex;
position: absolute;
z-index: 150000;
right: 2%;
top: 3%;
width: 50px;
height: 50px;
&:hover {
    transform: scale(1.1) translateY(-5px);
    cursor: pointer;
}
`
const BackButton = ({ gameStarted, setGameStarted }) => {
    const handleBack = () => {
        if (gameStarted) {
            setGameStarted(false)
        }
    }
    return (
        gameStarted && (
            <BackHomeButton onClick={handleBack} >
                <img src="../assets/images/game/Icons/BackHome.png" alt="Back" />
            </BackHomeButton>
        )
    )
}

export default BackButton
