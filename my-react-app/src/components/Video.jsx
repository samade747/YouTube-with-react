import React from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    gap: 24px;

`;

const Content = styled.div`
    flex: 5;
`;

const Recommendation = styled.div`
    flex: 2;
`;

// 4419

const Video = () => {

    return <Container>
        <Content>content</Content>
        <Content>recommndation</Content>
    </Container>
};

export default Video