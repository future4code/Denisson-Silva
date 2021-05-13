import logo from './logo.svg';
import './App.css';
import React from 'react';
import Etapa1 from './components/etapa1'
import Etapa2 from './components/etapa2'
import Etapa3 from './components/etapa3'
import SoAgradece from './components/soAgradece'
import styled from 'styled-components';

const Botao = styled.button`

margin-left: 629px;
`



class App extends React.Component {
  
  state = {
    etapa: 1
  }
    


trocaTela = () => {
  switch (this.state.etapa) {
    case 1:
      return <Etapa1/>;
    case 2: 
      return <Etapa2/>;
    case 3: 
      return <Etapa3/>;
    case 4: 
      return <SoAgradece/>;

      default:
        return <SoAgradece/>
    
  }

}

trocaEtapa = () => {
 this.setState({etapa: this.state.etapa + 1 })
}

  render(){
    return(
      <div>
        {this.trocaTela()}
        <br/>
        {this.state.etapa !== 4 && (
          <Botao onClick={this.trocaEtapa}>Próxima etapa</Botao>
        )}
      </div>

    )
  


    
   };
  }

export default App;
