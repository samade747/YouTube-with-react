import React from "react";
import styled from "styled-components";
import logoimg from "../img/logoimg.jpg"
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import HistoryIcon from '@mui/icons-material/History';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import SportsTennisIcon from '@mui/icons-material/SportsTennis';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SettingsIcon from '@mui/icons-material/Settings';
import FlagIcon from '@mui/icons-material/Flag';
import HelpIcon from '@mui/icons-material/Help';
import LightModeIcon from '@mui/icons-material/LightMode';

const Container = styled.div`
flex:2;
background-color: #202020;
height: 100%;
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
    width: 99px;
    height: 50px;
`;

const Item = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 5px;
cursor: pointer;
padding: 11.5px 0px;

`;

const Hr = styled.div`
    margin: 15px 0px;
    border: 0.5px solid #373737;
`;

const Login = styled.div``
const Button = styled.button``



const Menu = () => {
    return(
    <Container>
    <Wrapper>
        <Item>
        <Logo>
       
            <Img src={logoimg} width={80} alt="logo" />            
       
        </Logo>
        <div>
        <HomeIcon /> Home
        </div>

        <div><ExploreIcon /> Explore</div>    
            
        <div><SubscriptionsIcon /> Subscription</div>        

        <Hr />

        <div><LibraryAddIcon /> Library</div>           
        
        <div><HistoryIcon />History</div>

        <Hr />

        <Login>
        Sign in to like video, comments and subscribe.
        <Hr />
        <Button>SIGN IN</Button>
        <Hr />
        </Login>

        <Hr />

        <div><LibraryMusicIcon /> Music</div>

        <div><SportsTennisIcon /> Sports</div>

        <div><SportsEsportsIcon /> Gaming</div>

        <div><NewspaperIcon /> Newspaper</div>

        <div><LiveTvIcon /> Live</div>

        <div><SettingsIcon /> Settings</div>

        <div><FlagIcon /> Report</div>

        <div><HelpIcon /> Help</div>

        <div><LightModeIcon /> LightMode</div>
        

        </Item>
    </Wrapper>
    </Container>
    
    )
}

export default Menu