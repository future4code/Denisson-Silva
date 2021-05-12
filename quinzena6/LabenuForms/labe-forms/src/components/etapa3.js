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

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;


`


class Etapa3 extends React.Component {
    render() {
        return (
            <Principal>
                <Forms>
                    <h2>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h2>
                    <Perguntas pergunte={"7. Por que você não terminou um curso de graduação?"} />
                    <p>8. Você fez algum curso complementar</p>
                    <select>
                        <option>Nenhum</option>
                        <option>Curso Tecnico</option>
                        <option>Curso de Inglês</option>
                    </select>
                </Forms>
            </Principal>
        );
    }
}

export default Etapa3;