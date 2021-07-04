import React from 'react'
import { useHistory } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import styled from 'styled-components'

const Raiz = styled.div`
text-align: center;
display: flex;
justify-content: center;
align-items: center;
font-family: Roboto;
`

const FormContainer = styled.div`


display: flex;
flex-direction: column;
padding: 12px;
height: 100vh;
width: 500px;

`
const Buttons = styled.div`
display: flex;
justify-content: space-around;
margin-top: 10px;
`
const CardViajantes = styled.div`
border: 1px solid black;
display: flex;
justify-content: flex-start;
padding: 12px;

`

export default function ListTripsPage () {
    const history = useHistory()

    const goToBack = () => {
        history.goBack()
    }

    const goToApplicationForm = () => {
        history.push("/trips/application")
    }
    return(
        <Raiz>
            <FormContainer>
                <Buttons>
                    <Button onClick={goToBack} variant="contained">Voltar</Button>
                    <Button onClick={goToApplicationForm} variant="contained">Inscrever-se</Button>
                </Buttons>

                <h1>Lista de Viajens</h1>
                <CardViajantes>                    
                    <div>
                        <p>Nome: </p>
                        <p>Descrição: </p>
                        <p>Planeta: </p>                        
                        <p>Duração: </p>
                        <p>Data: </p>                       
                    </div>
                </CardViajantes>
                
           
            </FormContainer>
            
            
        </Raiz>
    )
        
}