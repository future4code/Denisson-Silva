import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';

const Raiz = styled.div`
text-align: center;
display: flex;
justify-content: center;
align-items: center;
font-family: Roboto;
`

const FormContainer = styled.div`

border: 1px solid black;
display: flex;
flex-direction: column;
justify-content: space-between;
padding: 12px;
height: 500px;
width: 500px;

`


const Inputs = styled.input`
border: 1px solid black;
margin-top: 5px;
margin-bottom: 5px;
border-radius: 5px;
`

const Buttons = styled.div`
display: flex;
justify-content: space-around;
margin-top: 10px;
`

export default function ApplicationFormPage () {

    const history = useHistory()

    const goToBack = () => {
        history.goBack()
    }

    return(
        <Raiz>
            <FormContainer>
                <h1>Inscreva-se Para Uma Viajem</h1>
                <FormControl >
                    <InputLabel>Escolha uma Viajem</InputLabel>
                    <Select>        
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>                        
                    </Select>
                </FormControl>
                <TextField label="Nome"/>
                <TextField label="Idade"/>
                <TextField label="Texto de Candidatura"/>
                <TextField label="Profissão"/>     
                <TextField label="País"/>     

                         
                
                <Buttons>
                    <Button onClick={goToBack} variant="contained">Voltar</Button>
                    <Button onClick={goToBack} variant="contained">Enviar</Button>                    
                </Buttons>
            </FormContainer>
        </Raiz>
    )
        
}