import React from 'react'
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import styled from 'styled-components'


const Raiz = styled.div`
text-align: center;
display: flex;
justify-content: center;
align-items: center;
font-family: Roboto;
`

const HomeContainer = styled.div`


display: flex;
flex-direction: column;
padding: 12px;
height: 200px;
width: 600px;

`
const Buttons = styled.div`
display: flex;
justify-content: space-around;
margin-top: 10px;
`




export default function HomePage() {
  const history = useHistory()

  const goToTripList = () => {
    
    history.push("/trips/list")
  }

  const goToLogin = () => {
    history.push("/login")
  }
  return (
    <Raiz >
      <HomeContainer>
        <h1>LabeX</h1>
        <Buttons>
          <Button variant="contained" onClick={goToTripList}>Ver Viajens</Button>
          <Button variant="contained" onClick={goToLogin}>Area Admin</Button>
        </Buttons>
      </HomeContainer>
    </Raiz>
  );
}

 
