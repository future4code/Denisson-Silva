import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'
import MenuItem from '@material-ui/core/MenuItem'
import TextField from '@material-ui/core/TextField'
import axios from 'axios'
import useForm from "../hooks/useForm"


const Raiz = styled.div`
text-align: center;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
font-family: Roboto;
`

const FormContainer = styled.form`
border: 1px solid black;
display: flex;
flex-direction: column;
justify-content: space-between;
padding: 20px;
height: 500px;
width: 500px;
`
const Buttons = styled.div`
display: flex;
justify-content: space-around;
margin-top: 10px;
`

export default function ApplicationFormPage () {
    const [viagens, setViagens] = useState([])
    const history = useHistory()   
    const [idViagem, setIdViagem] = useState("")

    const { form, onChange, cleanFields } = useForm({
        name: "",
        age: "",
        applicationText: "",  
        profession: "",
        country: ""
      })

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

    

    const onEnviar = (event) => {
        event.preventDefault()
        alert("Ainda em Desenvolvimento :/")
       /*  const token = localStorage.getItem("token")
        const body = {
            "name": form.name,
            "age": form.age,
            "applicationText": form.applicationText,
            "profession": form.profession,
            "country": form.country
        }
        
        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/denisson/trips/${event}/apply`, body, {
            headers: {
              auth: token
            }
          })
          .then((response) => {
            console.log(response.data)
            
            alert("Você fez sua Inscrição! Entremos em contato!!")

          })
          .catch((error) => {
            console.log("Deu erro: ", error.response)
          });


        
            cleanFields()
            console.log(event) */
      };

    const goToBack = () => {
        history.goBack()
    }

    return(
        <Raiz>
            
            <h1>Inscreva-se Para Uma Viagem</h1>
            <FormContainer >
                <TextField 
                  name={"name"}   
                  select
                  required
                  label="Viagem"
                  value={form.name}
                  onChange={onChange}
                  helperText="Escolha uma Viagem"
                >
                  {viagens.map((option) => (
                    <MenuItem key={option.id} value={option.name}>
                        {option.name}
                    </MenuItem>
                    
                  ))}
                </TextField>
                <TextField
                  name={"age"}
                  value={form.age}
                  onChange={onChange}
                  label="Idade"
                  required
                  type={"number"}
                  pattern={"^.{3,}"}
                  title={"O nome deve ter no mínimo 3 letras"}
                />
                
                
                <TextField
                  name={"applicationText"}
                  value={form.applicationText}
                  onChange={onChange}
                  required
                  helperText="Por que você quer ir?"
                  label="Texto de Candidatura"
                />

                <TextField
                  name={"profession"}
                  value={form.profession}
                  onChange={onChange}
                  label="Profissão"
                  required
                               
                />

                <TextField
                  name={"country"}
                  value={form.country}
                  onChange={onChange}
                  label="País"
                  required
                  
                />
            
                         
                
                <Buttons>
                    <Button onClick={goToBack} variant="contained">Voltar</Button>
                    <Button onClick={onEnviar} variant="contained">Enviar</Button>                    
                </Buttons>
            </FormContainer>
        </Raiz>
    )
        
}