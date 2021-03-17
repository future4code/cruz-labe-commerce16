import React from 'react';
import styled from 'styled-components';

const Border = styled.div`
     border: 1px solid black;
     display:flex;
     align-items:center;
     flex-direction:column;
     padding: 20px;
     height:60vh;
`;
const DivLabel = styled.label`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:flex-start;    
    margin-bottom:50px;
`;

export default class Filter extends React.Component {
    render() {
        return (
            <div>
                <Border>
                    <h3>Filtros de produtos</h3>
                    <DivLabel>
                        Valor Minimo
                        <input type="number" value=""></input>
                    </DivLabel>
                    <DivLabel>
                        Valor Máximo
                        <input type="number" value=""></input>
                    </DivLabel>
                    <DivLabel>
                        Buscar por Nome
                        <input type="text" value=""></input>
                    </DivLabel>
                </Border>
            </div>
        );
    }
}