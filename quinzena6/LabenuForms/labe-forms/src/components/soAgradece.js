import react from 'react'
import styled from 'styled-components';

const Header = styled.div`
heigth: 80vh;
display: flex;
flex-direction: column;
align-items: center;


`



export default function SoAgradece(props){
    return(
        <Header>
            <h2>Pronto!! Muito obrigado pelas respostas!</h2>
            <h3>Agora vamos analisar seus dados e entraremos em contato!!</h3>
        </Header>
    )
}