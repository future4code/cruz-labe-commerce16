import React from 'react';
import styled from 'styled-components';

// const Container = styled.section`
//     display: grid;
//     grid-template-columns: repeat(4, 1fr);
//     grid-gap: 10px;
//     grid-auto-rows: minmax(200px, 50%);
//     padding: 100px 20px;
// `
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

export default class CardsHome extends React.Component {

    render(){
        return(
            <ContainerDiv>
                <MediaBox>
                    <ImgContainer src={this.props.image} width="100" height="150" alt={this.props.title} />
                    <Title>{this.props.title}</Title>
                    <Cost><b>{this.props.cost}</b></Cost>
                    <AppToCard>Adicionar ao Carrinho</AppToCard>
                </MediaBox>
            </ContainerDiv>
        );
    }
}

/* <MediaBox>
                        <img src="https://picsum.photos/90/90" width="200" height="250" alt="" />
                        <Title>Produto 1</Title>
                        <Cost><b>R$ 200,00</b></Cost>
                        <AppToCard>Adicionar ao Carrinho</AppToCard>
                    </MediaBox>
                    <MediaBox>
                        <img src="https://picsum.photos/95/95" width="200" height="250" alt="" />
                        <Title>Produto 2</Title>
                        <Cost><b>R$ 200,00</b></Cost>
                        <AppToCard>Adicionar ao Carrinho</AppToCard>
                    </MediaBox>
                    <MediaBox>
                        <img src="https://picsum.photos/96/96" width="200" height="250" alt="" />
                        <Title>Produto 3</Title>
                        <Cost><b>R$ 200,00</b></Cost>
                        <AppToCard>Adicionar ao Carrinho</AppToCard>
                    </MediaBox>
                    <MediaBox>
                        <img src="https://picsum.photos/97/97" width="200" height="250" alt="" />
                        <Title>Produto 4</Title>
                        <Cost><b>R$ 200,00</b></Cost>
                        <AppToCard>Adicionar ao Carrinho</AppToCard>
                    </MediaBox>
                    <MediaBox>
                        <img src="https://picsum.photos/92/92" width="200" height="250" alt="" />
                        <Title>Produto 5</Title>
                        <Cost><b>R$ 200,00</b></Cost>
                        <AppToCard>Adicionar ao Carrinho</AppToCard>
                    </MediaBox>
                    <MediaBox>
                        <img src="https://picsum.photos/93/93" width="200" height="250" alt="" />
                        <Title>Produto 6</Title>
                        <Cost><b>R$ 200,00</b></Cost>
                        <AppToCard>Adicionar ao Carrinho</AppToCard>
                    </MediaBox>
                    <MediaBox>
                        <img src="https://picsum.photos/94/94" width="200" height="250" alt="" />
                        <Title>Produto 7</Title>
                        <Cost><b>R$ 200,00</b></Cost>
                        <AppToCard>Adicionar ao Carrinho</AppToCard>
                    </MediaBox>
                    <MediaBox>
                        <img src="https://picsum.photos/91/91" width="200" height="250" alt="" />
                        <Title>Produto 8</Title>
                        <Cost><b>R$ 200,00</b></Cost>
                        <AppToCard>Adicionar ao Carrinho</AppToCard>
                    </MediaBox> */

                    // state = {
                    //     nameFilter: 'Produto',
                    //     maxFilter: 600,
                    //     minFilter: 100,
                    //     productsInCart: [
                    //         {
                    //             id: 1,
                    //             name: "Produto 1",
                    //             value: 150,
                    //             image: "https://picsum.photos/200/200",
                    //         },
                    //         {
                    //             id: 2,
                    //             name: "Produto 2",
                    //             value: 200,
                    //             image: "https://picsum.photos/200/200",
                    //         },
                    //         {
                    //             id: 3,
                    //             name: "Produto 3",
                    //             value: 250,
                    //             image: "https://picsum.photos/200/200",
                    //         },
                    //         {
                    //             id: 4,
                    //             name: "Produto 4",
                    //             value: 250,
                    //             image: "https://picsum.photos/200/200",
                    //         },
                    //         {
                    //             id: 5,
                    //             name: "Produto 5",
                    //             value: 300,
                    //             image: "https://picsum.photos/200/200",
                    //         },
                    //         {
                    //             id: 6,
                    //             name: "Produto 6",
                    //             value: 400,
                    //             image: "https://picsum.photos/200/200",
                    //         },
                    //         {
                    //             id: 7,
                    //             name: "Produto 7",
                    //             value: 500,
                    //             image: "https://picsum.photos/200/200",
                    //         },
                    //         {
                    //             id: 8,
                    //             name: "Produto 8",
                    //             value: 450,
                    //             image: "https://picsum.photos/200/200",
                    //         }
                    //     ]