import styled from "styled-components"

const ContainerStyle = styled.div`
display: flex;
align-items: center;
margin-bottom: 25px;
`
const LineStyle1 = styled.div`
flex-grow: 1;
height: 4px;
margin: 0 10px;
background-image: linear-gradient(270deg, #512d62, #452d59, #3a2b4f, #302944, #292639);
`
const LineStyle2 = styled.div`
flex-grow: 1;
height: 4px;
margin: 0 10px;
background-image: linear-gradient(90deg, #512d62, #452d59, #3a2b4f, #302944, #292639);
`
const TitleStyle = styled.h2`
color: white;
font-family: "Press Start 2P";
font-size: 12px;
font-weight: 400;
margin: 0;
@media (min-width: 480px) {
    font-size: 16px;
}
@media (min-width: 768px) {
    font-size: 18px;
}
@media (min-width: 1024px) {
    font-size: 20px;
}
`
const Title = ({ title }) => {
    return (
        <ContainerStyle>
            <LineStyle1></LineStyle1>
            <TitleStyle>{title}</TitleStyle>
            <LineStyle2></LineStyle2>
        </ContainerStyle>
    )
}
export default Title