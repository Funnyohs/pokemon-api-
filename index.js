//js code 
let pokemon = document.getElementById("pokemonName")..toLowerCase
const Poke = document.getElementById("pokemon")value.toLowerCase
function placeholder() {
fetch("https://pokeapi.co/api/v2/pokemon/${pokemon}")
      .then(res => {
           if (!res.ok){
          throw new Error("Are you stupid");
           
           } 
            res.json
      })
      .then(data => {Poke.scr("data.sprites.front_defalt") })
      .catch(err => console.log('Error'))
}
