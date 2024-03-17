import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 360px;
  height: 150px;
  background-color: #f0f0f0;
  margin: 10px;
  cursor: pointer;
  border-radius: 10px;
`;

const Image = styled.div`
  width: 100%;
  height: 150px;
  background-color: #999;

`;

const Details = styled.div`
  width: 360px;
  margin-bottom: 45px;
  cursor: pointer;

`

const Card = () => {
    return (
    <Container> <Image src="https://avatars.githubusercontent.com/u/132301326?s=400&u=afd980760171a13379860a2907729502743e5ed7&v=4"/> </Container>
    // 37:08
    )
}

export default Card