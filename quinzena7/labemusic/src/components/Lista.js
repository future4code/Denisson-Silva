import React from 'react'
import styled from "styled-components"
import axios from 'axios'


const ListaContainer = styled.div`
width: 300px;
height: 75vh;
display:flex;
flex-direction: column;
margin-left: 500px;
align-items: center;

`

const ElementoList = styled.p`
display: flex;
justify-content: space-between;
width: 300px;
padding: 10px;
border: 1px solid black;
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
            "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
            {
              headers: {
                Authorization: "denisson-silva-munoz"
              }
            }
        )
          .then((response) => {
            console.log(response.data.result.list);
            this.setState({listaDeNomes: response.data.result.list});
          })
          .catch((error) => {
            console.log(error.response);
          });
      };

      deleteUser = (id) => {
        if (window.confirm("Deseja mesmo deletar a Playlist?")) {
          axios
            .delete(
              `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`,
              {
                headers: {
                  Authorization: "denisson-silva-munoz"
                }
              }
            )
            .then((response) => {
              this.pegaUsuarios();
              console.log(response);
            })
            .catch((err) => {
              console.log(err);
            });
        }
      };
    

    render(){
        return(
        <ListaContainer>
          <h2>Playlists</h2>
          {this.state.listaDeNomes.map((elemento) => {
          return <ElementoList key={elemento.id}>
                    <p>{elemento.name}</p>
                    
                    <button onClick={() => this.deleteUser(elemento.id)}>remover</button>
                 </ElementoList>
        })}
          

        </ListaContainer>
        )
    }
}
        
        
        
        