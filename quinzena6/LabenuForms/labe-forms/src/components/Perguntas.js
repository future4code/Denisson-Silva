import React from 'react';
import styled from 'styled-components';

const Forms = styled.div`
heigth: 80vh;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
align-content: space-between;

`

export default function Perguntas(props){
    return(
        <Forms>
            <p>{props.pergunte}</p>
            <input onChange={props.onChangePergunta} value={props.valueInput}></input>
        </Forms>
    )
}