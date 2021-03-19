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
    padding: 6px 6px;
    margin: 8px 0;
    box-sizing: border-box;
    border: none;
    border-bottom: 2px solid DodgerBlue;
    background-color:white;
    color: DodgerBlue;
`
    
export default class Filter extends React.Component {
    render() {
        return (
            <div>
                <Border>
                    <Title>Filtros de produtos</Title>
                    <DivLabel>
                        <InputContainer 
                            placeholder="Valor Mínimo"
                            type="number" 
                            min="0"
                            value={this.props.minFilter}
                            onChange={this.props.onChangeMinFilter}
                            >                                
                            </InputContainer>
                    </DivLabel>
                    <DivLabel>
                        <InputContainer
                            placeholder="Valor Máximo"
                            type="number"
                            min="0"
                            value={this.props.maxFilter}
                            onChange={this.props.onChangeMaxFilter}                            
                            ></InputContainer>
                    </DivLabel>
                    <DivLabel>
                        <InputContainer
                            placeholder="Buscar pelo nome" 
                            type="text"
                            value={this.props.nameFilter}
                            onChange={this.props.onChangeTitleFilter}                                               
                            ></InputContainer>
                    </DivLabel>                                        
                </Border>                
            </div>
        );
    }
}