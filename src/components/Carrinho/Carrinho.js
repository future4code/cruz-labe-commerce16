import React from 'react';
import styled from 'styled-components';

const Cart = styled.div `
    border: 1px solid black;
    display: flex;
    align-content: space-between;
    padding-top: 2vh;
    align-items: center;
    justify-content: flex-start;
    height: 63.7vh;
    flex-direction: column;
`
const TituloCarrinho = styled.h3 `
    text-align:center;
`
const Product = styled.div `
    display: flex;
    margin-top: 5vh;
    align-content: space-between;
`
const Quantity = styled.p `
    padding-right: 10px;
`
const ProductName = styled.p `
    padding-right: 10px;
`
const Remove = styled.button `
    height:25px;
    margin-top:2.5vh;
`
const TotalValue = styled.div `
    margin-top: 5vh;
`

export default class Carrinho extends React.Component {
    render() {
        return (
            <Cart>
                <TituloCarrinho>Carrinho</TituloCarrinho>
                <Product>
                    <Quantity> 0x</Quantity>
                    <ProductName>yyyyyyyyyyyyy</ProductName>
                    <Remove>Remover</Remove>
                </Product>
                <TotalValue>R$ 000,000 </TotalValue>
            </Cart>
        );
    }
}