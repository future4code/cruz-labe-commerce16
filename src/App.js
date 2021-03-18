import React from 'react';
import './App.css';
import styled from 'styled-components';
import Home from './components/Home/Home'
import Filter from './components/Filtro/Filter'
import Carrinho from './components/Carrinho/Carrinho'


const AppContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  padding: 15px;
  background-color: #EFE9E5;
  margin: 0;
`

export default class App extends React.Component {
  state = {
    valueMax: 0,
    valueMin: 0,
    name: ""
  } 

  onChangeValueMax = (event) => {
    this.setState({ valueMax: event.target.value });
  }

  onChangeValueMin = (event) => {
    this.setState({ valueMin: event.target.value })
  }

  onChangeName = (event) => {
    this.setState({ name: event.target.value })
  }


  render() {
    return (
      <AppContainer>
        <Filter 
          valueMax = {this.state.valueMax}
          valueMin = {this.state.valueMin}
          name = {this.state.name}
          onChangeValueMax = {this.onChangeValueMax}
          onChangeValueMin = {this.onChangeValueMin}
          onChangeName = {this.onChangeName}          
        />
        <Home />
        <Carrinho />
      </AppContainer>
    );
  }
}


