//js code 
let enter = document.getElementById("Enter")
const img = document.getElementById("Img")
console.log(enter)
console.log(img)
function value() {
     console.log(enter)
      console.log(img)
      console.log(enter.value)
}
function T() {
let enterValue = enter.value;      
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
