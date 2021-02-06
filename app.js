const rawDinos = [
    {
        species: 'Triceratops',
        weight: 13000,
        height: 114,
        diet: 'herbavor',
        where: 'North America',
        when: 'Late Cretaceous',
        fact: 'First discovered in 1889 by Othniel Charles Marsh',
    },
    {
        species: 'Tyrannosaurus Rex',
        weight: 11905,
        height: 144,
        diet: 'carnivor',
        where: 'North America',
        when: 'Late Cretaceous',
        fact: 'The largest known skull measures in at 5 feet long.',
    },
    {
        species: 'Anklyosaurus',
        weight: 10500,
        height: 55,
        diet: 'herbavor',
        where: 'North America',
        when: 'Late Cretaceous',
        fact: 'Anklyosaurus survived for approximately 135 million years.',
    },
    {
        species: 'Brachiosaurus',
        weight: 70000,
        height: '372',
        diet: 'herbavor',
        where: 'North America',
        when: 'Late Jurasic',
        fact: 'An asteroid was named 9954 Brachiosaurus in 1991.',
    },
    {
        species: 'Stegosaurus',
        weight: 11600,
        height: 79,
        diet: 'herbavor',
        where: 'North America, Europe, Asia',
        when: 'Late Jurasic to Early Cretaceous',
        fact:
            'The Stegosaurus had between 17 and 22 seperate places and flat spines.',
    },
    {
        species: 'Elasmosaurus',
        weight: 16000,
        height: 59,
        diet: 'carnivor',
        where: 'North America',
        when: 'Late Cretaceous',
        fact: 'Elasmosaurus was a marine reptile first discovered in Kansas.',
    },
    {
        species: 'Pteranodon',
        weight: 44,
        height: 20,
        diet: 'carnivor',
        where: 'North America',
        when: 'Late Cretaceous',
        fact: 'Actually a flying reptile, the Pteranodon is not a dinosaur.',
    },
    {
        species: 'Pigeon',
        weight: 0.5,
        height: 9,
        diet: 'herbavor',
        where: 'World Wide',
        when: 'Holocene',
        fact: 'All birds are living dinosaurs.',
    },
];

// all creature here are vertebrate
// let dinosData = []
let dinosData = rawDinos.map(
    (dino) =>
        new Vertebrate(dino.species, dino.weight, dino.height, dino.diet, [
            `${dino.fact}`,
            `${dino.species} used to live in ${dino.when}`,
            `${dino.species} used to live during ${dino.where}`,
        ])
);

// fetch("dino.json")
//     .then(res => res.json())
//     .then(data => dinosData = data.Dinos.map(dino => new Vertebrate(dino.species, dino.weight, dino.height, dino.diet, dino.fact, `I am ${dino.species} and lived in ${dino.where}, during ${dino.when}.`))
// )
// Create Dino Constructor
/* ???how to define prototype to the Constructor funciton? */
function Vertebrate(species, weight, height, diet, facts) {
    // const {species, weight, height, diet, fact, intro} = dinoData
    this.species = species;
    this.weight = weight;
    this.height = height;
    this.diet = diet;
    this.fact = facts;
    // this.isHuman = isHuman ? isHuman : false;
    this.image = `images/${species.toLowerCase()}.png`;
}

// add all the necessary prototype functions to DinoConstructor
Vertebrate.prototype.addFact = function (fact) {
    this.facts.push(fact);
};

// Create Dino Objects
function Dino(species, weight, height, facts) {
    Vertebrate.call(this, species, weight, height, facts);
}
// add three random fact compare functions w. human

/* is this to be the real object? */

//there will be prototype in human to compare its with the dinosaur facy
// Create Human Object
function Human(name, weight, height, diet) {
    this.name = name;
    Vertebrate.call(this, 'human', weight, height, diet, []);
}

//add prototpe functions to Human
/*
    this.compareWeight = function () {};
    this.compareHeight = function () {};
    this.compareDiet = function () {};
*/

// Use IIFE to get human data from form
let getHumanData = function () {
    let name, height, weight, diet;
    return (function () {
        //this will be refined as the object above
        name = parseValue('name');
        height = parseValue('feet') + parseValue('inches');
        weight = parseValue('weight');
        diet = parseValue('diet');
        return new Human(name, weight, height, diet);
    })();
};

// Create Dino Compare Method 1
// NOTE: Weight in JSON file is in lbs, height in inches.

// Create Dino Compare Method 2
// NOTE: Weight in JSON file is in lbs, height in inches.

// Create Dino Compare Method 3
// NOTE: Weight in JSON file is in lbs, height in inches.

// Generate Tiles for each Dino in Array
function generateTiles(species, imagePath, facts, name) {
    let gridTile = document.createElement('div');
    gridTile.className = 'grid-item';

    let speciesDiv = document.createElement('h3');
    speciesDiv.innerText = species === 'human' ? name : species;
    gridTile.appendChild(speciesDiv);

    let imagesDiv = document.createElement('img');
    imagesDiv.src = imagePath;
    gridTile.appendChild(imagesDiv);

    // only dinosaurs include facts
    if (facts) {
        //pick one facts out of six
        let factDiv = document.createElement('p');
        factDiv.innerText = fact;
        gridTile.appendChild(factDiv);
    }

    return gridTile;
}
// Add tiles to DOM

// Remove form from screen

// On button click, prepare and display infographic
document.getElementById('btn').addEventListener('click', function () {
    const human = getHumanData();
    //the function
    console.log('dinosData', dinosData);
    console.log('human', human);
    //insert human in the center
    dinosData.splice(4, 0, human);
    dinosData.forEach((dino) => {
        let dinoCard = generateTiles(
            dino.species,
            dino.image,
            dino.facts,
            dino.name
        );
        document.getElementById('grid').appendChild(dinoCard);
    });

    document.getElementById('dino-compare').style.display = 'none';
});

//helper functions
const parseValue = (e) => document.getElementById(e).value;
//could create a helper to create element and append child
