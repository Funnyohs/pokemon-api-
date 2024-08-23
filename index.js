//js code 
let pokemon = getElementById("pokemonName")
const Poke = getElementById("pokemon")
const Img = getElementById("")
function placeholder() {
fetch("https://pokeapi.co/api/v2/pokemon/" + pokemon)
      .then(res => {
           if (!res.ok){
          throw new Error("Are you stupid");
           
           } 
            res.json
      })
      .then(data => data.sprites.front_defalt )
      .catch(err => console.log('Error'))
}
