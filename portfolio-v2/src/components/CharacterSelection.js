import React, { useState } from "react"
import Modal from "react-modal"
import { ButtonStyle } from "./GameMenu"
import styled from "styled-components"
import { CloseButton } from "./Ambiance"
import '../css/characterselection.css'

Modal.setAppElement("#root")

const CharacterTitle = styled.h1`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  margin-top: 12px;
  font-size: 14px;
  text-shadow: 2px 2px 0px black;
  font-family: "Press Start 2P";
  color: #e9e3fa;
  font-weight: 300;
  user-select: none;
  @media (min-width: 768px) {
    font-size: 24px;
    margin-top: 20px;
  }
`

const CharacterContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
width: 100%;
height: 89%;
margin-top: 25px;
@media (max-width: 768px) {
align-items: normal;
margin-top: 20px;
}
`
const CharacterMale = styled.div`
    display: flex;
    width: 236px;
    transition: opacity 0.3s ease;
    opacity: ${(props) =>
        props.$isSelected ? 1 : props.$isHovered && !props.$otherSelected ? 1 : 0.3};
        
@media (max-width: 768px) {
        margin-left: 35px;
    }
`
const CharacterFemale = styled.div`
    display: flex;
    width: 227px;
    transform: scaleX(-1);
    transition: opacity 0.3s ease;
    opacity: ${(props) =>
        props.$isSelected ? 1 : props.$isHovered && !props.$otherSelected ? 1 : 0.3};

@media (max-width: 768px) {
        margin-right: 35px;
    }
`

const CharacterOptions = styled.div`
display: flex;
gap: 30px;
margin-top: 16px;
@media (max-width: 768px) {
        gap: 0px;
        margin-top: 0px;
    }
`

const ButtonContainer = styled.div`
display: flex;
width: 100%;
justify-content: space-around;
`

const ChoiceButton = styled.label`
  width: 82px;
  height: 36px;
  background-image: url(${(props) => props.$bgimage});
  background-size: cover;
  border: none;
  background-color: transparent;
  color: white;
  font-family: "Press Start 2P";
  font-size: 11px;
  text-shadow: 2px 2px 0px black;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  &:hover {
    transform: translateY(-2px);
  }
  &:active {
    transform: translateY(2px);
  }

  input {
    display: none;
  }

  input:checked + span {
    transform: translateY(-5px);
  }

  @media (min-width: 768px) {
    width: 162px;
    height: 70px;
    font-size: 18px;
  }
`
const CharacterSelection = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const [maleHovered, setMaleHovered] = useState(false)
    const [femaleHovered, setFemaleHovered] = useState(false)
    const [selected, setSelected] = useState(null)

    const openModal = () => setIsModalOpen(true)
    const closeModal = () => setIsModalOpen(false)

    const handleCharacterSelection = (character) => {
        setSelected(character);
        localStorage.setItem("selectedCharacter", character);
    }

    return (
        <>
            <ButtonStyle onClick={openModal}>Choix du personnage</ButtonStyle>
            <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                contentLabel="Choisir le personnage"
                className="modal-character-content"
                overlayClassName="modal-character-overlay">
                <CharacterTitle>CHOIX DU PERSONNAGE</CharacterTitle>
                <CharacterContainer >
                    <CharacterOptions>
                        <CharacterMale
                            $isHovered={maleHovered}
                            $isSelected={selected === 'male'}
                            $otherSelected={selected === 'female'}
                            onMouseEnter={() => setMaleHovered(true)}
                            onMouseLeave={() => setMaleHovered(false)}
                            onClick={() => handleCharacterSelection("male")}
                        >
                            <input
                                type="radio"
                                id="H"
                                name="Choix"
                                checked={selected === 'male'}
                                onChange={() => setSelected('male')}
                            />
                            <label htmlFor="H" className="selectable">
                                <div className="image"></div>
                            </label>
                        </CharacterMale>
                        <CharacterFemale
                            $isHovered={femaleHovered}
                            $isSelected={selected === 'female'}
                            $otherSelected={selected === 'male'}
                            onMouseEnter={() => setFemaleHovered(true)}
                            onMouseLeave={() => setFemaleHovered(false)}
                            onClick={() => handleCharacterSelection("female")}
                        >
                            <input
                                type="radio"
                                id="F"
                                name="Choix"
                                checked={selected === 'female'}
                                onChange={() => setSelected('female')}
                            />
                            <label htmlFor="F" className="selectable">
                                <div className="image2"></div>
                            </label>
                        </CharacterFemale>
                    </CharacterOptions>
                    <ButtonContainer>
                        <ChoiceButton onClick={() => handleCharacterSelection("male")} $bgimage="../../assets/images/game/Character/BoutonHomme.png">Homme</ChoiceButton>
                        <ChoiceButton onClick={() => handleCharacterSelection("female")} $bgimage="../../assets/images/game/Character/BoutonFemme.png">Femme</ChoiceButton>
                    </ButtonContainer>
                    <CloseButton onClick={closeModal}>Confirmer</CloseButton>
                </CharacterContainer>
            </Modal>
        </>
    )
}

export default CharacterSelection