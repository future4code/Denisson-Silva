import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import styled from 'styled-components'
import TextField from '@material-ui/core/TextField'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

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
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const onChangeEmail = (event) => {
        setEmail(event.target.value)
    }
    
    const onChangePassword = (event) => {
        setPassword(event.target.value)
    }

    const goToBack = () => {
        history.goBack()
    }

    const onClickLogin = () => {
        console.log(email, password)
        const body = {
          email: email,
          password: password
        }
    
        axios
          .post(
            "https://us-central1-labenu-apis.cloudfunctions.net/labeX/denisson/login",
            body
          )
          .then((response) => {
            console.log("Deu certo: ", response.data.token)
            localStorage.setItem("token", response.data.token)
            history.push("/admin/trips/list")
          })
          .catch((error) => {
            console.log("Deu errado: ", error.response)
            alert("Email ou Senha invalido. Tente Novamente!")
            setEmail("")
            setPassword("")
          })
      }

    return(
        <Raiz>
            <HomeContainer>
                <h1>Login</h1>
                <Inputs>
                <TextField label="E-mail" onChange={onChangeEmail} value={email}></TextField>
                <TextField label="Senha" onChange={onChangePassword} value={password}></TextField>
                </Inputs>

                <Buttons>
                    <Button variant="contained" onClick={goToBack}>Voltar</Button>
                    <Button variant="contained" onClick={onClickLogin}>Entrar</Button>
                </Buttons>
                
            </HomeContainer>

           
            
            
            
        </Raiz>
    )
        
}