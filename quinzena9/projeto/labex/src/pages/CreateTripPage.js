import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import useForm from "../hooks/useForm"
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import { useHistory } from 'react-router';

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

export default function CreateTripPage () {
    const history = useHistory()
    const planetas = [
        {value: "Mercúrio"},
        {value: "Vênus"},
        {value: "Terra"},
        {value: "Marte"},
        {value: "Jupter"},
        {value: "Saturno"},
        {value: "Urano"},
        {value: "Netuno"},
        {value: "Plutão"}
    ]

    const goToBack = () => {
        history.goBack()
    }

    const { form, onChange, cleanFields } = useForm({
        name: "",
        planet: "",
        date: "",  
        description: "",
        durationInDays: 0
      })
    
      const onEnviar = (event) => {
        event.preventDefault()
        const token = localStorage.getItem("token")
        const body = {
            "name": form.name,
            "planet": form.planet,
            "date": form.date,
            "description": form.description,
            "durationInDays": form.durationInDays
        }
        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/denisson/trips`, body, {
            headers: {
              auth: token
            }
          })
          .then((response) => {
            console.log(response.data);
          })
          .catch((error) => {
            console.log("Deu erro: ", error.response);
          });


        
            cleanFields()
      };

    return(
        <Raiz>
            <h1>Criar Viajem</h1>
            
            <FormContainer >
                <TextField
                name={"name"}
                value={form.name}
                onChange={onChange}
                label="Nome da Viajem"
                required
                pattern={"^.{3,}"}
                title={"O nome deve ter no mínimo 3 letras"}
                />
                <TextField 
                    name={"planet"}   
                    select
                    required
                    label="Planeta"
                    value={form.planet}
                    onChange={onChange}
                    helperText="Selecione o Planeta"
                    >
                    {planetas.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                        {option.value}
                        </MenuItem>
                    ))}
                </TextField>
                
                <TextField
                name={"date"}
                value={form.date}
                onChange={onChange}
                required
                type={"date"}
                />

                <TextField
                name={"description"}
                value={form.description}
                onChange={onChange}
                label="Descrição"
                required
                               
                />

                <TextField
                name={"durationInDays"}
                value={form.durationInDays}
                onChange={onChange}
                label="Duração"
                required
                type={"number"}
                min={18}
                />

                <Buttons>
                    <Button variant="contained" onClick={goToBack}>Voltar</Button>
                    <Button variant="contained" onClick={onEnviar}>Enviar</Button>
                </Buttons>

            </FormContainer>
            
        </Raiz>
    )
        
}