//js code 
let pokemon = getElementById("pokemonName")
const Poke = getElementById("pokemon")
function placeholder() {
fetch("https://pokeapi.co/api/v2/pokemon/" + pokemon)
      .then(res => {
           if (!res.ok){
          throw new Error("Are you stupid");
           
           } 
            res.json
      })
      .then(data => )
      .catch(err => console.log('Error'))
}
