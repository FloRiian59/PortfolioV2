import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import GameLogo from "./GameLogo"
import Ambiance from "./Ambiance"
import CharacterSelection from "./CharacterSelection"
import { motion } from "framer-motion"

const ContainerStyle = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 80px;
font-family: "Press Start 2P", sans-serif;
gap: 90px;
`
const ButtonContainerStyle = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 25px;
font-family: "Press Start 2P", sans-serif;
`
const BackgroundStyle = styled.div`
display: flex;
width: 100vw;
height: 100vh;
justify-content: center;
background-image: url("../../assets/images/game/Night/NightBackground.png");
background-position: bottom;
background-size: cover;
position: fixed;
`
const StyledLink = styled(Link)`
text-decoration: none;
`
export const ButtonStyle = styled.button`
display: flex;
color: white;
border: none;
background-color: transparent;
font-family: "Press Start 2P", sans-serif; 
font-size: 16px;
text-shadow: 3px 3px 0px #000000;
padding: 0;
&:before {
    content: "►";
    margin-right: 5px;
    opacity: 0;
    transform: translateY(-3px);
}
&:after {
    content: "◄";
    margin-left: 5px;
    opacity: 0;
    transform: translateY(-3px);
}
&:hover {
    cursor: pointer;
    transform: translateY(-4px);
    &:before,
    &:after{
        opacity: 1;
    }
}
&:active {
    transform: translateY(-2px);
}
@media (min-width: 768px) {
    font-size: 18px;
}
@media (min-width: 1024px) {
    font-size: 22px;
}
`
const GameMenu = ({ onPlay, setAmbiance, ambiance }) => {

    const [initialAnimationDone, setInitialAnimationDone] = useState(false)

    const [menuState, setMenuState] = useState("main")

    const getBackgroundImage = () => {
        switch (ambiance) {
            case "Day":
                return "/assets/images/game/Day/DayBackground.png";
            case "Sunset":
                return "/assets/images/game/Sunset/SunsetBackground.png";
            case "Night":
                return "/assets/images/game/Night/NightBackground.png";
            default:
                return "/assets/images/game/Night/NightBackground.png";
        }
    }
    useEffect(() => {
        const savedTheme = localStorage.getItem("selectedTheme") || "Day";
        setAmbiance(savedTheme);
    }, [setAmbiance])

    useEffect(() => {
        if (!initialAnimationDone) {
            const timer = setTimeout(() => {
                setInitialAnimationDone(true);
            }, 500)
            return () => clearTimeout(timer);
        }
    }, [initialAnimationDone])

    return (
        <BackgroundStyle
            style={{
                backgroundImage: `url(${getBackgroundImage()})`
            }}>
            <ContainerStyle>
                {/* Animation pour le logo */}
                <motion.div
                    initial={{ y: -450, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -450, opacity: 0 }}
                    transition={{
                        duration: 1,
                    }}
                >
                    <GameLogo />
                </motion.div>

                {/* Animation pour le contenu du menu */}
                <motion.div
                    key={menuState}
                    initial={{
                        x: menuState === "main" ? 450 : -450,
                        opacity: 0
                    }}
                    animate={{
                        x: 0,
                        opacity: 1
                    }}
                    exit={{
                        x: menuState === "main" ? -450 : 450,
                        opacity: 0
                    }}
                    transition={{
                        duration: 0.5,
                        delay: initialAnimationDone ? 0 : 0.8
                    }}
                >
                    <ButtonContainerStyle>
                        {menuState === "main" && (
                            <>
                                <ButtonStyle onClick={onPlay}>Play</ButtonStyle>
                                <ButtonStyle onClick={() => setMenuState("customize")}>Personnalisation</ButtonStyle>
                                <ButtonStyle>Options</ButtonStyle>
                                <StyledLink to={"/"}>
                                    <ButtonStyle>Exit</ButtonStyle>
                                </StyledLink>
                            </>
                        )}
                        {menuState === "customize" && (
                            <>
                                <CharacterSelection />
                                <Ambiance ambiance={ambiance} setAmbiance={setAmbiance} />
                                <ButtonStyle onClick={() => setMenuState("main")}>Retour</ButtonStyle>
                            </>
                        )}
                    </ButtonContainerStyle>
                </motion.div>
            </ContainerStyle>
        </BackgroundStyle>
    )
}
export default GameMenu