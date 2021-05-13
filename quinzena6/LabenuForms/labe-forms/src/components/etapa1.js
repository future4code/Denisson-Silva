import React from 'react';
import styled from 'styled-components';
import Perguntas from './Perguntas'


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


class Etapa1 extends React.Component {
    render() {
        return (
            <Principal>
                <Forms>
                <h2>ETAPA 1 - DADOS GERAIS</h2>
                <Perguntas pergunte={"1. Qual o seu nome?"} />
                <Perguntas pergunte={"2. Qual sua idade?"} />
                <Perguntas pergunte={"3. Qual seu email?"} />
                <p>4. Qual a sua escolaridade?</p>
                <select>
                    <option>Ensino Médio incompleto</option>
                    <option>Ensino Médio completo</option>
                    <option>Ensino Superior incompleto</option>
                    <option>Ensino Superior completo</option>
                   
                </select>
                
                </Forms>
            </Principal>
        );
    }
}

export default Etapa1;