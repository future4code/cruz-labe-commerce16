import React from 'react';
import styled from 'styled-components';

const MidiaBox = styled.div `
    display: flex;
    flex-direction: column;
    border: 2px solid DodgerBlue;
    border-radius: 10px;
`
const Container = styled.section`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10px;
    grid-auto-rows: minmax(200px, 50%);
    padding: 100px 20px;
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


export default class CardsHome extends React.Component {
    render(){
        return(
            <div>
                <Container>
                    <MidiaBox>
                        <img src="https://picsum.photos/90/90" width="200" height="250" alt="" />
                        <Title>Produto 1</Title>
                        <Cost><b>R$ 200,00</b></Cost>
                        <AppToCard>Adicionar ao Carrinho</AppToCard>
                    </MidiaBox>
                    <MidiaBox>
                        <img src="https://picsum.photos/95/95" width="200" height="250" alt="" />
                        <Title>Produto 2</Title>
                        <Cost><b>R$ 200,00</b></Cost>
                        <AppToCard>Adicionar ao Carrinho</AppToCard>
                    </MidiaBox>
                    <MidiaBox>
                        <img src="https://picsum.photos/96/96" width="200" height="250" alt="" />
                        <Title>Produto 3</Title>
                        <Cost><b>R$ 200,00</b></Cost>
                        <AppToCard>Adicionar ao Carrinho</AppToCard>
                    </MidiaBox>
                    <MidiaBox>
                        <img src="https://picsum.photos/97/97" width="200" height="250" alt="" />
                        <Title>Produto 4</Title>
                        <Cost><b>R$ 200,00</b></Cost>
                        <AppToCard>Adicionar ao Carrinho</AppToCard>
                    </MidiaBox>
                    <MidiaBox>
                        <img src="https://picsum.photos/92/92" width="200" height="250" alt="" />
                        <Title>Produto 5</Title>
                        <Cost><b>R$ 200,00</b></Cost>
                        <AppToCard>Adicionar ao Carrinho</AppToCard>
                    </MidiaBox>
                    <MidiaBox>
                        <img src="https://picsum.photos/93/93" width="200" height="250" alt="" />
                        <Title>Produto 6</Title>
                        <Cost><b>R$ 200,00</b></Cost>
                        <AppToCard>Adicionar ao Carrinho</AppToCard>
                    </MidiaBox>
                    <MidiaBox>
                        <img src="https://picsum.photos/94/94" width="200" height="250" alt="" />
                        <Title>Produto 7</Title>
                        <Cost><b>R$ 200,00</b></Cost>
                        <AppToCard>Adicionar ao Carrinho</AppToCard>
                    </MidiaBox>
                    <MidiaBox>
                        <img src="https://picsum.photos/91/91" width="200" height="250" alt="" />
                        <Title>Produto 8</Title>
                        <Cost><b>R$ 200,00</b></Cost>
                        <AppToCard>Adicionar ao Carrinho</AppToCard>
                    </MidiaBox>
                </Container>
            </div>
        );
    }
}
