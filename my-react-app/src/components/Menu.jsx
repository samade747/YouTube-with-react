import React from "react";
import styled from "styled-components";


const Container = styled.div`
flex:2;
background-color: #202020;
height: 100vh;
color: white;` 

const Wrapper = styled.div`
    padding: 10px 26px;`

const Logo = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;    
`

const lmg = styled.img`
    height: 25px
`

const Menu = () => {
    return(
    <Container>
    <Wrapper>
        <logo>
            <Img src="">
            youtube
        </logo>
    </Wrapper>
    </Container>
    
    )
}

export default Menu