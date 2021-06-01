import React from 'react'
import styled from "styled-components"
import axios from 'axios'
import Criar from './components/Criar'
import Lista from './components/Lista'


const Corpo = styled.div`
display: flex;
flex-direction: column;
justify-items: center;
text-align: center;
`
const Header = styled.div`
display:flex;
border: 1px solid black;
justify-content: space-between;
`
const Footer = styled.div`
border: 1px solid black;
`


export default class App extends React.Component{
  state = {
    valorTrocaPag: "Ver Playlists"
  }

  onTrocaTela = () => {
    if (this.state.valorTrocaPag === "Ver Playlists") {
      this.setState({ valorTrocaPag: "Home" });
    } else if (this.state.valorTrocaPag === "Home") {
      this.setState({ valorTrocaPag: "Ver Playlists" });
    }
  };

  renderizaPag = () => {
    switch (this.state.valorTrocaPag) {
      case "Ver Playlists":
        return <Criar />;
      case "Home":
        return <Lista />;
      default:
        return <div></div>;
    }
  };

  

  
  render(){

    return(
      <Corpo>
        <Header>
          <h1>LabeFy</h1>
          <button onClick={this.onTrocaTela}>{this.state.valorTrocaPag}</button>
        </Header>
        
          {this.renderizaPag()}
        
        <Footer>
          <h2>Siga-nos:</h2>

        </Footer>
      </Corpo>
    )
  }
}
