import React from 'react';
/* import './CardGrande.css' */
import styled from 'styled-components'

const BigCard = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
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

function CardGrande(props) {
    return (
        <BigCard>
            <Imagem src={ props.imagem } />
            <Info>
                <h4>{ props.nome }</h4>
                <p>{ props.descricao }</p>
            </Info>
        </BigCard>
    )
}

export default CardGrande;