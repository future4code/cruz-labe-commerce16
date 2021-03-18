import React from 'react';
import styled from 'styled-components';
import CardsHome from './CardsHome'

const HomeContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    margin-bottom: -80px;
    background-color: DodgerBlue;
    margin-right: 20px;
    margin-left: 20px;
    border-radius: 10px;
`
const Container = styled.section`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
    grid-auto-rows: minmax(200px, 50%);
    padding: 100px 20px;
`

const InputContainer = styled.div`    
    margin-right: 20px;
    
`

const ProductQuantity = styled.p`   
    margin-left: 20px;
    color: white;
`

const SelectContainer = styled.select`
  background-color: DodgerBlue;
  color: white;
  padding: 6px 10px;
  border: 1px solid white;
  border-radius: 10px;
`

const OptionContainer = styled.option`
  background-color: rgba(0, 0, 0, 0.1);
  color: white;
`

const LabelWhite = styled.label`
    color: white;

`

export default class Home extends React.Component {
    state = {
        quantity: []
        
    };
    
    render(){
        return( 
            <div>
                <HomeContainer>
                    <ProductQuantity>Quantidade de produtos: 8</ProductQuantity>
                    <InputContainer>    
                        <LabelWhite>Ordenação: </LabelWhite>
                        <SelectContainer  value="" onChange="">
                            <OptionContainer value="crescente">Crescente</OptionContainer>
                            <OptionContainer value="decrescente">Decrescente</OptionContainer>
                        </SelectContainer>
                    </InputContainer>
                </HomeContainer>
                <Container>
                    <CardsHome 
                    image={"https://picsum.photos/90/90"}
                    title={"Produto 1"}
                    />
                    <CardsHome 
                    image={"https://picsum.photos/97/97"}
                    title={"Produto 2"}
                    />
                    <CardsHome 
                    image={"https://picsum.photos/96/96"}
                    title={"Produto 3"}
                    />
                    <CardsHome 
                    image={"https://picsum.photos/95/95"}
                    title={"Produto 4"}
                    />
                    <CardsHome 
                    image={"https://picsum.photos/94/94"}
                    title={"Produto 5"}
                    />
                    <CardsHome 
                    image={"https://picsum.photos/93/93"}
                    title={"Produto 6"}
                    />
                    <CardsHome 
                    image={"https://picsum.photos/92/92"}
                    title={"Produto 7"}
                    />
                    <CardsHome 
                    image={"https://picsum.photos/91/91"}
                    title={"Produto 8"}
                    />
                </Container>
            </div>
        );
    }
}

