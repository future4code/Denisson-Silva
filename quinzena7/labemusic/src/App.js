import React from 'react'
import styled from "styled-components"
import axios from 'axios'
import Criar from './components/Criar'
import Lista from './components/Lista'
import background from './background.png'


const Corpo = styled.div`
text-align: center;
`
const Header = styled.div`
display:flex;
border: 1px solid black;
justify-content: space-between;
align-items: center;
padding: 5px
`
const Footer = styled.div`
border: 1px solid black;
`

const Button = styled.button`
height: 30px;
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
          <Button onClick={this.onTrocaTela}>{this.state.valorTrocaPag}</Button>
        </Header>
        
          {this.renderizaPag()}
        
        <Footer>
          <h2>Siga-nos:</h2>

        </Footer>
      </Corpo>
    )
  }
}
