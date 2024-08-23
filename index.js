//js code 
let pokemon = ''
const Poke = getElementById('pokemon')
fetch("https://pokeapi.co/api/v2/pokemon/" + pokemon)
      .then(res => res.json)
      .then(data => )
      .catch(err => console.log('Error'))
