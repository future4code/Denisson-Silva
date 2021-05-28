import React from 'react'
import styled from "styled-components"
import axios from 'axios'

export default class Criar extends React.Component {
    state = {
        listaDeNomes: []
      }

    componentDidMount = () => {
    this.pegaUsuarios()
    } 

    pegaUsuarios = () => {
    axios
        .get(
            "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
            {
              headers: {
                Authorization: "denisson-silva-munoz"
              }
            }
        )
          .then((response) => {
            console.log(response.data);
            this.setState({listaDeNomes: response.data});
          })
          .catch((error) => {
            console.log(error.response);
          });
      };

    render(){
        return(
        <div>
          <h2>Usuarios</h2>
          {this.state.listaDeNomes.map((elemento) => {
          return <p>{elemento.name}</p>
        })}

        </div>
        )
    }
}
        
        
        
        