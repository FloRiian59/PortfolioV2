import styled from "styled-components"

const SectionStyle = styled.section`
display: flex;
justify-content: center;
margin-bottom: 40px;
`
const ContainerStyle = styled.div`
display: flex;
align-items: center;
flex-direction: column;
width: 90%;
justify-content: center;
@media (min-width: 768px) {
  flex-direction: row;
}
`
const ImageStyle = styled.img`
width: 70%;
@media (min-width: 480px) {
  width: 300px;
  height: 380px
}
@media (min-width: 768px) {
    width: 300px;
    height: 380px;
}
`
const TextStyle = styled.p`
color: white;
font-family: "Pixelify Sans", serif;
overflow-y: auto;
padding-right: 10px;
height: 180px;
line-height: 140%;
text-align: justify;
&::-webkit-scrollbar {
    width: 12px; /* Largeur de la scrollbar */
  }

  &::-webkit-scrollbar-track {
    background: #1c1a28; /* Couleur de l'arrière-plan de la scrollbar */
  }

  &::-webkit-scrollbar-thumb {
    background: #ee575a; /* Couleur du curseur */
    border-right: 3px solid #792947;
    border-bottom: 3px solid #792947;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #f47174; /* Couleur lorsque la souris est dessus */
  }
  @media (min-width: 480px) {
  width: 90%;
}
  @media (min-width: 768px) {
    height: 380px;
    width: 35%;
    margin-left: 15px;
    font-size: 18px;
}
@media (min-width: 1024px) {
    font-size: 20px;
    display: flex;
    align-items: center;
}
`

const Presentation = () => {
  return (
    <SectionStyle>
      <ContainerStyle>
        <ImageStyle src="../assets/images/ProfilePicture.png" alt="Autoportrait Pixel art" />
        <TextStyle>Salut ! Moi, c'est Florian j'ai 24 ans, je vis à Lille.
          Après plusieurs années passées dans le commerce, j'ai décidé de me lancer dans une reconversion professionnelle pour suivre ma passion :
          le développement web. Actuellement en formation chez OpenClassrooms dans le parcours Développeur Web,
          j'acquiers les compétences nécessaires pour créer des projets modernes et interactifs. Passionné par les jeux vidéo,
          j'aime intégrer un aspect ludique et créatif dans mon travail.</TextStyle>
      </ContainerStyle>
    </SectionStyle>
  )
}

export default Presentation