import React from 'react';
import styled from 'styled-components';
import Perguntas from './Perguntas';



const Principal = styled.div`
width: 100vw;

display: flex;
justify-content: center;
align-items: center;
`
const Forms = styled.div`
heigth: 80vh;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
align-content: space-between;

`


class Etapa2 extends React.Component {
    render() {
        return (
            <Principal>
                <Forms>
                <h2>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h2>
                <Perguntas pergunte={"5. Qual Curso?"} />
                <Perguntas pergunte={"6. Qual a unidade de ensino?"} />
                </Forms>
            </Principal>
        );
    }
}

export default Etapa2;