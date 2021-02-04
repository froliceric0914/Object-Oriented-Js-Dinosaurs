
    // Create Dino Constructor

    /* ???how to define prototype to the Constructor funciton? */
function Dinos(species, weight, height, diet, where, when, facts){
    this.species = species
    this.weight = weight
    this.height = height
    this.diet = diet
    this.where = where
    this.when = when
    this.facts = facts
    this.image = `image/${species,toLowerCase()}.png`
    this.addFact = function (fact) {
        this.facts.push(fact)
    }
    this.compareHeight= function (){ }
    this.compareWeight= function (){ }
    this.compareDiet= function (){ }

}
// define proto for human.
    // Create Dino Objects

    /* is this to be the real object? */
    let Dino = new Dinos()

    // Create Human Object
    function Human(name, weight, height, diet){
        this.name = name
        this.weight = weight
        this.height = height
        this.diet = diet
    }

    // Use IIFE to get human data from form
const getHumanData = function(){
    // let name, height, weight, diet
    // let humanData= 
    console.log( "name:", parseValue("name"))
    // console.log("humanData", humanData)
    return (function(){
            //this will be refined as the object above
            let name = parseValue("name")
            let height = parseValue("feet") + parseValue("inches")
            let weight = parseValue("weight")
            let diet = parseValue("diet")
            console.log("human info", {name, height, weight, diet})
        return new Human(name, weight, height, diet)
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
    console.log("event", event)
    const human = getHumanData();
    //the function
    console.log("human in logSubmit", human)

    console.log("hello")
  }

document.getElementById('btn').addEventListener('click', logSubmit)
 

  //helper functions
  const parseValue = (value) =>{
      console.log("parseValue", value, document.getElementById(value).value )
    document.getElementById(value).value
}
