import { Container, PokemonContainer, Texto, Botao} from './style'
import { useState, useEffect } from 'react'


function App() {
  const [id, setId] = useState(1)
  const [pokemon, setPokemon] = useState(null)
  const [habitat, setHabitat] = useState('')
 

  const fetchData = async () => {
    try {
      const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      const dados = await resposta.json()
      setPokemon(dados)

      const respostaHabitat = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
      const dadosHabitat = await respostaHabitat.json()
      setHabitat(dadosHabitat.habitat.name)

    } catch (error) {
      console.error(`Erro: `, error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [id])

  const proximo = () => {
    setId(id + 1)
  }
  const voltar = () => {
    setId(id - 1)
  }

  return (
    <Container>
      {pokemon && (
        <PokemonContainer>
          
          <Texto>{pokemon.name}</Texto>
          <p>Habitat: {habitat}</p>
          <img src={pokemon.sprites.other.dream_world.front_default} style={{width: '150px' }} />
        <div>
          {id > 1 && (
           
            <Botao onClick={voltar}>Voltar</Botao>
          )}
          <Botao onClick={proximo}>Próximo</Botao>

          </div>
        </PokemonContainer>  
        
      )}
    </Container>
  )
}

export default App
