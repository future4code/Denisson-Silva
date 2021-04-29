import React from 'react';
/* import './CardPequeno.css' */
import styled from 'styled-components'

const SmallCard = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 80px;
`

const Imagem = styled.img`
    width: 50px;
    margin-right: 10px;
    border-radius: 50%;
`
const Info = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: flex-start;

`


function CardPequeno(props) {
    return (
        <SmallCard>
            <Imagem src={ props.imagem } />
            <Info>
                <h4>{ props.nome }</h4>
                <p>{ props.descricao }</p>
            </Info>
        </SmallCard>
    )
}

export default CardPequeno;