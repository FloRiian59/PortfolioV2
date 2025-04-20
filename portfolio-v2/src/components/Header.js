import React from 'react'
import styled from 'styled-components'

const HeaderStyle = styled.header`
display: flex;
justify-content: center;
align-items: center;
height: 50px;
background-color: #ee575a;
color: white;
font-family: "Press Start 2P";
font-size: 16px;
border-bottom: 5px solid #792947;
margin-bottom: 50px;
@media (min-width: 480px) {
    font-size: 20px;
}
`
const Header = () => {
    return (
        <HeaderStyle>
            Florian Lemaire
        </HeaderStyle>
    )
}
export default Header