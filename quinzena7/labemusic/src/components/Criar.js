import React from 'react'
import styled from "styled-components"
import axios from 'axios'

const CriarContainer = styled.div`
border: 1px solid black;
height: 75vh;

`

export default class Criar extends React.Component {
    state = {
        valorInputNome: '',
        
      }

    onChangeInputNome = (even) => {
    this.setState({valorInputNome: even.target.value})
    }
    
    
    
    onEnviaDados = () => {
        const body ={
          name: this.state.valorInputNome
          
      }
      
      axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", body,
      {headers: {
        Authorization: "denisson-silva-munoz"
      }})
      .then(() =>{
        console.log("foi")
        this.setState({valorInputNome: " "})
        
      
      })
      .catch(() => {
        console.log("Erro");
      });
      this.setState({valorInputNome: " "})
      }

    render(){
        return(
        <CriarContainer>
          <h2>Crie Playlist</h2>
          <input type="text" placeholder="Nome" onChange={this.onChangeInputNome}></input>
          <button onClick={this.onEnviaDados}>Criar</button>
        </CriarContainer>
        )
    }
}
        
        
        
        