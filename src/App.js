import React from 'react';
import './App.css';
import styled from 'styled-components';
import Home from './components/Home/Home'
import Filter from './components/Filtro/Filter'
import Carrinho from './components/Carrinho/Carrinho'


const AppContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  padding: 16px;
  gap: 8px;

  background-color: #EFE9E5;

function App() {
  return (
    <AppContainer>
      <Filter />
      <Home />
      <Carrinho/>
    </AppContainer>
  );
}

export default App;
