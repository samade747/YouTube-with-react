import React from "react";
import styled from "styled-components";
import logoimg from "../img/logoimg.jpg"


const Container = styled.div`
flex:2;
background-color: #202020;
height: 100vh;
color: white;
` ;

const Wrapper = styled.div`
    padding: 10px 26px;
`;

const Logo = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;    
`;

const Img = styled.img`
    width: 2px;
    height: 2px;
`;

const Menu = () => {
    return(
    <Container>
    <Wrapper>
        <Logo>
            <img src={logoimg} width={80} alt="logo" />
            
        </Logo>
    </Wrapper>
    </Container>
    
    )
}

export default Menu