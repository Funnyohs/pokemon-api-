//js code 
fetch("https://pokeapi.co/api/v2/pokemon/charizard")
      .then(res => res.json)
      .then(data => console.log(data.sprites))
      .catch(err => console.log('Error'))
