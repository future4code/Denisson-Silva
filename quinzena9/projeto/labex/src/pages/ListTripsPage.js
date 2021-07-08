import React, { useEffect, useState } from 'react'
import axios from 'axios'
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
const CardViagens = styled.div`
border: 1px solid black;
padding: 12px;
margin-top: 10px;
`
const InfoContainer = styled.div`
display: flex;

text-align: center;
align-items: center;
`

export default function ListTripsPage () {
    const [viagens, setViagens] = useState([])
    const history = useHistory()

    useEffect(() => {
        refresh()
    },[])

    const refresh = () => {
     axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/denisson/trips`)

      .then((response) => {
        setViagens(response.data.trips)
        

      })
      .catch((error) => {
        console.log("Deu erro: ", error.response)
      });

}

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

                <h1>Lista de Viagens</h1>
                                    
                <div>
                    {viagens.map((viagem) => (
                        <CardViagens>
                        <InfoContainer><h3>Nome da Viagem:</h3><p>{viagem.name}</p></InfoContainer>
                        <InfoContainer><h3>Descrição: </h3><p>{viagem.description}</p></InfoContainer>
                        <InfoContainer><h3>Planeta: </h3><p>{viagem.planet}</p></InfoContainer>
                        <InfoContainer><h3>Duração: </h3><p>{viagem.durationInDays} dias</p></InfoContainer>
                        <InfoContainer><h3>Data: </h3><p>{viagem.date}</p></InfoContainer>
                        </CardViagens>                           
                   
                    ))}            
                </div>
                
                
           
            </FormContainer>
            
            
        </Raiz>
    )
        
}