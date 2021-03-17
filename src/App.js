import React from 'react';
import './App.css';
import styled from 'styled-components';
import Filter from './components/Filtro/Filter'

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
      <Filter />
      <div className="teste">teste2</div>
      <div className="teste">teste3</div>
    </AppContainer>
  );
}

export default App;

//teste
