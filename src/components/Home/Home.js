import React from 'react';
import styled from 'styled-components';
import CardsHome from './CardsHome'
// import CardsHome from './CardsHome'

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
                <CardsHome />
            </div>


        );
    }
}

