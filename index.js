//js code 
//This code is to fetch() the pokemon sprite data,description,stats,and image *easter egg
 function blank (Element) {
         return document.getElementById(Element) 
     }
 let normal;
 let shiny;
 const img = document.getElementById("Img");
 const des = document.getElementById("description");
 const meter = document.querySelector("meter");
function T() {   
     let enterValue = document.getElementById("Enter").value.toLowerCase();
     const baseStats = [0,1,2,3,4,5]
     //please work or i blow up jk
     const totalMath = blank("total").value;
 fetch(`https://pokeapi.co/api/v2/pokemon/${enterValue}`)
      .then(res => {
           if (!res.ok){
          throw new Error("Are you stupid");
           
           } 
           return res.json()
      })
 //use to get audio, sprites and stats of the pokemon requested
  .then(data => { 
   /*
   normal = data.sprites.front_default;
   shiny = data.sprites.front_shiny;
   */
   let cry = new Audio(data.cries.latest);
   img.src = data.sprites.front_default;
   cry.play();baseStats.forEach((item) => {
      return blank(data.stats[item].stat.name).value = data.stats[item].base_stat; totalMath += data.stats[item].base_stat
 })  })
      .catch(err => console.log(err))
// gets the description of pokemon requested
 fetch(`https://pokeapi.co/api/v2/pokemon-species/${enterValue}`)
 .then(res => {
      if (!res.ok){
           throw new Error("Are you stupid");
      }
      return res.json()
 })
     .then(data => {
            // Find English description
           
            for (let i = 0; i < 50; i++) {
                if (data.flavor_text_entries[i].language.name === "en") {
                    blank("bomb").innerHTML = data.flavor_text_entries[i].flavor_text;
                    break;
                }
            }

         
        })
       /* W.I.P sets the color of meter 
       if (meter.value < 65) {
       meter.style.color = "red"
        }  else if (meter.value <= 130) {
         meter.style.color = "yellow"
        } else {
         meter.style.color = "green"
        };
         */
}
