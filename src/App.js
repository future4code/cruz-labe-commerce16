import React from 'react';
import './App.css';
import styled from 'styled-components';
import {Home} from './components/Home/Home';
import Filter from './components/Filtro/Filter';
import Carrinho from './components/Carrinho/Carrinho';

const AppContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  padding: 15px;
  background-color: #EFE9E5;
  margin: 0;
`
const products = [
  {
    id: 1,
    title: 'Produto 1',
    cost: 123,
    image: 'https://picsum.photos/200/200?a=1'
  },
  {
    id: 2,
    title: 'Produto 2',
    cost: 200,
    image: 'https://picsum.photos/200/200?a=2'
  },
  {
    id: 3,
    title: 'Produto 3',
    cost: 250,
    image: 'https://picsum.photos/200/200?a=3'
  },
  {
    id: 4,
    title: 'Produto 4',
    cost: 400,
    image: 'https://picsum.photos/200/200?a=4'
  },
  {
    id: 5,
    title: 'Produto 5',
    cost: 300,
    image: 'https://picsum.photos/200/200?a=4'
  },
  {
    id: 6,
    title: 'Produto 6',
    cost: 350,
    image: 'https://picsum.photos/200/200?a=4'
  },
  {
    id: 7,
    title: 'Produto 7',
    cost: 450,
    image: 'https://picsum.photos/200/200?a=4'
  },
  {
    id: 8,
    title: 'Produto 8',
    cost: 500,
    image: 'https://picsum.photos/200/200?a=4'
  }
]

export default class App extends React.Component {

  state = {
    minFilter: 100,
    maxFilter: 1000,
    nameFilter: 'Produto',
    productsInCart: [
      {
        id: 1,
        title: 'Produto 1',
        cost: 123,
        image: 'https://picsum.photos/200/200?a=1',
        quantity: 0
      },
      {
        id: 2,
        title: 'Produto 2',
        cost: 200,
        image: 'https://picsum.photos/200/200?a=2',
        quantity: 0
      },
    ]
  }


  onChangeMinFilter = (event) => {
    this.setState({minFilter: event.target.value})
  }

  onChangeMaxFilter = (event) => {
    this.setState({maxFilter: event.target.value})
  }

  onChangeTitleFilter = (event) => {
    this.setState({nameFilter: event.target.value})
  }

  onAddProductTCart = (productId) => {
    const productInCart = this.state.productsInCart.find(product => productId === product.id)

    if(productInCart){
      const newProductsInCart = this.state.productsInCart.map(product => {
        if(productId === product.id) {
          return{
            ...product,
            quantity: product.quantity + 1
          }
        }
        return product
      })
      this.setState({productsInCart: newProductsInCart})
    } else {
      const productToAdd = products.find(product => productId === product.id)
      const newProductsInCart = [...this.state.productsInCart, {...productToAdd, quantity: 0}]

      this.setState({productsInCart: newProductsInCart})
    }
  }

  onRemoveProductFromCart = (productId) => {
    const newProductsInCart = this.state.productsInCart.map((product) => {
      if(product.id === productId) {
        return {
          ...product,
          quantity: product.quantity - 1
        }
      }
      return product
    }).filter((product) => product.quantity > 0)

    this.setState({productsInCart: newProductsInCart})
  }


  render() {
    return (
      <AppContainer>        
        <Filter 
         maxFilter = {this.state.maxFilter}
         minFilter = {this.state.minFilter}
         nameFilter = {this.state.nameFilter}
         onChangeMaxFilter = {this.onChangeMaxFilter}
         onChangeMinFilter = {this.onChangeMinFilter}
         onChangeTitleFilter = {this.onChangeTitleFilter}      
        />
        <Home    
          products={products}
          minFilter={this.state.minFilter}
          maxFilter={this.state.maxFilter}
          nameFilter={this.state.nameFilter}/>
        <Carrinho />
      </AppContainer>
    );
  }
}