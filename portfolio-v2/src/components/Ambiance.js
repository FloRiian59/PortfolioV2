import Modal from "react-modal"
import React, { useState } from "react"
import styled from "styled-components"
import { ButtonStyle } from "./GameMenu"
import '../css/ambiance.css'

Modal.setAppElement("#root")

const AmbianceTitle = styled.h1`
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
const AmbianceContainer = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 60%;
  justify-content: center;
  gap: 11px;
  margin-top: 8px;
  @media (min-width: 768px) {
    gap: 23px;
    margin-top: 20px;
  }
`
const AmbianceOption = styled.img`
  width: 81px;
  height: 150px;
  user-select: none;
  transition: transform 0.1s ease-in-out;
  transform: ${(props) => (props.$isActive ? "translateY(-5px)" : "translateY(0)")};
  @media (min-width: 768px) {
    transform: ${(props) => (props.$isActive ? "translateY(-15px)" : "translateY(0)")};
    box-shadow: ${(props) => (props.$isActive ? "0px 20px 15px 0px #0c0f18" : "")};
    width: 162px;
    height: 300px;
  }
`
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  gap: 12px;
  margin-bottom: 9px;
  @media (min-width: 768px) {
    gap: 22px;
    margin-bottom: 25px;
  }
`;

export const AmbianceButton = styled.label`
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
const AmbianceText = styled.span`
  position: relative;
  z-index: 2;
`
export const CloseButton = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
  color: #e9e3fa;
  font-family: "Press Start 2P", serif;
  font-size: 14px;
  font-weight: 300;
  text-shadow: 2px 2px 0px black;
  &:hover {
    transform: translateY(-2px);
  }
  &:active {
    transform: translateY(2px);
  }
  @media (min-width: 768px) {
    font-size: 18px;
  }
`

const Ambiance = ({ ambiance, setAmbiance }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  const handleAmbianceChange = (theme) => {
    setAmbiance(theme);
    localStorage.setItem("selectedTheme", theme)
  }
  return (
    <>
      <ButtonStyle onClick={openModal}>Ambiance</ButtonStyle>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Choisir le thème"
        className="modal-ambiance-content"
        overlayClassName="modal-ambiance-overlay"
      >
        <AmbianceTitle>CHOISIR LE THÈME</AmbianceTitle>
        <AmbianceContainer>
          <AmbianceOption
            src="../assets/images/game/Ambiance/CadreJour.png"
            alt="Day options"
            $isActive={ambiance === "Day"}
            onClick={() => handleAmbianceChange("Day")}
          />
          <AmbianceOption
            src="../assets/images/game/Ambiance/CadreSunset.png"
            alt="Sunset options"
            $isActive={ambiance === "Sunset"}
            onClick={() => handleAmbianceChange("Sunset")}
          />
          <AmbianceOption
            src="../assets/images/game/Ambiance/CadreNuit.png"
            alt="Night options"
            $isActive={ambiance === "Night"}
            onClick={() => handleAmbianceChange("Night")}
          />
        </AmbianceContainer>
        <ButtonContainer>
          <AmbianceButton $bgimage="../../assets/images/game/Ambiance/BoutonJour.png">
            <input
              type="radio"
              name="theme"
              value="Day"
              onChange={() => handleAmbianceChange("Day")}
              checked={ambiance === "Day"}
            />
            <AmbianceText>Jour</AmbianceText>
          </AmbianceButton>
          <AmbianceButton $bgimage="../../assets/images/game/Ambiance/BoutonSunset.png">
            <input
              type="radio"
              name="theme"
              value="Sunset"
              onChange={() => handleAmbianceChange("Sunset")}
              checked={ambiance === "Sunset"}
            />
            <AmbianceText>Sunset</AmbianceText>
          </AmbianceButton>
          <AmbianceButton $bgimage="../../assets/images/game/Ambiance/BoutonNuit.png">
            <input
              type="radio"
              name="theme"
              value="Night"
              onChange={() => handleAmbianceChange("Night")}
              checked={ambiance === "Night"}
            />
            <AmbianceText>Nuit</AmbianceText>
          </AmbianceButton>
        </ButtonContainer>
        <CloseButton onClick={closeModal}>Confirmer</CloseButton>
      </Modal>
    </>
  );
};

export default Ambiance