import React from 'react';
import styled from 'styled-components';
import CardsHome from './CardsHome'
// import CardsHome from './CardsHome'

const HomeContainer = styled.div`
    display: flex;


`

export default class Home extends React.Component {
    state = {

    };
    
    render(){
        return(
            <div>
                <HomeContainer>
                    <p>Quantidade de produtos: </p>
                    <p>Ordenação: </p>
                </HomeContainer>
                <CardsHome />
            </div>


        );
    }
}

