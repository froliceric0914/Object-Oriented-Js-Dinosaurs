// all creature here are vertebrate
let dinosData = []
fetch("dino.json")
    .then(res => res.json())
    .then(data => dinosData = data.Dinos.map(dino => new DinoContructor(dino.species, dino.weight, dino.height, dino.diet, dino.fact, `I am ${dino.species} and lived in ${dino.where}, during ${dino.when}.`))
)
    // Create Dino Constructor
    /* ???how to define prototype to the Constructor funciton? */
function DinoContructor (species, weight, height, diet, fact, intro) {
    // const {species, weight, height, diet, fact, intro} = dinoData
    this.species = species
    this.weight = weight
    this.height = height
    this.diet = diet
    // this.where = where
    // this.when = when
    this.fact = fact
    this.intro = intro
    // this.image = `image/${species.toLowerCase()}.pn
}

// add all the necessary prototype functions to DinoConstructor
DinoContructor.prototype.addFact = function(fact) {
    this.fact.push(fact)
}
    // Create Dino Objects
function Dino(species, weight, height, fact){
    DinoContructor.call(this, species, weight, height, fact)
}

// let Dino = new Dinos(species, weight, height, diet,where, when, fact)

    /* is this to be the real object? */


    //there will be prototype in human to compare its with the dinosaur facy
    // Create Human Object
function Human(name, weight, height, diet){
    this.name = name
    this.weight = weight
    this.height = height
    this.diet = diet
    this.compareWeight = function (){}
    this.compareHeight = function (){}
    this.compareDiet = function (){}
}

//add prototpe functions to Human

// Use IIFE to get human data from form
let getHumanData = function() {
  let name, height, weight, diet
    return (function () {
        //this will be refined as the object above
        name = parseValue("name")
        height = parseValue("feet") + parseValue("inches")
        weight = parseValue("weight")
        diet = parseValue("diet")
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
function generateTiles(species, imagePath, fact, intro) {
    let gridTileCard = document.createElement("div")
    gridTile.className("grid-item")

    //add species, imagePatch, fact & intro div
    let speciesDiv = document.createElement("h1")
    speciesDiv.innterText = species
    gridTileCard.appendChild(speciesDiv)

    let imagesDiv = document.createElement("img")
    imagesDiv.src = imagePath
    gridTileCard.appendChild(imagesDiv)

    // only dinosaurs include fact and intro
    if (fact && intro) {
        let factDiv = document.createElement("p")
        factDiv.innerText = fact
        gridTileCard.appendChild(factDiv)

        let introDiv = document.createElement("p")
        introDiv.innerText = intro
        gridTileCard.appendChild(introDiv)
    }
    
    return gridTileCard
}
    // Add tiles to DOM

    // Remove form from screen


// On button click, prepare and display infographic
document.getElementById('btn').addEventListener('click', function () {
    const human = getHumanData();
    //the function
    console.log("human in logSubmit", human)
    console.log("dinoData", dinoDatas)
    console.log("hello")
})
 

//helper functions
const parseValue = (e) => {document.getElementById(e).value}
//could create a helper to create element and append child