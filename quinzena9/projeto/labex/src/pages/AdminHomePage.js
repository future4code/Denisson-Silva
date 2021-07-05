import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import styled from 'styled-components'
import Fab from '@material-ui/core/Fab';
import DeleteIcon from '@material-ui/icons/Delete';

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
text-align: center;
align-items: center;
border: 1px solid black;
display: flex;
justify-content: space-between;
padding: 12px;
margin-top: 50px;
:hover{
    background-color: #afafaf;
    cursor: pointer;
    transition: ease 0.2s;
  }
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

    const deletarViagem = (id) => {
        
        const token = localStorage.getItem('token')
        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/denisson/trips/${id}`, {
            headers: {
              auth: token
            }
        })
        
        .then((response) => {
            alert("Viagem Excluída com Sucesso!!!")
            refresh()
        })
        .catch((error) => {
            console.log("Deu erro: ", error.response)
        }); 
        
    }
    
    return(
        <Raiz>
            <FormContainer>
                <h1>Painel Administrativo</h1>
                <Buttons>
                    <Button variant="contained" onClick={goToBack}>Voltar</Button>
                    <Button variant="contained" onClick={goToCreateTrip}>Criar Viagem</Button>
                    <Button variant="contained" onClick={logout}>logout</Button>
                </Buttons>
                <div>
                    {viagens.map((viagem) => (
                        <CardAdm key={viagem.id}>
                            {viagem.name}
                            <Fab size="small" color="default" aria-label="add" key={viagem.id} onClick={() => deletarViagem(viagem.id)}>                            
                                <DeleteIcon />
                                
                            </Fab>
                        </CardAdm>
                    ))}            
                </div>
            </FormContainer>
        </Raiz>
    )
        
}