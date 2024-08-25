//js code 
//This code is to fetch() the pokemon sprite data
function T() {   
     let enterValue = document.getElementById("Enter").value.toLowerCase();
     const img = document.getElementById("Img")
     let des = document.getElementById("description")
     fetch(`https://pokeapi.co/api/v2/pokemon/${enterValue}`)
      .then(res => {
           if (!res.ok){
          throw new Error("Are you stupid");
           
           } 
           return res.json()
      })
 .then(data => { img.src = data.sprites.front_default; let cry = new Audio(data.cries.latest); cry.play(); })
      .catch(err => console.log('Error'))
fetch(`https://pokeapi.co/api/v2/pokemon-species/${enterValue}`)
 .then(res => {
      if (!res.ok){
           throw new Error("Are you stupid");
      }
      return red.json()
 })
     .then( data => { des = data.form_descriptions.[0]})
           .ctach(err => console.log("Error"))
                  }
