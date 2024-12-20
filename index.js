//js code 
//This code is to fetch() the pokemon sprite data,description,stats,and image *easter egg
 function blank (Element) {
         return document.getElementById(Element) 
     }
function T() {   
     let enterValue = document.getElementById("Enter").value.toLowerCase();
     const img = document.getElementById("Img")
     const des = document.getElementById("description")
     const baseStats = [0,1,2,3,4,5]
     //please work or i blow up jk
     const totalMath = blank("total").value;
     const meter = document.querySelector("meter")
 fetch(`https://pokeapi.co/api/v2/pokemon/${enterValue}`)
      .then(res => {
           if (!res.ok){
          throw new Error("Are you stupid");
           
           } 
           return res.json()
      })
 //use to get audio, sprites and stats of the pokemon requested
  .then(data => { img.src = data.sprites.front_default; let cry = new Audio(data.cries.latest); cry.play();baseStats.forEach((item) => {
      return blank(data.stats[item].stat.name).value = data.stats[item].base_stat; totalMath += data.stats[item].base_stat
 })  })
      .catch(err => console.log('Error'))
// gets the description of pokemon requested
 fetch(`https://pokeapi.co/api/v2/pokemon-species/${enterValue}`)
 .then(res => {
      if (!res.ok){
           throw new Error("Are you stupid");
      }
      return res.json()
 })
     .then( data => { for (let i = 0; i < 75; i++) {if(data.flavor_text_entries[i].language.name == "en"){ break; }des.innerHTML = data.flavor_text_entries[i].language.name;};})
           .catch(err => console.log("Error"))
       // W.I.P sets the color of meter 
       if (meter.value < 65) {
       meter.style.color = "red"
        }  else if (meter.value <= 130) {
         meter.style.color = "yellow"
        } else {
         meter.style.color = "green"
        };
         
}
