import styled, { ThemeProvider } from "styled-components";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar"; 
import './App.css';
import { darkTheme } from "./utils/Theme.js";
import { LightTheme } from "./utils/Theme.js";
import { useState } from "react";

const Container = styled.div`
  display: flex;

`;

const Main = styled.div`
flex: 7;
background-color: #181818;
 
`;
const Wrapper = styled.div``;

function App() {
  const [darkMode, setDarkMode] = useState(true)




  return (
    <ThemeProvider theme={darkMode ? darkTheme : LightTheme}>

    <Container>
      <Menu darkMode={darkMode} setDarkMode={setDarkMode} />
      <Main>
        <Navbar />        
        <Wrapper />
        <Wrapper>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>


        </Wrapper>
        
      </Main>
    </Container>
    </ThemeProvider>
  );
}

export default App;
