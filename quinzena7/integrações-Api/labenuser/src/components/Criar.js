import React from 'react'
import styled from "styled-components"
import axios from 'axios'

export default class Criar extends React.Component {
    state = {
        valorInputNome: '',
        valorInputEmail: '',
      }

    onChangeInputNome = (even) => {
    this.setState({valorInputNome: even.target.value})
    }
    
    onChangeInputEmail = (even) => {
     this.setState({valorInputEmail: even.target.value})
    }
    
    onEnviaDados = () => {
        const body ={
          name: this.state.valorInputNome,
          email: this.state.valorInputEmail
      }
      
      axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", body,
      {headers: {
        Authorization: "denisson-silva-munoz"
      }})
      .then(() =>{
        console.log("foi")
        this.setState({valorInputNome: ""})
        this.setState({valorInputEmail: ""})
      
      })
      .catch(() => {
        console.log("Erro");
      });
      
      }

    render(){
        return(
            <div>
          <h2>Criar Usuário</h2>
          <input type="text" placeholder="Nome" onChange={this.onChangeInputNome}></input>
          <input type="email" placeholder="Email" onChange={this.onChangeInputEmail}></input>
          <button onClick={this.onEnviaDados}>Criar</button>
        </div>
        )
    }
}
        
        
        
        