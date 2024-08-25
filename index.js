//js code 
let pokemon = document.getElementById("pokemonName")
const Poke = document.getElementById("pokemon")
function T() {
let pokeValue = Poke.value;
      fetch(`https://pokeapi.co/api/v2/pokemon/${pokeValue}`)
      .then(res => {
           if (!res.ok){
          throw new Error("Are you stupid");
           
           } 
            res.json()
      })
      .then(data => {let image = data;               })
      .catch(err => console.log('Error'))
}
