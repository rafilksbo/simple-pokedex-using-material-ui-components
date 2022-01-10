import { useEffect, useState } from "react";
import { useLocalStorage } from "react-use";
import "./App.css";
import Card from "./components/Card/index";
import NavBar from "./components/NavBar/index";
import SearchItem from "./components/Search";
import CustomAlert from "./components/Alert";
function App() {
  const [cacheSearch, setCacheSearch, removeCacheSearch] = useLocalStorage('pokemonSearch', [])
  const [pokemon, setPokemon] = useState( {});
  const [searchPokemon, setSearchPokemon] = useState("");
  const [open, setOpen] = useState(false)

  useEffect(() => {
    handleRequestToApi();
  }, []);

  useEffect(() => {
    console.log(cacheSearch)
    saveInCache();
  }, [pokemon]);

  useEffect(() =>{
    const timeout = setTimeout(() =>{
      setOpen(false)
      
    }, 5000)

  }, [open])

  function checkInCache(){
    return cacheSearch.find((item) => item.name === searchPokemon)
  }

  function saveInCache() {
    setCacheSearch([... cacheSearch, pokemon]);
  }

  async function handleFindPokemon(){
    const result = checkInCache()
    console.log(result)
    if(result){
      return setPokemon(result)
    }
    
    handleRequestToApi()
  }

  async function handleRequestToApi() {
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${searchPokemon || "pikachu"}`
      );
      const {
        name,
        abilities,
        sprites: {
          //desestrututações seguidas para pegar a propriedade dreamworld
          other: {
            dream_world: { front_default },
          },
        },
      } = await response.json();

      const currentPokemon = {
        name,
        abilities,
        image: front_default,
      };

      setPokemon(currentPokemon);
    } catch (error) {
      setOpen(true)
      setSearchPokemon(""); 
    }
  }

  return (
    <div className="App">
      <NavBar />
      <div className="container-card">
        <Card
          name={pokemon.name}
          abilities={pokemon.abilities}
          image={pokemon.image}
        />
        <SearchItem
          searchPokemon={searchPokemon}
          setSearchPokemon={setSearchPokemon}
          handleFindPokemon={handleFindPokemon}
        ></SearchItem>
      </div>
      { open && <CustomAlert/>}
    </div>
  );
}

export default App;
