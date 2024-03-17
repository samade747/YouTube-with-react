import React from 'react'
import styled from 'styled-components'
import Card from '../components/Card'

const Container = styled.div`
display: flex;
flex-wrap: wrap;
`

const Home = () => {
    return (
        <Container>
       <Card />
        </Container>
    )
}

export default Home