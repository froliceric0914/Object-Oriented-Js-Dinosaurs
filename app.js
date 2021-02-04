
    // Create Dino Constructor

    /* ???how to define prototype to the Constructor funciton? */
function Dinos(species, weight, height, diet, where, when, fact){
    this.species = species
    this.weight = weight
    this.diet = diet
    this.where = where
    this.when = when
    this.compareHeight= function (){ }
    this.compareWeight= function (){ }
    this.compareDiet= function (){ }

}

    // Create Dino Objects

    /* is this to be the real object? */
    let Dino = new Dinos()

    // Create Human Object
    function Human(){

    }

    // Use IIFE to get human data from form

const getHumanData = function(){
    const humanData= { //this will be refined as the object above
        name: parseValue("name"),
        height: parseValue("feet") + parseValue("inches"),
        weight: parseValue("inches"),
        diet: parseValue("diet")
    }

    // console.log("humanData", humanData)
    return (function(){
        return humanData;  
    })()
}

    // Create Dino Compare Method 1
    // NOTE: Weight in JSON file is in lbs, height in inches. 

    
    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.

    
    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.


    // Generate Tiles for each Dino in Array
  function generateTiles() {
      let gridTile = document.createElement("div")
      gridTile.className("grid-item")

      //add species

      //add images

      //add fact

      return gridTile
  }
        // Add tiles to DOM

    // Remove form from screen


// On button click, prepare and display infographic
function logSubmit(event) {
    event.preventDefault();
    const human = getHumanData();
    console.log("humanData", human)
    console.log("hello")
  }
  

  (function (){
      document.getElementById('btn').addEventListener('click', logSubmit)
  })()

  //helper functions
  const parseValue = (value) =>{
    document.getElementById(value).value
}
