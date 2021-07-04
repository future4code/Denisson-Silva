import React from 'react'
import Button from '@material-ui/core/Button';
import styled from 'styled-components'
import TextField from '@material-ui/core/TextField';
import { useHistory } from 'react-router-dom';

const Raiz = styled.div`
text-align: center;
display: flex;
justify-content: center;
align-items: center;
font-family: Roboto;
`

const HomeContainer = styled.div`
text-align: center;
display: flex;
flex-direction: column;
padding: 12px;
height: 250px;
width: 400px;
`
const Buttons = styled.div`
display: flex;
justify-content: space-around;
margin-top: 15px;
`
const Inputs = styled.div`
display: flex;
flex-direction: column;
width: 400px;
`

export default function LoginPage () {
    const history = useHistory()

    const goToBack = () => {
        history.goBack()
    }
    return(
        <Raiz>
            <HomeContainer>
                <h1>Login</h1>
                <Inputs>
                <TextField label="E-mail" ></TextField>
                <TextField label="Senha"></TextField>
                </Inputs>

                <Buttons>
                    <Button variant="contained" onClick={goToBack}>Voltar</Button>
                    <Button variant="contained">Entrar</Button>
                </Buttons>
                
            </HomeContainer>

           
            
            
            
        </Raiz>
    )
        
}