import React,{useState, useEffect} from 'react'
import Button from '@material-ui/core/Button';
import axios from 'axios'

function App() {
  const [pretendentes, setPretendentes] = useState([])

  useEffect(() => {
    pegaPretendentes()
  }, [])

  const pegaPretendentes = () => {
    const aluno = "Denisson"
    const url = `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${aluno}/person`
    axios.get(url, 
      {
        headers: {
          Authorization: aluno
        }
      })
      .then((response) => {
        console.log(response.data.profile);
        setPretendentes(response.data.profile)
       
      })
      .catch((error) => {
        console.log(error.response);
      });
  }
  return (
    <div>
    {pretendentes.map((pretendente) => {
        return<div key={pretendente.id}>
          <h1>{pretendente.name}</h1>
          </div>
     
    
    })}
    </div>
  );
}

export default App;
