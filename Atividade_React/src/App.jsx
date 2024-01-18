import { useState, useEffect} from 'react'


function App() {
  const [id, setId] = useState(1);
  const [pokemon, setPokemon] =useState(null);

  const fetchData = async () =>{
    try{
      const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const dados = await resposta.json();
      setPokemon(dados) 
    } catch(error){
      console.error(`Erro: `, error);
    }
  }

  useEffect(() =>{
    fetchData();
  },[id]);

  const proximo = () => {
    setId(id + 1);
  }

  return (
  <div>
    {pokemon && (
      <h1>Pokédex</h1>
    )

    }

  </div>

  )
}

export default App
