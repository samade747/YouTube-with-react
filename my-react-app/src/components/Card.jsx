import React from 'react'
import styled from 'styled-components'



const Container = styled.div`
  width: 360px;
  height: 150px;
  background-color: #f0f0f0;
  margin-bottom: 80px;
  cursor: pointer;
  border-radius: 10px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
`;

const Details = styled.div`
  display: flex; 
  width: 360px;
  margin-bottom: 45px;
  cursor: pointer;
`
const ChannelImage = styled.div`
  width: 36px;
  height: 36px;
  background-color: #999;
  border-radius: 50%;
  
`;

const Card = () => {
    return (
    <Container>
      <Image src="../img/avatar.png" />       
         <Details>
              <ChannelImage /> 
          </Details>       
       </Container>
    
      
    // 37:08
    )
}

export default Card