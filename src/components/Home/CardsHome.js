import React from 'react';
import styled from 'styled-components';

const MidiaBox = styled.div `
    display: flex;
    flex-direction: column;
    border: 1px solid green;
`


export default class CardsHome extends React.Component {
    render(){
        return(
            <div>
                <section className="Container">
                    <MidiaBox>
                        <img src="https://picsum.photos/100/100" width="100" height="100" alt="" />
                        <div className="title">Produto 1</div>
                        <div className="cost">R$ 200,00</div>
                        <button className="AddToCard">Adicionar ao Carrinho</button>
                    </MidiaBox>
                    <MidiaBox>
                        <img src="https://picsum.photos/100/100" width="100" height="100" alt="" />
                        <div className="title">Produto 1</div>
                        <div className="cost">R$ 200,00</div>
                        <button className="AddToCard">Adicionar ao Carrinho</button>
                    </MidiaBox>
                    <MidiaBox>
                        <img src="https://picsum.photos/100/100" width="100" height="100" alt="" />
                        <div className="title">Produto 1</div>
                        <div className="cost">R$ 200,00</div>
                        <button className="AddToCard">Adicionar ao Carrinho</button>
                    </MidiaBox>
                    <MidiaBox>
                        <img src="https://picsum.photos/100/100" width="100" height="100" alt="" />
                        <div className="title">Produto 1</div>
                        <div className="cost">R$ 200,00</div>
                        <button className="AddToCard">Adicionar ao Carrinho</button>
                    </MidiaBox>
                    <MidiaBox>
                        <img src="https://picsum.photos/100/100" width="100" height="100" alt="" />
                        <div className="title">Produto 1</div>
                        <div className="cost">R$ 200,00</div>
                        <button className="AddToCard">Adicionar ao Carrinho</button>
                    </MidiaBox>
                </section>
            </div>
        );
    }
}
