import React from 'react'
import styled from "styled-components"
import axios from 'axios'

const Element = styled.p`
border: 1px solid black;
width: 200px;
text-align: center;
margin-left: 570px;
padding: 15px;
display: flex;
justify-content: space-between;
`


export default class Lista extends React.Component {
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


      deletaUsuarios = (id) => {
        if (window.confirm("Deseja mesmo deletar a Playlist?")) {
        axios
            .delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,
              {
              headers: {
                Authorization: "denisson-silva-munoz"
                }
              }
            ).then((response) => {
              this.pegaUsuarios()
              alert("usuario deletado com sucesso!")
              console.log(response)
            }).catch((err) => {
              console.log(err)
            })
           
          }
        }

    render(){
        return(
        <div>
          <h2>Usuarios</h2>
          {this.state.listaDeNomes.map((elemento) => {
          return<Element key={elemento.id}>
                  {elemento.name}
                  <button onClick={() => this.deletaUsuarios(elemento.id)}>X</button>
                </Element>
          
        })}

        </div>
        )
    }
}
        
        
        
        