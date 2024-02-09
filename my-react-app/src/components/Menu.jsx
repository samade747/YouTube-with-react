import React from "react";
import styled from "styled-components";
import logoimg from "../img/logoimg.jpg"
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import HistoryIcon from '@mui/icons-material/History';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';

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
flex-direction: column;
align-items: flex-start;
gap: 5px;
cursor: pointer;
padding: 7.5px;

`;

const Menu = () => {
    return(
    <Container>
    <Wrapper>
        <Item>
        <Logo>
            <img src={logoimg} width={80} alt="logo" />            
        </Logo>
        <div>
        <HomeIcon /> Home
        </div>

        <div><ExploreIcon /> Explore</div>    
            
        <div><SubscriptionsIcon /> Subscription</div>        
            
        <div><LibraryAddIcon /> Library</div>           
        
        <div><HistoryIcon />History</div>

        <div><LibraryMusicIcon /> Music</div>

        </Item>
    </Wrapper>
    </Container>
    
    )
}

export default Menu