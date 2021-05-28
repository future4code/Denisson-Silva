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

export default class App extends React.Component{
  state = {
    valorTrocaPag: "criar"
  }

  onTrocaTela = () => {
    if (this.state.valorTrocaPag === "criar") {
      this.setState({ valorTrocaPag: "lista" });
    } else if (this.state.valorTrocaPag === "lista") {
      this.setState({ valorTrocaPag: "criar" });
    }
  };

  renderizaPag = () => {
    switch (this.state.valorTrocaPag) {
      case "criar":
        return <Criar />;
      case "lista":
        return <Lista />;
      default:
        return <div></div>;
    }
  };

  

  
  render(){

    return(
      <Corpo>
        <div>
          <h1>Labenuser</h1>
          <button onClick={this.onTrocaTela}>Trocar de Pagina</button>
          {this.renderizaPag()}
        </div>
      </Corpo>
    )
  }
}
