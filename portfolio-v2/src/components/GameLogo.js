import styled from "styled-components"

const ContainerLogo = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 100px;
gap: 10px;
position: relative;
cursor: default;
user-select: none;
@-moz-document url-prefix() {
    gap: 2px; 
  }
`
const ProjectTitle = styled.div`
color: transparent; 
margin: 0;
font-size: 40px;
padding: 10px 5px 0px 15px;
transform: scaleY(1.2);
background-image: linear-gradient(to bottom, #b0e0ff, #a3dcff, #96d9ff, #87d5ff, #76d2ff, #67cdff, #55c7ff, #41c2ff, #2bb9ff, #13b0ff, #00a6ff, #009cff);
background-clip: text;
@media (min-width: 768px) {
    font-size: 52px;
}
@media (min-width: 1024px) {
    font-size: 60px;
}
`
const ProjectShadow = styled.div`
color: black;
opacity: 0.7;
margin: 0;
font-size: 40px;
padding: 10px 5px 0px 15px;
transform: scaleY(1.2);
position: absolute;
left: 8px;
top: 10px;
z-index: -2;
@media (min-width: 768px) {
    font-size: 52px;
}
@media (min-width: 1024px) {
    font-size: 60px;
}
`
const ProjectLine1 = styled.div`
color: white; 
margin: 0;
font-size: 40px;
padding: 10px 5px 0px 15px;
transform: scaleY(1.2);
position: absolute;
left: 1px;
top: 1px;
z-index: -1;
@media (min-width: 768px) {
    font-size: 52px;
}
@media (min-width: 1024px) {
    font-size: 60px;
}
`
const ProjectLine2 = styled.div`
color: white; 
margin: 0;
font-size: 40px;
padding: 10px 5px 0px 15px;
transform: scaleY(1.2);
position: absolute;
left: -1px;
top: -1px;
z-index: -1;
@media (min-width: 768px) {
    font-size: 52px;
}
@media (min-width: 1024px) {
    font-size: 60px;
}
`
const RunnerTitle = styled.div`
color: transparent; 
margin: 0;
font-size: 40px;
padding: 10px 5px 0px 15px;
transform: scaleY(1.2);
background-image: linear-gradient(to bottom, #ffffff, #ffedfd, #ffd7e4, #ffc6b7, #ffc082, #ffbd64, #ffbb42, #ffba00,  #ffa800, #ff9600, #ff8200, #ff6e00);
background-clip: text;
@media (min-width: 768px) {
    font-size: 52px;
}
@media (min-width: 1024px) {
    font-size: 60px;
}
`
const RunnerShadow = styled.div`
color: black;
opacity: 0.7;
margin: 0;
font-size: 40px;
padding: 10px 5px 0px 15px;
transform: scaleY(1.2); 
position: absolute;
left: 27px;
top: 70px;
z-index: -2;
@media (min-width: 768px) {
    font-size: 52px;
    left: 35px;
    top: 80px;
}
@media (min-width: 1024px) {
    font-size: 60px;
    left: 40px;
    top: 91px;
}
`
const RunnerLine1 = styled.div`
color: white;
margin: 0;
font-size: 40px;
padding: 10px 5px 0px 15px;
transform: scaleY(1.2);
background-clip: text;  
position: absolute;
left: 19px;
top: 61px;
z-index: -1;
@media (min-width: 768px) {
    font-size: 52px;
    left: 27px;
    top: 72px;
}
@media (min-width: 1024px) {
    font-size: 60px;
    left: 29px;
    top: 80px;
}
`
const RunnerLine2 = styled.div`
color: white;
margin: 0;
font-size: 40px;
padding: 10px 5px 0px 15px;
transform: scaleY(1.2);
background-clip: text;  
position: absolute;
left: 21px;
top: 59px;
z-index: -1;
@media (min-width: 768px) {
    font-size: 52px;
    left: 25px;
    top: 73px;
}
@media (min-width: 1024px) {
    font-size: 60px;
    left: 31px;
    top: 81px;
}
`
const GameLogo = () => {
    return (
        <ContainerLogo>
            <ProjectLine1>PROJECT</ProjectLine1>
            <ProjectTitle>PROJECT</ProjectTitle>
            <ProjectLine2>PROJECT</ProjectLine2>
            <ProjectShadow>PROJECT</ProjectShadow>
            <RunnerLine1>RUNNER</RunnerLine1>
            <RunnerTitle>RUNNER</RunnerTitle>
            <RunnerLine2>RUNNER</RunnerLine2>
            <RunnerShadow>RUNNER</RunnerShadow>
        </ContainerLogo>
    )
}
export default GameLogo