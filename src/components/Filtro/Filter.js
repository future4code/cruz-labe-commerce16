import React from 'react';
import styled from 'styled-components';

const Border = styled.div`
    border: 1px solid DodgerBlue;
    display:flex;
    align-items:center;
    flex-direction:column;
    padding: 20px;
    height:60vh;
    border-radius: 10px;
`;
const DivLabel = styled.label`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:flex-start;    
    margin-bottom:50px;
    color: DodgerBlue;
`;

const Title = styled.h3`
    color: DodgerBlue;
`
const InputContainer = styled.input`
    border-radius: 10px;
    border: 2px solid DodgerBlue;
`

export default class Filter extends React.Component {
    render() {
        return (
            <div>
                <Border>
                    <Title>Filtros de produtos</Title>
                    <DivLabel>
                        Valor Minimo
                        <InputContainer type="number" value=""></InputContainer>
                    </DivLabel>
                    <DivLabel>
                        Valor Máximo
                        <InputContainer type="number" value=""></InputContainer>
                    </DivLabel>
                    <DivLabel>
                        Buscar por Nome
                        <InputContainer type="text" value=""></InputContainer>
                    </DivLabel>
                </Border>
            </div>
        );
    }
}