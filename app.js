const rawDinos =  [
    {
        "species": "Triceratops",
        "weight": 13000,
        "height": 114,
        "diet": "herbavor",
        "where": "North America",
        "when": "Late Cretaceous",
        "fact": "First discovered in 1889 by Othniel Charles Marsh"
    },
    {
        "species": "Tyrannosaurus Rex",
        "weight": 11905,
        "height": 144,
        "diet": "carnivor",
        "where": "North America",
        "when": "Late Cretaceous",
        "fact": "The largest known skull measures in at 5 feet long."
    },
    {
        "species": "Anklyosaurus",
        "weight": 10500,
        "height": 55,
        "diet": "herbavor",
        "where": "North America",
        "when": "Late Cretaceous",
        "fact": "Anklyosaurus survived for approximately 135 million years."
    },
    {
        "species": "Brachiosaurus",
        "weight": 70000,
        "height": "372",
        "diet": "herbavor",
        "where": "North America",
        "when": "Late Jurasic",
        "fact": "An asteroid was named 9954 Brachiosaurus in 1991."
    },
    {
        "species": "Stegosaurus",
        "weight": 11600,
        "height": 79,
        "diet": "herbavor",
        "where": "North America, Europe, Asia",
        "when": "Late Jurasic to Early Cretaceous",
        "fact": "The Stegosaurus had between 17 and 22 seperate places and flat spines."
    },
    {
        "species": "Elasmosaurus",
        "weight": 16000,
        "height": 59,
        "diet": "carnivor",
        "where": "North America",
        "when": "Late Cretaceous",
        "fact": "Elasmosaurus was a marine reptile first discovered in Kansas."
    },
    {
        "species": "Pteranodon",
        "weight": 44,
        "height": 20,
        "diet": "carnivor",
        "where": "North America",
        "when": "Late Cretaceous",
        "fact": "Actually a flying reptile, the Pteranodon is not a dinosaur."
    },
    {
        "species": "Pigeon",
        "weight": 0.5,
        "height": 9,
        "diet": "herbavor",
        "where": "World Wide",
        "when": "Holocene",
        "fact": "All birds are living dinosaurs."
    }
]


// all creature here are vertebrate
// let dinosData = []
let dinosData = rawDinos.map((dino => new DinoContructor(dino.species, dino.weight, dino.height, dino.diet, dino.fact, `I am ${dino.species} and lived in ${dino.where}, during ${dino.when}.`)))

// fetch("dino.json")
//     .then(res => res.json())
//     .then(data => dinosData = data.Dinos.map(dino => new DinoContructor(dino.species, dino.weight, dino.height, dino.diet, dino.fact, `I am ${dino.species} and lived in ${dino.where}, during ${dino.when}.`))
// )
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
    this.image = `image/${species.toLowerCase()}.png`
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
    let gridTile = document.createElement("div")
    gridTile.className = "grid-item"

    //add species, imagePatch, fact & intro div
    let speciesDiv = document.createElement("h1")
    speciesDiv.innterText = species
    gridTile.appendChild(speciesDiv)

    let imagesDiv = document.createElement("img")
    imagesDiv.src = imagePath
    gridTile.appendChild(imagesDiv)

    // only dinosaurs include fact and intro
    if (fact && intro) {
        let factDiv = document.createElement("p")
        factDiv.innerText = fact
        gridTile.appendChild(factDiv)

        let introDiv = document.createElement("p")
        introDiv.innerText = intro
        gridTile.appendChild(introDiv)
    }
    
    return gridTile
}
    // Add tiles to DOM

    // Remove form from screen


// On button click, prepare and display infographic
document.getElementById('btn').addEventListener('click', function () {
    const human = getHumanData();
    //the function
    dinosData.forEach((i, dino) => {
        let dinoCard = generateTiles(dino.species, dino.image, dino.fact, dino.intro)
        document.getElementBtId("grid").appendChild(dinoCard)
    })
    console.log("human in logSubmit", human)

    console.log("hello")
})
 

//helper functions
const parseValue = (e) => {document.getElementById(e).value}
//could create a helper to create element and append child