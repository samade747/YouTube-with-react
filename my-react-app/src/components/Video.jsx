import React from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    gap: 24px;

`;

const VideoWrapper = styled.div`


`;

const Title = styled.h1`
`

const Content = styled.div`
    flex: 5;
`;

const Recommendation = styled.div`
    flex: 2;
`;

const Details = styled.div``
const Info = styled.div``
const Buttons = styled.div``
const Button = styled.div``


// 4419

const Video = () => {

    return <Container>
        <Content>
            <VideoWrapper>
                <iframe>
                    width="100%"
                    height="720"
                    src="https://www.youtube.com/embed/9bZkp7q19f0"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                </iframe>
            </VideoWrapper>           
        <title>YouTube video player</title>
        <Details>
            <Info>65898,744 views • 3 days ago</Info>
            <Buttons>
                <button>Button</button>
            </Buttons> 
        </Details>

        </Content>



        <Content>recommndation</Content>
    </Container>;
};

export default Video;