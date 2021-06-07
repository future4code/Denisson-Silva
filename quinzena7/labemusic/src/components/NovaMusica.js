import React from 'react'
import styled from "styled-components"
import axios from 'axios'

const CriarMusicaContainer = styled.div`
border: 1px solid black;
height: 75vh;

`

export default class Criar extends React.Component {
    state = {
        MusicaInputNome: '',
        ArtistaInput: '',
        UrlInput: ''
        
      }

    onChangeInputNome = (even) => {
        this.setState({MusicaInputNome: even.target.value})
        this.setState({ArtistaInputNome: even.target.value})
        this.setState({UrlInputNome: even.target.value})
    }
    
    
    
    onEnviaDados = (id) => {
        const body ={
            name: this.state.MusicaInputNome, 
            artist: this.state.ArtistaInput,
            ur: this.state.UrlInput
        }
        
      axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`, body,
      {headers: {
        Authorization: "denisson-silva-munoz"
      }})
      .then(() =>{
        console.log("foi")
        this.setState({MusicaInputNome: ""})
        this.setState({ArtistaInputNome: ""})
        this.setState({UrlInputNome: ""})
        
      
      })
      .catch(() => {
        console.log("Erro");
      });
      
      }

    render(){
        return(
        <CriarMusicaContainer>
          <h2>adicione Musicas</h2>
          <input type="text" placeholder="Nome" onChange={this.onChangeInputNome}></input>
          <input type="text" placeholder="Artista" onChange={this.onChangeInputNome}></input>
          <input type="text" placeholder="Link/Url" onChange={this.onChangeInputNome}></input>
          <button onClick={this.onEnviaDados}>Criar</button>
        </CriarMusicaContainer>
        )
    }
}