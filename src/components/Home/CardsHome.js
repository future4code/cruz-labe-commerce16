import React from 'react';
import styled from 'styled-components';

const MediaBox = styled.div `
    display: flex;
    flex-direction: column;
    border: 2px solid DodgerBlue;
    border-radius: 10px;
`
const AppToCard = styled.button`
    align-self: center;
    margin-top: 8px;
    margin-bottom: 16px;
    background-color: DodgerBlue;
    border-color: transparent transparent #fff transparent;
    color: white;
    border-radius: 10px;
`
const Title = styled.div`
    text-align: center;
    background-color: DodgerBlue;
    color: white;

`
const Cost = styled.div`
    text-align: center;
    
`
const ImgContainer = styled.img`
    width: 100%;
`
const ContainerDiv = styled.div`
`

export class CardsHome extends React.Component {

    render(){
        const product = this.props.product
        return <ContainerDiv>
                <MediaBox>
                    <ImgContainer src={product.image}/>
                    <Title><b><i>{product.title}</i></b></Title>
                    <Cost><b>R${product.cost},00</b></Cost>
                    <AppToCard>
                        Adicionar ao carrinho
                    </AppToCard>
                </MediaBox>
            </ContainerDiv>
    }
}

