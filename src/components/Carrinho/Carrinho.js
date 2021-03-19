import React from 'react';
import styled from 'styled-components';

const Cart = styled.div `
    border: 1px solid DodgerBlue;
    display: flex;
    align-content: space-between;
    padding-top: 2vh;
    align-items: center;
    justify-content: flex-start;
    height: 63.7vh;
    flex-direction: column;
    border-radius: 10px;
    color: dodgerblue;

`
const TituloCarrinho = styled.h3 `
    text-align:center;
    color: DodgerBlue;
    margin-top: 28px;
`
const Product = styled.div `
    display: flex;
    margin-top: 5vh;
    align-content: space-between;
    color: dodgerblue;
`
const Quantity = styled.p `
    padding-right: 10px;
    color: dodgerblue;
`
const ProductName = styled.p `
    padding-right: 10px;
    color: dodgerblue;
`
const Remove = styled.button `
    height:30px;
    margin-top:2.5vh;
    border-radius:6px;
    background-color: DodgerBlue;
    font-weight: 450;
    line-height: 1.3;
    box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2);
    margin-top:2.5vh;
    font-size: 1.0em;
    color:white;
    border:none;
    padding: 5px 10px;
`
const TotalValue = styled.div `
    margin-top: 5vh;
    color: dodgerblue;
`

export default class Carrinho extends React.Component {
    render() {
        return (
            <Cart>
                <TituloCarrinho>Carrinho</TituloCarrinho>
                <Product>
                    <Quantity>{this.props.products.quantity}</Quantity>
                    <ProductName>{this.props.products.title}</ProductName>
                    <Remove onClick={()=>this.props.onRemoveProductFromCart}>X</Remove>
                </Product>
                <TotalValue>R$ {this.props.totalValue} </TotalValue>
            </Cart>
        );
    }
}