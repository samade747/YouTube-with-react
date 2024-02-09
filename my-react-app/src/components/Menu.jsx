import React from "react";
import styled from "styled-components";
import logoimg from "../img/logoimg.jpg"
import HomeIcon from '@mui/icons-material/Home';


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
    margin-bottom: 30px;    
`;

const Img = styled.img`
    width: 2px;
    height: 2px;
`;

const Item = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    cursor: pointer;

`;

const Menu = () => {
    return(
    <Container>
    <Wrapper>
        <Logo>
            <img src={logoimg} width={80} alt="logo" />            
        </Logo>
        <Item>
            <HomeIcon />
            Home
        </Item>
    </Wrapper>
    </Container>
    
    )
}

export default Menu