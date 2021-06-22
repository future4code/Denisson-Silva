import React,{useState, useEffect} from 'react'
import axios from 'axios'
import styled from 'styled-components'
import CloseIcon from '@material-ui/icons/Close';
import FavoriteIcon from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';



const Raiz = styled.div`
background-color: #b06362;
margin: 0px auto;
padding: 15px;
height: 100vh;
`
const Header = styled.div`
font-size: 15px;
width: 22rem;
text-align: center;
display: flex;
flex-direction: flex-end;
justify-content: space-around;
margin-left: 60px;
color: blue;
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
`

const CardContainer = styled.div`
padding: 10px;
border: 1px solid black;
width: 22rem;
height: 550px;
margin-left: 500px;
margin-top: 20px;
background-color: #f6c4aa;
`
const CardPerfil = styled.div`
display: inline-block;
position: relative;
margin-top: 10px
`

const Imagem = styled.img`
width: 100%;
height: 430px;
border-radius: 10px;
`

const Footer = styled.div`
display: flex;
justify-content: space-around;
font-size: 40px;
margin-top: 8px;

`

const Legends = styled.div`
position: absolute;
bottom: 10px;
left: 5px;
font-size: 20px;
color: white;
text-shadow: 0px 0px 5px black;
`


function App() {
  const [pretendentes, setPretendentes] = useState([])

  useEffect(() => {
    const aluno = "Denisson"
    const url = `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${aluno}/person`
    axios.get(url, 
      {
        headers: {
          Authorization: aluno
        }
      })
      .then((response) => {
        console.log(response.data.profile)
        setPretendentes(response.data.profile)
       
      })
      .catch((error) => {
        console.log(error.response);
      });
  }, [])



  
    
  return (
    <Raiz>
      <CardContainer>
        <Header>
          <h3>Astromatch</h3>
          <IconButton color="primary" size="large">
            <PeopleAltIcon/> 
          </IconButton>
        </Header>

        <CardPerfil key={pretendentes.id}>
          <Imagem src={pretendentes.photo}></Imagem>
          <Legends>
            <h1>{pretendentes.name},{pretendentes.age} </h1> 
            <p>{pretendentes.bio}</p>
          </Legends>
          
        </CardPerfil>

        <Footer>
          <IconButton color="secondary" size="large" >
            <FavoriteIcon variant="outlined"/> 
          </IconButton>
          <IconButton color="primary" size="large">
             <CloseIcon/>
          </IconButton>
          
        </Footer>
        
      </CardContainer>
    </Raiz>
  );
}

export default App;
