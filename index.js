//js code 
//This code is to fetch() the pokemon sprite data,description,stats,and image *easter egg ;)
function blank (Element) {
         return document.getElementById(Element) 
     }
 let normal;
 let shiny;
 let pokemonType;
 let pokemonTpe;
 let img = document.getElementById("Img");
 const des = document.getElementById("description");
 const meter = document.querySelector("meter");
 //use to get audio, sprites and stats of the pokemon requested
function R() {
     if (blank("shiny").checked) {
   blank("Img").src = shiny;
     }else {
          blank("Img").src = normal;     
    }
     }
function T() {   
     pokemonType = document.getElementById("Enter").value.toLowerCase();
     const baseStats = [0,1,2,3,4,5]
     //please work or i blow up jk
     const totalMath = blank("total").value;
 fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonType}`)
      .then(res => {
           if (!res.ok){
          throw new Error("Are you stupid");
           
           } 
           return res.json()
      })
 //use to get audio, sprites and stats of the pokemon requested
  .then(data => { 
   blank(type).innerHTML = data.types[0].type.name + " " + data.types[1].type.name;
   normal = data.sprites.front_default;
   shiny = data.sprites.front_shiny;
   let cry = new Audio(data.cries.latest);
   blank("Img").alt = data.species.name;
   pokemonTpe = data.species.name;        
   if (blank("shiny").checked) {
   blank("Img").src = shiny;
   } else {
   blank("Img").src = normal;
   };
   cry.play();baseStats.forEach((item) => {
      return blank(data.stats[item].stat.name).value = data.stats[item].base_stat; totalMath += data.stats[item].base_stat
 })  
// gets the description of pokemon requested
 fetch(`https://pokeapi.co/api/v2/pokemon-species/${data.species.name}`)
 .then(resa => {
      if (!resa.ok){
           throw new Error("Are you stupid");
      }
      return resa.json()
     .then(dat => {
            // Find English description
           
            for (let i = 0; i < 50; i++) {
                if (dat.flavor_text_entries[i].language.name === "en") {
                    blank("bomb").innerHTML = dat.flavor_text_entries[i].flavor_text;
                    break;
                }
            }

         
        })
           })
      .catch(err => console.log(err))
       /* W.I.P sets the color of meter 
       if (meter.value < 65) {
       meter.style.color = "red"
        }  else if (meter.value <= 130) {
         meter.style.color = "yellow"
        } else {
         meter.style.color = "green"
        };
         */
})}
function autocomplete(inp, arr) {
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
      /*close any already open lists of autocompleted values*/
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
      /*create a DIV element that will contain the items (values):*/
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      /*append the DIV element as a child of the autocomplete container:*/
      this.parentNode.appendChild(a);
      /*for each item in the array...*/
      for (i = 0; i < arr.length; i++) {
        /*check if the item starts with the same letters as the text field value:*/
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          /*create a DIV element for each matching element:*/
          b = document.createElement("DIV");
          /*make the matching letters bold:*/
          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length);
          /*insert a input field that will hold the current array item's value:*/
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
          /*execute a function when someone clicks on the item value (DIV element):*/
          b.addEventListener("click", function(e) {
              /*insert the value for the autocomplete text field:*/
              inp.value = this.getElementsByTagName("input")[0].value;
              /*close the list of autocompleted values,
              (or any other open lists of autocompleted values:*/
              closeAllLists();
          });
          a.appendChild(b);
        }
      }
  });
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
        currentFocus++;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 38) { //up
        /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
        currentFocus--;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 13) {
        /*If the ENTER key is pressed, prevent the form from being submitted,*/
        e.preventDefault();
        if (currentFocus > -1) {
          /*and simulate a click on the "active" item:*/
          if (x) x[currentFocus].click();
        }
      }
  });
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
      closeAllLists(e.target);
  });
}
let allPokemon = [];
      fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
      .then(res => {
           if (!res.ok){
          throw new Error("Are you stupid");
           
           } 
           return res.json()
      })
    .then(data => {
       data.results.forEach((element) => allPokemon.push(element.name));
   }) 
      autocomplete(document.getElementById("Enter"),allPokemon);
        
