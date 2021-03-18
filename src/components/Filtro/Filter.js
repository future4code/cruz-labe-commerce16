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
const ButtomSearch = styled.button`
    align-self: center;
    background-color: DodgerBlue;
    border-color: transparent transparent #fff transparent;
    color: white;
    border-radius: 10px;
    font-size:20px;
`
    /*
    Funcao do filtro
    filtro = () =>{
    const arrayCopia = [...array]
    
     let arrayCop = arrayCopia.filter((filtrado) =>{
        if(filtrado.preco >= 0 && filtrado.preco <= 20 ){
            return true
        }
        return false
    })
    return arrayCop
}

   isKeyEnter = (event) =>{
        if(event.key ==='Enter'){
            realiza funcao de renderizar os produtos
        }
    }
    */
export default class Filter extends React.Component {
    render() {
        return (
            <div>
                <Border>
                    <Title>Filtros de produtos</Title>
                    <DivLabel>
                        Valor Minimo
                        <InputContainer 
                            type="number" 
                            min="0"
                            value={this.props.valueMin}
                            onChange={this.props.onChangeValueMin}
                            placeholder="valor min"
                            >                                
                            </InputContainer>
                    </DivLabel>
                    <DivLabel>
                        Valor Máximo
                        <InputContainer 
                            type="number"
                            min="0"
                            value={this.props.valueMax}
                            onChange={this.props.onChangeValueMax}                            
                            ></InputContainer>
                    </DivLabel>
                    <DivLabel>
                        Buscar por Nome
                        <InputContainer 
                             type="text"
                             value={this.props.name}
                             onChange={this.props.onChangeName}
                             placeholder="Nome produto"
                            //  onKeyUp={this.isKeyEnter}
                             ></InputContainer>
                    </DivLabel>
                    <ButtomSearch>Search</ButtomSearch>                   
                </Border>
            </div>
        );
    }
}