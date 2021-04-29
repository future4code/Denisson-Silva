import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno'

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://media-exp1.licdn.com/dms/image/C5603AQFVhcZyMI1hmQ/profile-displayphoto-shrink_800_800/0/1519387311729?e=1625097600&v=beta&t=Arl55So32XGJUwxctVjuZdWhPQxn14muH0dFzNIzB0E" 
          nome="Denisson V. Da Silva" 
          descricao="Sonhador, estudante da área de TI na Labenu.
          Vasta experiência no ambiente de vendas e execução. Atuei desde o inicio da minha carreira profissional em empresas renomadas como JTOLEDO, LE BISCUIT, SOLAR COCA-COLA DO BRASIL e atualmente encarando novos desafios na grandiosa AMBEV."
        />
        <CardPequeno
        imagem= "https://image.flaticon.com/icons/png/128/1295/1295079.png"
        nome= "Endereço"
        descricao= "Rua dos Sonhadores, S/N, Terra da Esperança "
  
        />
        <CardPequeno
        imagem= "https://as1.ftcdn.net/jpg/01/81/00/34/500_F_181003490_CxW4fQ0H3VypIIsPkFGpMDviO8ysWjOZ.jpg"
        nome= "Email"
        descricao= "denisson.boulevardmotos@gmail.com"
  
        />
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://image.flaticon.com/icons/png/128/931/931949.png" 
          nome="Ambev" 
          descricao='Fazendo a alegria do povo, vendendo o "Suco da Alegria"'
        />
        
        <CardGrande 
          imagem="https://image.flaticon.com/icons/png/128/3076/3076028.png" 
          nome="Coca-Cola" 
          descricao="Vendendo garrafas contendo o melhor refrigerante familiar de todos." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
