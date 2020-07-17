import React, {useState, useEffect} from 'react';
import './App.css';
import styled from 'styled-components'
import axios from 'axios'
import Character from './components/Character'

const Character_cards = styled.div`
background-image: url('./images/sw-bg.jpg');
background-size: cover;
background-repeat: no-repeat;
// border: 1px solid red;
display: flex;
flex-wrap: wrap;
// height: 40vh;
justify-content: space-around;
// align-items: space-between;

`


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
 
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [characters, setCharacters] = useState([])
  useEffect(() => {
    axios.get('https://swapi.dev/api/people')
    .then(response => {
      console.log(response)
      setCharacters(response.data.results)
    })
    .catch(err => {
      console.log("The data is not showing")
    })
  }, []);

  return (
    <div className="App">
      <h1 className="Header">Star Wars Characters</h1>
      <Character_cards>
      {characters.map((character, index) => {
        return(
          <Character
          key ={index}
          name={character.name}
          gender={character.gender}
          hair={character.hair_color}
          
          />
        )
      }, [])}
      </Character_cards>
      
      
    </div>
  );
}

export default App;
