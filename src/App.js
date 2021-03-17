import React from 'react';
import './App.css';
import styled from 'styled-components';
import Home from './components/Home/Home'

const AppContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  padding: 16px;
  gap: 8px;
`;

/*testando*/
function App() {
  return (
    <AppContainer>
      <div className="teste">teste1</div>
      <Home />
      <div className="teste">teste3</div>
    </AppContainer>
  );
}

export default App;

//teste
