import styled from "styled-components"
import { Link } from "react-router-dom"
const SectionStyle = styled.section`
display: flex;
width: 100%;
justify-content: center;
`
const ContainerStyle = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 90%;
`
const TitleStyle = styled.h3`
color: white;
font-family: "Pixelify Sans", serif;
margin: 0;
text-align: center;
line-height: 150%;
font-weight: 400;
@media (min-width: 1024px) {
font-size: 20px
}
`
const TextStyle = styled.p`
color: white;
font-family: "Pixelify Sans", serif;
margin: 0;
text-align: center;
line-height: 150%;
font-weight: 400;
font-size: 19px;
margin-bottom: 35px;
`
const ButtonStyle = styled(Link)`
display: flex;
align-items: center;
text-align: center;
gap: 10px;
cursor: pointer;
width: fit-content;
height: fit-content;
margin: 20px 0 20px 0;
padding: 15px 5px 15px 10px;
background-color: rgb(238, 87, 90);
border-left: 3px solid #ff9a9d;
border-top: 3px solid #ff9a9d;
border-right: 3px solid #7a2334;
border-bottom: 3px solid #7a2334;
font-family: "Press Start 2P", serif;
font-size: 12px;
color: white;
text-shadow: 2px 2px 2px #000000;
text-decoration: none;
outline: 2px solid #231e3e;
&:hover {
background-color: #ed4c4f;
color: white;
outline-color: #231e3e;
border-left: 3px solid #ff9a9d;
border-top: 3px solid #ff9a9d;
border-right: 3px solid #7a2334;
border-bottom: 3px solid #7a2334;
span {
    font-style: oblique 40deg;
}
}
&:active {
border-left: 3px solid #7a2334;
border-top: 3px solid #7a2334;
border-right: 3px solid #ff9a9d;
border-bottom: 3px solid #ff9a9d;
span {
    transform: translateX(2px) translateY(2px)
}
i {
    transform: translateX(2px) translateY(2px)
}
}
`
const ControllerStyle = styled.i`
color: white;
${ButtonStyle}:hover & {
  font-style: italic;
}
`
const ArrowStyle = styled.div`
  display: flex;
  font-weight: 900;
  ${ButtonStyle}:hover & {
    animation: slide-right 0.5s ease-out infinite alternate-reverse;
    font-style: italic;
@keyframes slide-right {
  0% {
    transform: translateX(8px);
    opacity: 0;
  }

  100% {
    transform: translateX(-6px);
    opacity: 1;
  }
}
  }
`
const Exploration = () => {
  return (
    <SectionStyle>
      <ContainerStyle>
        <TitleStyle>Découvrez mes projets en mode jeu rétro !<br></br>
          Plongez dans une aventure pixelisée où chaque pas vous dévoile un de mes projets.
        </TitleStyle>
        <ButtonStyle to="/exploration"><ControllerStyle className="fa-solid fa-gamepad"></ControllerStyle><span>Mode Exploration</span><ArrowStyle>››</ArrowStyle></ButtonStyle>
        <TextStyle>Explorez mes réalisations de manière ludique !</TextStyle>
      </ContainerStyle>
    </SectionStyle>
  )
}
export default Exploration