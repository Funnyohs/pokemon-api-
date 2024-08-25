//js code 
let pokemon = document.getElementById("pokemonName")
const Poke = document.getElementById("pokemon")
function T() {
let pokeValue = pokemon.value;
      fetch(`https://pokeapi.co/api/v2/pokemon/${pokeValue}`)
      .then(res => {
           if (!res.ok){
          throw new Error("Are you stupid");
           
           } 
            res.json()
      })
      .then(data => {let image = data; poke.src = data.sprites.front_default})
      .catch(err => console.log('Error'))
}
