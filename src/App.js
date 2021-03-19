import React from 'react';
import './App.css';
import styled from 'styled-components';
import {Home} from './components/Home/Home';
import Filter from './components/Filtro/Filter';
import Carrinho from './components/Carrinho/Carrinho';
import imagem1 from './imagem/planetOne.png';
import imagem2 from './imagem/2.png';
import imagem3 from './imagem/3.png';
import imagem4 from './imagem/4.png';
import imagem5 from './imagem/5.png';
import imagem6 from './imagem/6.png';
import imagem7 from './imagem/7.png';
import imagem8 from './imagem/8.png';

const AppContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  padding: 15px;
  margin: 0;
`
const products = [
  {
    id: 1,
    title: 'Produto1',
    cost: 123,
    image: imagem1,
  },
  {
    id: 2,
    title: 'Produto2',
    cost: 200,
    image: imagem2
  },
  {
    id: 3,
    title: 'Produto3',
    cost: 250,
    image: imagem3
  },
  {
    id: 4,
    title: 'Produto4',
    cost: 400,
    image: imagem4
  },
  {
    id: 5,
    title: 'Produto5',
    cost: 300,
    image: imagem5
  },
  {
    id: 6,
    title: 'Produto6',
    cost: 350,
    image: imagem6
  },
  {
    id: 7,
    title: 'Produto7',
    cost: 450,
    image: imagem7
  },
  {
    id: 8,
    title: 'Produto8',
    cost: 500,
    image: imagem8
  }
]

export default class App extends React.Component {

  state = {
    quantity:0,
    totalValue:0,
    minFilter: '',
    maxFilter: '',
    nameFilter: '',
    productsInCart: [
      {
        id: 1,
        title: 'Produto1',
        cost: 123,
        image: 'https://picsum.photos/200/200?a=1',
        quantity: 0
      },
      {
        id: 2,
        title: 'Produto2',
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

  onAddProductToCart = (productId) => {
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
      const newProductsInCart = [...this.state.productsInCart, {...productToAdd, quantity: 1}]

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
          nameFilter={this.state.nameFilter}
          onAddProductToCart={this.onAddProductToCart}/>
        <Carrinho products={products}/>
      </AppContainer>
    );
  }
}