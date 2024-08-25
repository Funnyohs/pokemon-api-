//js code 
let enterValue = document.getElementById("Enter").value.toLowerCase();
const img = document.getElementById("Img")
console.log(enterValue)
console.log(img)
function value() {
     console.log(enterValue)
     console.log(img)
}
function T() {   
      fetch(`https://pokeapi.co/api/v2/pokemon/${enterValue}`)
      .then(res => {
           if (!res.ok){
          throw new Error("Are you stupid");
           
           } 
           return res.json()
      })
      .then(data => {let image = data; img.src = data.sprites.front_default})
      .catch(err => console.log('Error'))
}
