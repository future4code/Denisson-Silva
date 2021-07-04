import React, { useEffect } from 'react'
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
height: 100vh;
`

const FormContainer = styled.div`
display: flex;
flex-direction: column;
padding: 12px;
height: 100vh;
width: 500px;
margin-top: 300px;
`
const Buttons = styled.div`
display: flex;
justify-content: space-around;
margin-top: 10px;
`
const CardAdm = styled.div`
border: 1px solid black;
display: flex;
justify-content: space-between;
padding: 12px;
margin-top: 50px;
`



const ProtectPage = () => {
    const history = useHistory()

    useEffect(() => {
        const token = localStorage.getItem('token')

        if(token === null) {
            console.log('não logado')
            history.push("/login")
        }
    }, [])
}

    

export default function AdminHomePage () {
    ProtectPage()
    const history = useHistory()

    const goToBack = () => {
        history.push("/")
    }

    const goToCreateTrip = () => {
        history.push("/admin/trips/create")
    }

    const logout = () => {
        const token = localStorage.getItem('token')
        localStorage.removeItem('token')
        history.push("/")
    }
    
    return(
        <Raiz>
            <FormContainer>
                <h1>Painel Administrativo</h1>
                <Buttons>
                    <Button variant="contained" onClick={goToBack}>Voltar</Button>
                    <Button variant="contained" onClick={goToCreateTrip}>Criar Viajem</Button>
                    <Button variant="contained" onClick={logout}>logout</Button>
                </Buttons>
                <CardAdm>
                    <p>candidato</p> <p>X</p>
                </CardAdm>
            </FormContainer>
        </Raiz>
    )
        
}